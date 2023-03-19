import { Theme } from "@md3-ui/theme"
import { __DEV__, cx, isFunction } from "@md3-ui/utils"
import * as React from "react"
import { PressableStateCallbackType as RNPressableStateCallbackType } from "react-native"
import { useTheme } from "./context"
import { css } from "./create-css"
import { styleFunctionSx } from "./style-function-sx"
import { CreateStyled, RNStyle, StyledComponent, StyledOptions } from "./types"
import { useStyleSheet } from "./use-style-sheet"
import { createElement } from "./utils/create-element"

function getDisplayName(Component: React.ElementType) {
  return typeof Component === "string"
    ? Component
    : Component.displayName || Component.name || "Styled"
}

export function defaultShouldForwardProp(prop: keyof any) {
  return (
    prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as"
  )
}

function lowerCaseFirst(str: string) {
  return str.charAt(0).toLowerCase() + str.slice(1)
}

export const styled: CreateStyled = <
  T extends React.ComponentType<{
    style?: RNStyle
    theme?: Theme
  }>,
>(
  Component: T,
  {
    name: componentName,
    slot: componentSlot,
    shouldForwardProp = defaultShouldForwardProp,
    skipSx = false,
  }: StyledOptions = {},
) => {
  const shouldUseAs = !shouldForwardProp("as")

  const label = componentName
    ? `${componentName}-${lowerCaseFirst(componentSlot || "Root")}`
    : undefined

  return function createStyledComponent(...styles: any[]) {
    const Styled = React.forwardRef<T, React.ComponentProps<T>>(
      ({ dataSet, style, ...props }: React.ComponentProps<T> & any, ref) => {
        const theme = useTheme()

        const FinalTag = (shouldUseAs && props.as) || Component

        const mergedProps = React.useMemo(
          () => ({ ...props, theme }),
          [props, theme],
        )

        const extendedStyles = React.useMemo<RNStyle>(
          () =>
            css.apply(mergedProps, [
              ...styles,
              skipSx ? {} : styleFunctionSx(mergedProps),
            ]) || {},
          [mergedProps],
        )

        const styleSheet = useStyleSheet(extendedStyles)

        const newProps = Object.keys(props).reduce((acc, key) => {
          if (shouldForwardProp(key) && (!shouldUseAs || key !== "as")) {
            acc[key] = props[key]
          }
          return acc
        }, {} as Record<string, any>)

        newProps.ref = ref
        newProps.dataSet = {
          ...dataSet,
          class: cx(dataSet?.class, label),
        }
        newProps.style = isFunction(style)
          ? (state: RNPressableStateCallbackType) => [
              styleSheet.style,
              style(state),
            ]
          : [styleSheet.style, style]

        return createElement(FinalTag, newProps)
      },
    ) as StyledComponent<T, React.ComponentProps<T>, {}>

    if (__DEV__) {
      Styled.displayName = componentName
        ? `${componentName}${componentSlot || ""}`
        : `styled(${getDisplayName(Component)})`
    }

    return Styled
  }
}
