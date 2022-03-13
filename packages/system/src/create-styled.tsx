import { Theme } from "@md3-ui/theme"
import { isFunction, objectFilter, __DEV__ } from "@md3-ui/utils"
import MediaQuery from "css-mediaquery"
import * as React from "react"
import { PressableStateCallbackType, useWindowDimensions } from "react-native"
import { useTheme } from "./context"
import { css } from "./create-css"
import { styleFunctions } from "./style-functions"
import { StyleSheet } from "./style-sheet"
import {
  AllStyle,
  CreateStyled,
  NamedStyles,
  StyledComponent,
  StyledOptions,
} from "./types"
import { findBreakpoints } from "./utils"

function getDisplayName(Component: React.ElementType) {
  return typeof Component === "string"
    ? Component
    : Component.displayName || Component.name || "Styled"
}

function useStyleSheet(
  styles: AllStyle,
  mediaValues?: Partial<MediaQuery.MediaValues>,
  breakpoint?: string | number,
) {
  const { ids, styles: createdStyles } = React.useMemo(
    () =>
      StyleSheet.createWithMedia(
        { styles: objectFilter(styles, (style) => style != null) },
        mediaValues,
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [breakpoint, mediaValues, styles],
  )
  return { id: ids.styles, style: createdStyles.styles }
}

export function defaultShouldForwardProp(prop: keyof any) {
  return (
    prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as"
  )
}

export const styled: CreateStyled = <
  T extends React.ComponentType<{
    style?: NamedStyles<any>
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

  return function createStyledComponent(...styles: any[]) {
    const Styled = React.forwardRef<typeof Component, React.ComponentProps<T>>(
      ({ dataSet, style, ...props }: React.ComponentProps<T> & any, ref) => {
        const theme = useTheme()
        const { width } = useWindowDimensions()

        const FinalTag = (shouldUseAs && props.as) || Component

        const mergedProps = React.useMemo(
          () => ({ ...props, theme }),
          [props, theme],
        )

        const extendedStyles = React.useMemo<AllStyle>(
          () =>
            css.apply(mergedProps, [
              ...styles,
              skipSx ? {} : styleFunctions(mergedProps),
            ]) || {},
          [mergedProps],
        )

        const breakpoints = React.useMemo(
          () => findBreakpoints(extendedStyles),
          [extendedStyles],
        )

        const getBreakpoint = React.useCallback(
          (newWidth: number) => breakpoints.find((item) => newWidth < item),
          [breakpoints],
        )

        const [breakpoint, setBreakpoint] = React.useState(getBreakpoint(width))

        React.useEffect(() => {
          setBreakpoint(getBreakpoint(width))
        }, [getBreakpoint, width])

        const styleSheet = useStyleSheet(extendedStyles, {}, breakpoint)

        const newProps = Object.keys(props).reduce((acc, key) => {
          if (shouldForwardProp(key) && (!shouldUseAs || key !== "as")) {
            acc[key] = props[key]
          }
          return acc
        }, {} as Record<string, any>)

        newProps.ref = ref
        newProps.dataSet = styleSheet.id
          ? {
              ...dataSet,
              media: `${dataSet?.media ?? ""} ${styleSheet.id}`.trim(),
            }
          : dataSet
        newProps.style = isFunction(style)
          ? (state: PressableStateCallbackType) => [
              styleSheet.style,
              style(state),
            ]
          : [styleSheet.style, style]

        return typeof FinalTag === "string" ? (
          // eslint-disable-next-line global-require, import/no-extraneous-dependencies
          require("react-native-web").unstable_createElement(FinalTag, newProps)
        ) : (
          <FinalTag {...newProps} />
        )
      },
    ) as StyledComponent<T, React.ComponentProps<T>, {}>

    if (__DEV__) {
      let displayName: string | undefined
      if (componentName) {
        displayName = `${componentName}${componentSlot || ""}`
      }
      if (displayName == null) {
        displayName = `WithStyle(${getDisplayName(Component)})`
      }
      Styled.displayName = displayName
    }

    return Styled
  }
}