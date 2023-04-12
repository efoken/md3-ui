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
import * as React from "react"
import {
  TextStyle as RNTextStyle,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"
import { ButtonBase, ButtonBaseProps } from "./button-base"
import { useButtonBaseState } from "./use-button-base-state"

export interface OutlinedButtonProps extends ButtonBaseProps {
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

export type OutlinedButtonStyleKey = keyof NonNullable<
  OutlinedButtonProps["styles"]
>

type OutlinedButtonOwnerState = Pick<OutlinedButtonProps, "disabled"> & {
  focused: boolean
  hovered: boolean
  pressed: boolean
}

const OutlinedButtonRoot = styled(ButtonBase, {
  name: "OutlinedButton",
  slot: "Root",
})<OwnerStateProps<OutlinedButtonOwnerState>>(({ theme, ownerState }) => [
  {
    alignItems: "center",
    borderColor: theme.comp.outlinedButton.outline.color,
    borderRadius: theme.comp.outlinedButton.container.shape,
    borderWidth: theme.comp.outlinedButton.outline.width,
    flexDirection: "row",
    height: theme.comp.outlinedButton.container.height,
    justifyContent: "center",
    paddingHorizontal: 24 - theme.comp.outlinedButton.outline.width,

    ...(ownerState.disabled && {
      borderColor: theme.utils.rgba(
        theme.comp.outlinedButton.disabled.outline.color,
        theme.comp.outlinedButton.disabled.outline.opacity,
      ),
    }),

    ...(ownerState.hovered && {
      borderColor: theme.comp.outlinedButton.hover.outline.color,
    }),

    ...(ownerState.focused && {
      borderColor: theme.comp.outlinedButton.focus.outline.color,
    }),

    ...(ownerState.pressed && {
      borderColor: theme.comp.outlinedButton.pressed.outline.color,
    }),
  },
])

const OutlinedButtonContent = styled(TextStyleProvider, {
  name: "OutlinedButton",
  slot: "Content",
  skipSx: true,
})<OwnerStateProps<OutlinedButtonOwnerState>>(({ theme, ownerState }) => ({
  color: theme.comp.outlinedButton.labelText.color,

  ...(ownerState.disabled && {
    color: theme.utils.rgba(
      theme.comp.outlinedButton.disabled.labelText.color,
      theme.comp.outlinedButton.disabled.labelText.opacity,
    ),
  }),

  ...(ownerState.hovered && {
    color: theme.comp.outlinedButton.hover.labelText.color,
  }),

  ...(ownerState.focused && {
    color: theme.comp.outlinedButton.focus.labelText.color,
  }),

  ...(ownerState.pressed && {
    color: theme.comp.outlinedButton.pressed.labelText.color,
  }),
}))

const OutlinedButtonIcon = styled(RNView, {
  name: "OutlinedButton",
  slot: "Icon",
  skipSx: true,
})({
  marginEnd: 8,
  marginStart: -8,
})

const OutlinedButtonLabel = styled(Text, {
  name: "OutlinedButton",
  slot: "Label",
  skipSx: true,
})(({ theme }) => ({
  ...theme.comp.outlinedButton.labelText.textStyle,
  textAlign: "center",
}))

export const OutlinedButton = React.forwardRef<RNView, OutlinedButtonProps>(
  (inProps, ref) => {
    const {
      children,
      disabled = false,
      icon,
      style,
      styles,
      ...props
    } = useThemeProps({ name: "OutlinedButton", props: inProps })

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
      <OutlinedButtonRoot
        ref={ref}
        disabled={disabled}
        focusColor={theme.comp.outlinedButton.focus.stateLayer.color}
        focusOpacity={theme.comp.outlinedButton.focus.stateLayer.opacity}
        hoverColor={theme.comp.outlinedButton.hover.stateLayer.color}
        hoverOpacity={theme.comp.outlinedButton.hover.stateLayer.opacity}
        ownerState={ownerState}
        pressedColor={theme.comp.outlinedButton.pressed.stateLayer.color}
        pressedOpacity={theme.comp.outlinedButton.pressed.stateLayer.opacity}
        style={[styles?.root, style]}
        {...buttonBaseProps}
        {...props}
      >
        <OutlinedButtonContent ownerState={ownerState} style={styles?.content}>
          {icon && (
            <OutlinedButtonIcon style={styles?.icon}>
              {React.cloneElement(icon, {
                height: theme.comp.outlinedButton.withIcon.icon.size,
                width: theme.comp.outlinedButton.withIcon.icon.size,
              })}
            </OutlinedButtonIcon>
          )}
          <OutlinedButtonLabel style={styles?.label}>
            {children}
          </OutlinedButtonLabel>
        </OutlinedButtonContent>
      </OutlinedButtonRoot>
    )
  },
)

OutlinedButton.displayName = "OutlinedButton"
