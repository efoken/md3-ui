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
import { cloneElement, forwardRef } from "react"
import {
  Platform,
  TextStyle as RNTextStyle,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"
import { ButtonBase, ButtonBaseProps } from "./button-base"
import { useButtonBaseState } from "./use-button-base-state"

export interface FilledButtonProps extends ButtonBaseProps {
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

export type FilledButtonStyleKey = keyof NonNullable<
  FilledButtonProps["styles"]
>

type FilledButtonOwnerState = Pick<FilledButtonProps, "disabled"> & {
  focused: boolean
  hovered: boolean
  pressed: boolean
}

const FilledButtonRoot = styled(ButtonBase, {
  name: "FilledButton",
  slot: "Root",
})<OwnerStateProps<FilledButtonOwnerState>>(({ theme, ownerState }) => [
  {
    ...theme.comp.filledButton.container.elevation,
    alignItems: "center",
    backgroundColor: theme.comp.filledButton.container.color,
    borderRadius: theme.comp.filledButton.container.shape,
    flexDirection: "row",
    height: theme.comp.filledButton.container.height,
    justifyContent: "center",
    paddingHorizontal: 24,

    ...(Platform.OS !== "web" && {
      shadowColor: theme.comp.filledButton.container.shadowColor,
    }),

    ...(ownerState.disabled && {
      ...theme.comp.filledButton.disabled.container.elevation,
      backgroundColor: theme.utils.rgba(
        theme.comp.filledButton.disabled.container.color,
        theme.comp.filledButton.disabled.container.opacity,
      ),
    }),

    ...(ownerState.hovered && {
      ...theme.comp.filledButton.hover.container.elevation,
    }),

    ...(ownerState.focused && {
      ...theme.comp.filledButton.focus.container.elevation,
    }),

    ...(ownerState.pressed && {
      ...theme.comp.filledButton.pressed.container.elevation,
    }),
  },
])

const FilledButtonContent = styled(TextStyleProvider, {
  name: "FilledButton",
  slot: "Content",
  skipSx: true,
})<OwnerStateProps<FilledButtonOwnerState>>(({ theme, ownerState }) => ({
  color: theme.comp.filledButton.labelText.color,

  ...(ownerState.disabled && {
    color: theme.utils.rgba(
      theme.comp.filledButton.disabled.labelText.color,
      theme.comp.filledButton.disabled.labelText.opacity,
    ),
  }),

  ...(ownerState.hovered && {
    color: theme.comp.filledButton.hover.labelText.color,
  }),

  ...(ownerState.focused && {
    color: theme.comp.filledButton.focus.labelText.color,
  }),

  ...(ownerState.pressed && {
    color: theme.comp.filledButton.pressed.labelText.color,
  }),
}))

const FilledButtonIcon = styled(RNView, {
  name: "FilledButton",
  slot: "Icon",
  skipSx: true,
})({
  marginEnd: 8,
  marginStart: -8,
})

const FilledButtonLabel = styled(Text, {
  name: "FilledButton",
  slot: "Label",
  skipSx: true,
})(({ theme }) => ({
  ...theme.comp.filledButton.labelText.textStyle,
  textAlign: "center",
}))

export const FilledButton = forwardRef<RNView, FilledButtonProps>(
  (inProps, ref) => {
    const {
      children,
      disabled = false,
      icon,
      style,
      styles,
      ...props
    } = useThemeProps({ name: "FilledButton", props: inProps })

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
      <FilledButtonRoot
        ref={ref}
        disabled={disabled}
        focusColor={theme.comp.filledButton.focus.stateLayer.color}
        focusOpacity={theme.comp.filledButton.focus.stateLayer.opacity}
        hoverColor={theme.comp.filledButton.hover.stateLayer.color}
        hoverOpacity={theme.comp.filledButton.hover.stateLayer.opacity}
        ownerState={ownerState}
        pressedColor={theme.comp.filledButton.pressed.stateLayer.color}
        pressedOpacity={theme.comp.filledButton.pressed.stateLayer.opacity}
        style={[styles?.root, style]}
        {...buttonBaseProps}
        {...props}
      >
        <FilledButtonContent ownerState={ownerState} style={styles?.content}>
          {icon && (
            <FilledButtonIcon style={styles?.icon}>
              {cloneElement(icon, {
                height: theme.comp.filledButton.withIcon.icon.size,
                width: theme.comp.filledButton.withIcon.icon.size,
              })}
            </FilledButtonIcon>
          )}
          <FilledButtonLabel style={styles?.label}>
            {children}
          </FilledButtonLabel>
        </FilledButtonContent>
      </FilledButtonRoot>
    )
  },
)

FilledButton.displayName = "FilledButton"
