import { ButtonBase, ButtonBaseProps } from "@md3-ui/button"
import { Text } from "@md3-ui/layout"
import {
  styled,
  SxProps,
  TextStyleProvider,
  useTheme,
  useThemeProps,
} from "@md3-ui/system"
import { __DEV__ } from "@md3-ui/utils"
import * as React from "react"
import {
  TextStyle as RNTextStyle,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"

export interface NavigationDrawerItemProps
  extends Omit<ButtonBaseProps, "children"> {
  /**
   * The icon to display.
   */
  icon?: React.ReactElement
  /**
   * The label element.
   */
  label?: string
  /**
   * Override or extend the styles applied to the component.
   */
  styles?: {
    root?: RNViewStyle
    content?: RNTextStyle
    icon?: RNViewStyle
    label?: RNTextStyle
  }
  /**
   * The system prop that allows defining system overrides as well as
   * additional styles.
   */
  sx?: SxProps
}

export type NavigationDrawerItemStyleKey = keyof NonNullable<
  NavigationDrawerItemProps["styles"]
>

const NavigationDrawerItemRoot = styled(ButtonBase, {
  name: "NavigationDrawerItem",
  slot: "Root",
})(({ theme }) => ({
  alignItems: "center",
  borderRadius: 28,
  flexDirection: "row",
  flexGrow: 1,
  height: 56,
  paddingEnd: theme.spacing(3),
  paddingStart: theme.spacing(2),
}))

const NavigationDrawerItemContent = styled(TextStyleProvider, {
  name: "NavigationDrawerItem",
  slot: "Content",
  skipSx: true,
})(({ theme }) => ({
  color: theme.color["on-surface-variant"],
  fontSize: 24,
}))

const NavigationDrawerItemIcon = styled(RNView, {
  name: "NavigationDrawerItem",
  slot: "Icon",
  skipSx: true,
})(({ theme }) => ({
  marginEnd: theme.spacing(1.5),
}))

const NavigationDrawerItemLabel = styled(Text, {
  name: "NavigationDrawerItem",
  slot: "Label",
  skipSx: true,
})(({ theme }) => ({
  ...theme.typescale["label-large"],
}))

export const NavigationDrawerItem = React.forwardRef<
  RNView,
  NavigationDrawerItemProps
>((inProps, ref) => {
  const { icon, label, style, styles, ...props } = useThemeProps({
    name: "NavigationDrawerItem",
    props: inProps,
  })

  const theme = useTheme()

  return (
    <NavigationDrawerItemRoot
      ref={ref}
      rippleColor={theme.color["on-surface"]}
      style={[style, styles?.root]}
      {...props}
    >
      <NavigationDrawerItemContent style={styles?.content}>
        {icon && (
          <NavigationDrawerItemIcon style={styles?.icon}>
            {React.cloneElement(icon, {
              height: 24,
              width: 24,
            })}
          </NavigationDrawerItemIcon>
        )}
        <NavigationDrawerItemLabel style={styles?.label}>
          {label}
        </NavigationDrawerItemLabel>
      </NavigationDrawerItemContent>
    </NavigationDrawerItemRoot>
  )
})

if (__DEV__) {
  NavigationDrawerItem.displayName = "NavigationDrawerItem"
}
