import { ButtonBase, ButtonBaseProps } from "@md3-ui/button"
import { Text } from "@md3-ui/layout"
import {
  OwnerStateProps,
  styled,
  SxProps,
  TextStyleProvider,
  useTheme,
  useThemeProps,
} from "@md3-ui/system"
import { __DEV__ } from "@md3-ui/utils"
import * as React from "react"
import {
  GestureResponderEvent,
  TextStyle as RNTextStyle,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"
import { NavigationBarContext } from "./context"

export interface NavigationBarItemProps
  extends Omit<ButtonBaseProps, "children"> {
  hideLabel?: boolean
  /**
   * The icon to display.
   */
  icon: React.ReactElement
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
  /**
   * You can provide your own value. Otherwise, we fallback to the child
   * position index.
   */
  value?: any
}

export type NavigationBarItemStyleKey = keyof NonNullable<
  NavigationBarItemProps["styles"]
>

const NavigationBarItemRoot = styled(ButtonBase, {
  name: "NavigationBarItem",
  slot: "Root",
})(({ theme }) => ({
  alignItems: "center",
  flexGrow: 1,
  flexShrink: 1,
  justifyContent: "center",
  paddingBottom: theme.spacing(2),
  paddingTop: theme.spacing(1.5),
}))

const NavigationBarItemContent = styled(TextStyleProvider, {
  name: "NavigationBarItem",
  slot: "Content",
  skipSx: true,
})<OwnerStateProps<{ selected: boolean }>>(({ theme, ownerState }) => ({
  color: ownerState.selected
    ? theme.sys.color.onSecondaryContainer
    : theme.sys.color.onSurfaceVariant,
  fontSize: 24,
}))

const NavigationBarItemIcon = styled(RNView, {
  name: "NavigationBarItem",
  slot: "Icon",
  skipSx: true,
})<OwnerStateProps<{ selected: boolean }>>(({ theme, ownerState }) => ({
  alignItems: "center",
  backgroundColor: ownerState.selected
    ? theme.sys.color.secondaryContainer
    : "transparent",
  borderRadius: 16,
  height: 32,
  justifyContent: "center",
  width: 64,
}))

const NavigationBarItemLabel = styled(Text, {
  name: "NavigationBarItem",
  slot: "Label",
  skipSx: true,
})<OwnerStateProps<{ selected: boolean }>>(({ theme, ownerState }) => ({
  ...theme.sys.typescale["label-medium"],
  color: ownerState.selected
    ? theme.sys.color.onSurface
    : theme.sys.color.onSurfaceVariant,
  marginTop: theme.spacing(0.5),
}))

export const NavigationBarItem = React.forwardRef<
  RNView,
  NavigationBarItemProps
>((inProps, ref) => {
  const {
    hideLabel = false,
    icon,
    label,
    onPress,
    style,
    styles,
    value: valueProp,
    ...props
  } = useThemeProps({
    name: "NavigationBarItem",
    props: inProps,
  })

  const { onChange, value } = React.useContext(NavigationBarContext)

  const theme = useTheme()

  const selected = valueProp === value

  const handlePress = (event: GestureResponderEvent) => {
    onPress?.(event)
    onChange?.(event, valueProp)
  }

  const ownerState = {
    selected,
  }

  return (
    <NavigationBarItemRoot
      ref={ref}
      rippleColor={theme.sys.color.onSurface}
      style={[style, styles?.root]}
      onPress={handlePress}
      {...props}
    >
      <NavigationBarItemContent ownerState={ownerState} style={styles?.content}>
        <NavigationBarItemIcon ownerState={ownerState} style={styles?.icon}>
          {React.cloneElement(icon, {
            height: 24,
            width: 24,
          })}
        </NavigationBarItemIcon>
        {!hideLabel && (
          <NavigationBarItemLabel ownerState={ownerState} style={styles?.label}>
            {label}
          </NavigationBarItemLabel>
        )}
      </NavigationBarItemContent>
    </NavigationBarItemRoot>
  )
})

if (__DEV__) {
  NavigationBarItem.displayName = "NavigationBarItem"
}
