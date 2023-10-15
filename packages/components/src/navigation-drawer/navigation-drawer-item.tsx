import {
  StylesProp,
  SxProps,
  Text,
  TextStyleProvider,
  styled,
  useTheme,
  useThemeProps,
} from "@md3-ui/system"
import { cloneElement, forwardRef } from "react"
import {
  TextStyle as RNTextStyle,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"
import { ButtonBase, ButtonBaseProps } from "../button"

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
  styles?: StylesProp<{
    root?: RNViewStyle
    content?: RNTextStyle
    icon?: RNViewStyle
    label?: RNTextStyle
  }>
  /**
   * The system prop that allows defining system overrides as well as additional
   * styles.
   */
  sx?: SxProps
}

export type NavigationDrawerItemStyleKey = keyof NonNullable<
  NavigationDrawerItemProps["styles"]
>

const NavigationDrawerItemRoot = styled(ButtonBase, {
  name: "NavigationDrawerItem",
  slot: "Root",
})({
  alignItems: "center",
  borderRadius: 28,
  flexDirection: "row",
  flexGrow: 1,
  height: 56,
  paddingEnd: 24,
  paddingStart: 16,
})

const NavigationDrawerItemContent = styled(TextStyleProvider, {
  name: "NavigationDrawerItem",
  slot: "Content",
  skipSx: true,
})(({ theme }) => ({
  color: theme.sys.color.onSurfaceVariant,
  fontSize: 24,
}))

const NavigationDrawerItemIcon = styled(RNView, {
  name: "NavigationDrawerItem",
  slot: "Icon",
  skipSx: true,
})({
  marginEnd: 12,
})

const NavigationDrawerItemLabel = styled(Text, {
  name: "NavigationDrawerItem",
  slot: "Label",
  skipSx: true,
})(({ theme }) => ({
  ...theme.sys.typescale.labelLarge,
}))

export const NavigationDrawerItem = forwardRef<
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
      rippleColor={theme.sys.color.onSurface}
      style={[style, styles?.root]}
      {...props}
    >
      <NavigationDrawerItemContent style={styles?.content}>
        {icon && (
          <NavigationDrawerItemIcon style={styles?.icon}>
            {cloneElement(icon, {
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

NavigationDrawerItem.displayName = "NavigationDrawerItem"
