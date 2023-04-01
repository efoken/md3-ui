import { Text } from "@md3-ui/layout"
import {
  OwnerStateProps,
  styled,
  StylesProp,
  SxProps,
  TextStyleProvider,
  useTheme,
  useThemeProps,
} from "@md3-ui/system"
import { __DEV__ } from "@md3-ui/utils"
import * as React from "react"
import {
  Platform,
  TextStyle as RNTextStyle,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"
import { ButtonBase, ButtonBaseProps } from "./button-base"
import { useButtonBaseState } from "./use-button-base-state"

export interface ElevatedButtonProps extends ButtonBaseProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean
  /**
   * Element placed before the children.
   */
  icon?: React.ReactElement
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
   * The system prop that allows defining system overrides as well as
   * additional styles.
   */
  sx?: SxProps
}

export type ElevatedButtonStyleKey = keyof NonNullable<
  ElevatedButtonProps["styles"]
>

type ElevatedButtonOwnerState = Pick<ElevatedButtonProps, "disabled"> & {
  focused: boolean
  hovered: boolean
  pressed: boolean
}

const ElevatedButtonRoot = styled(ButtonBase, {
  name: "ElevatedButton",
  slot: "Root",
})<OwnerStateProps<ElevatedButtonOwnerState>>(({ theme, ownerState }) => [
  {
    ...theme.comp.elevatedButton.container.elevation,
    alignItems: "center",
    backgroundColor: theme.comp.elevatedButton.container.color,
    borderRadius: theme.comp.elevatedButton.container.shape,
    flexDirection: "row",
    height: theme.comp.elevatedButton.container.height,
    justifyContent: "center",
    paddingHorizontal: 24,

    ...(Platform.OS !== "web" && {
      shadowColor: theme.comp.elevatedButton.container.shadowColor,
    }),

    ...(ownerState.disabled && {
      ...theme.comp.elevatedButton.disabled.container.elevation,
      backgroundColor: theme.utils.rgba(
        theme.comp.elevatedButton.disabled.container.color,
        theme.comp.elevatedButton.disabled.container.opacity,
      ),
    }),

    ...(ownerState.hovered && {
      ...theme.comp.elevatedButton.hover.container.elevation,
    }),

    ...(ownerState.focused && {
      ...theme.comp.elevatedButton.focus.container.elevation,
    }),

    ...(ownerState.pressed && {
      ...theme.comp.elevatedButton.pressed.container.elevation,
    }),
  },
])

const ElevatedButtonContent = styled(TextStyleProvider, {
  name: "ElevatedButton",
  slot: "Content",
  skipSx: true,
})<OwnerStateProps<ElevatedButtonOwnerState>>(({ theme, ownerState }) => ({
  color: theme.comp.elevatedButton.labelText.color,

  ...(ownerState.disabled && {
    color: theme.utils.rgba(
      theme.comp.elevatedButton.disabled.labelText.color,
      theme.comp.elevatedButton.disabled.labelText.opacity,
    ),
  }),

  ...(ownerState.hovered && {
    color: theme.comp.elevatedButton.hover.labelText.color,
  }),

  ...(ownerState.focused && {
    color: theme.comp.elevatedButton.focus.labelText.color,
  }),

  ...(ownerState.pressed && {
    color: theme.comp.elevatedButton.pressed.labelText.color,
  }),
}))

const ElevatedButtonIcon = styled(RNView, {
  name: "ElevatedButton",
  slot: "Icon",
  skipSx: true,
})({
  marginEnd: 8,
  marginStart: -8,
})

const ElevatedButtonLabel = styled(Text, {
  name: "ElevatedButton",
  slot: "Label",
  skipSx: true,
})(({ theme }) => ({
  ...theme.comp.elevatedButton.labelText.textStyle,
  textAlign: "center",
}))

export const ElevatedButton = React.forwardRef<RNView, ElevatedButtonProps>(
  (inProps, ref) => {
    const {
      children,
      disabled = false,
      icon,
      style,
      styles,
      ...props
    } = useThemeProps({ name: "ElevatedButton", props: inProps })

    const theme = useTheme()

    const { focused, hovered, pressed, ...buttonBaseProps } =
      useButtonBaseState(props)

    const ownerState = {
      disabled,
      focused,
      hovered,
      pressed,
    }

    return (
      <ElevatedButtonRoot
        ref={ref}
        disabled={disabled}
        focusColor={theme.comp.elevatedButton.focus.stateLayer.color}
        focusOpacity={theme.comp.elevatedButton.focus.stateLayer.opacity}
        hoverColor={theme.comp.elevatedButton.hover.stateLayer.color}
        hoverOpacity={theme.comp.elevatedButton.hover.stateLayer.opacity}
        ownerState={ownerState}
        pressedColor={theme.comp.elevatedButton.pressed.stateLayer.color}
        pressedOpacity={theme.comp.elevatedButton.pressed.stateLayer.opacity}
        style={[styles?.root, style]}
        surfaceTintColor={
          theme.comp.elevatedButton.container.surfaceTintLayer.color
        }
        {...buttonBaseProps}
        {...props}
      >
        <ElevatedButtonContent ownerState={ownerState} style={styles?.content}>
          {icon && (
            <ElevatedButtonIcon style={styles?.icon}>
              {React.cloneElement(icon, {
                height: theme.comp.elevatedButton.withIcon.icon.size,
                width: theme.comp.elevatedButton.withIcon.icon.size,
              })}
            </ElevatedButtonIcon>
          )}
          <ElevatedButtonLabel style={styles?.label}>
            {children}
          </ElevatedButtonLabel>
        </ElevatedButtonContent>
      </ElevatedButtonRoot>
    )
  },
)

if (__DEV__) {
  ElevatedButton.displayName = "ElevatedButton"
}
