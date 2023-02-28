import { useBoolean } from "@md3-ui/hooks"
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
  TextStyle as RNTextStyle,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"
import { ButtonBase, ButtonBaseProps } from "./button-base"

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

const FilledButtonRoot = styled(ButtonBase, {
  name: "FilledButton",
  slot: "Root",
})<OwnerStateProps<Pick<FilledButtonProps, "disabled">>>(
  ({ theme, ownerState }) => [
    {
      ...theme.comp.filledButton.container.elevation,
      alignItems: "center",
      backgroundColor: theme.comp.filledButton.container.color,
      borderRadius: theme.comp.filledButton.container.shape,
      flexDirection: "row",
      height: theme.comp.filledButton.container.height,
      justifyContent: "center",
      paddingHorizontal: 24,
      shadowColor: theme.comp.filledButton.container.shadowColor,

      ...(ownerState.disabled && {
        ...theme.comp.filledButton.disabled.container.elevation,
        backgroundColor: theme.utils.rgba(
          theme.comp.filledButton.disabled.container.color,
          theme.comp.filledButton.disabled.container.opacity,
        ),
      }),

      "&:hover": {
        ...theme.comp.filledButton.hover.container.elevation,
      },

      "&:focus-visible": {
        ...theme.comp.filledButton.focus.container.elevation,
      },

      "&:active": {
        ...theme.comp.filledButton.pressed.container.elevation,
      },
    },
  ],
)

const FilledButtonContent = styled(TextStyleProvider, {
  name: "FilledButton",
  slot: "Content",
  skipSx: true,
})<OwnerStateProps<Pick<FilledButtonProps, "disabled">>>(
  ({ theme, ownerState }) => ({
    color: theme.comp.filledButton.labelText.color,

    ...(ownerState.disabled && {
      color: theme.utils.rgba(
        theme.comp.filledButton.disabled.labelText.color,
        theme.comp.filledButton.disabled.labelText.opacity,
      ),
    }),
  }),
)

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

export const FilledButton = React.forwardRef<RNView, FilledButtonProps>(
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

    const [hovered, handleHover] = useBoolean()
    const [focused, handleFocus] = useBoolean()

    const ownerState = {
      disabled,
      focused,
      hovered,
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
        onBlur={handleFocus.off}
        onFocus={handleFocus.on}
        onHoverIn={handleHover.on}
        onHoverOut={handleHover.off}
        {...props}
      >
        <FilledButtonContent ownerState={ownerState} style={styles?.content}>
          {icon && (
            <FilledButtonIcon style={styles?.icon}>
              {React.cloneElement(icon, {
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

if (__DEV__) {
  FilledButton.displayName = "FilledButton"
}
