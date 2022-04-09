import {
  OverridableComponent,
  OverrideProps,
  styled,
  SxProps,
  useThemeProps,
} from "@md3-ui/system"
import { __DEV__ } from "@md3-ui/utils"
import * as React from "react"
import { isFragment } from "react-is"
import {
  GestureResponderEvent,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { NavigationBarContext } from "./context"

export interface NavigationBarTypeMap<
  P = {},
  C extends React.ElementType = typeof RNView,
> {
  props: P & {
    /**
     * The content of the component.
     */
    children?: React.ReactNode
    /**
     * If `true`, all `NavigationBarItem`s will hide their labels.
     * @default false
     */
    hideLabels?: boolean
    /**
     * Callback fired when the value changes.
     * @param event The event source of the callback. **Warning**: This is a
     * generic event not a change event.
     * @param value We default to the index of the child.
     */
    onChange?: (event: GestureResponderEvent, value: any) => void
    /**
     * Override or extend the styles applied to the component.
     */
    styles?: {
      root?: RNViewStyle
    }
    /**
     * The system prop that allows defining system overrides as well as
     * additional styles.
     */
    sx?: SxProps
    /**
     * The value of the currently selected `NavigationBarItem`.
     */
    value?: any
  }
  defaultAs: C
}

export type NavigationBarProps<
  C extends React.ElementType = NavigationBarTypeMap["defaultAs"],
  P = {},
> = OverrideProps<NavigationBarTypeMap<P, C>, C>

export type NavigationBarStyleKey = keyof NonNullable<
  NavigationBarProps["styles"]
>

const NavigationBarRoot = styled(RNView, {
  name: "NavigationBar",
  slot: "Root",
})(({ theme }) => ({
  ...theme.elevation.level2,
  backgroundColor: theme.color.surface,
  borderRadius: 0,
  flexDirection: "row",
  justifyContent: "center",
  minHeight: 80,
  width: "100%",
}))

export const NavigationBar = React.forwardRef<RNView, NavigationBarProps>(
  (inProps, ref) => {
    const {
      children,
      hideLabels = false,
      onChange,
      style,
      styles,
      value,
      ...props
    } = useThemeProps({
      name: "NavigationBar",
      props: inProps,
    })

    const insets = useSafeAreaInsets()

    const context = React.useMemo(
      () => ({ onChange, value }),
      [onChange, value],
    )

    return (
      <NavigationBarContext.Provider value={context}>
        <NavigationBarRoot
          ref={ref}
          style={[
            {
              paddingBottom: insets.bottom,
              paddingHorizontal: Math.max(insets.left, insets.right),
            },
            style,
            styles?.root,
          ]}
          {...props}
        >
          {React.Children.map(children, (child, index) => {
            if (!React.isValidElement(child)) {
              return null
            }

            if (__DEV__ && isFragment(child)) {
              console.error(
                [
                  "MD3-UI: The `NavigationBar` component doesn't accept a Fragment as a child.",
                  "Consider providing an array instead.",
                ].join("\n"),
              )
            }

            return React.cloneElement(child, {
              hideLabel: child.props.hideLabel ?? hideLabels,
              value: child.props.value ?? index,
            })
          })}
        </NavigationBarRoot>
      </NavigationBarContext.Provider>
    )
  },
) as OverridableComponent<NavigationBarTypeMap>

if (__DEV__) {
  NavigationBar.displayName = "NavigationBar"
}
