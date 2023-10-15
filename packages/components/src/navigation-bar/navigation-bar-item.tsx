import {
  OwnerStateProps,
  StylesProp,
  SxProps,
  Text,
  TextStyleProvider,
  styled,
  useTheme,
  useThemeProps,
} from "@md3-ui/system"
import { cloneElement, forwardRef, useContext } from "react"
import {
  GestureResponderEvent,
  TextStyle as RNTextStyle,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"
import { ButtonBase, ButtonBaseProps } from "../button"
import { NavigationBarContext } from "./navigation-bar-context"

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
})({
  alignItems: "center",
  flexGrow: 1,
  flexShrink: 1,
  justifyContent: "center",
  paddingBottom: 16,
  paddingTop: 12,
})

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
  ...theme.sys.typescale.labelMedium,
  color: ownerState.selected
    ? theme.sys.color.onSurface
    : theme.sys.color.onSurfaceVariant,
  marginTop: 4,
}))

export const NavigationBarItem = forwardRef<RNView, NavigationBarItemProps>(
  (inProps, ref) => {
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

    const { onChange, value } = useContext(NavigationBarContext)

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
        <NavigationBarItemContent
          ownerState={ownerState}
          style={styles?.content}
        >
          <NavigationBarItemIcon ownerState={ownerState} style={styles?.icon}>
            {cloneElement(icon, {
              height: 24,
              width: 24,
            })}
          </NavigationBarItemIcon>
          {!hideLabel && (
            <NavigationBarItemLabel
              ownerState={ownerState}
              style={styles?.label}
            >
              {label}
            </NavigationBarItemLabel>
          )}
        </NavigationBarItemContent>
      </NavigationBarItemRoot>
    )
  },
)

NavigationBarItem.displayName = "NavigationBarItem"
