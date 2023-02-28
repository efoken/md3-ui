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

export interface TextButtonProps extends ButtonBaseProps {
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

export type TextButtonStyleKey = keyof NonNullable<TextButtonProps["styles"]>

const TextButtonRoot = styled(ButtonBase, {
  name: "TextButton",
  slot: "Root",
})<OwnerStateProps<Pick<TextButtonProps, "icon">>>(({ theme, ownerState }) => [
  {
    alignItems: "center",
    borderRadius: theme.comp.textButton.container.shape,
    flexDirection: "row",
    height: theme.comp.textButton.container.height,
    justifyContent: "center",
    minWidth: 48,
    paddingEnd: ownerState.icon ? 16 : 12,
    paddingStart: 12,
  },
])

const TextButtonContent = styled(TextStyleProvider, {
  name: "TextButton",
  slot: "Content",
  skipSx: true,
})<OwnerStateProps<Pick<TextButtonProps, "disabled">>>(
  ({ theme, ownerState }) => ({
    color: theme.comp.textButton.labelText.color,

    ...(ownerState.disabled && {
      color: theme.utils.rgba(
        theme.comp.textButton.disabled.labelText.color,
        theme.comp.textButton.disabled.labelText.opacity,
      ),
    }),
  }),
)

const TextButtonIcon = styled(RNView, {
  name: "TextButton",
  slot: "Icon",
  skipSx: true,
})({
  marginEnd: 8,
})

const TextButtonLabel = styled(Text, {
  name: "TextButton",
  slot: "Label",
  skipSx: true,
})(({ theme }) => ({
  ...theme.comp.textButton.labelText.textStyle,
  textAlign: "center",
}))

export const TextButton = React.forwardRef<RNView, TextButtonProps>(
  (inProps, ref) => {
    const {
      children,
      disabled = false,
      icon,
      style,
      styles,
      ...props
    } = useThemeProps({ name: "TextButton", props: inProps })

    const theme = useTheme()

    const [hovered, handleHover] = useBoolean()
    const [focused, handleFocus] = useBoolean()

    const ownerState = {
      disabled,
      focused,
      hovered,
      icon,
    }

    return (
      <TextButtonRoot
        ref={ref}
        disabled={disabled}
        focusColor={theme.comp.textButton.focus.stateLayer.color}
        focusOpacity={theme.comp.textButton.focus.stateLayer.opacity}
        hoverColor={theme.comp.textButton.hover.stateLayer.color}
        hoverOpacity={theme.comp.textButton.hover.stateLayer.opacity}
        ownerState={ownerState}
        pressedColor={theme.comp.textButton.pressed.stateLayer.color}
        pressedOpacity={theme.comp.textButton.pressed.stateLayer.opacity}
        style={[styles?.root, style]}
        onBlur={handleFocus.off}
        onFocus={handleFocus.on}
        onHoverIn={handleHover.on}
        onHoverOut={handleHover.off}
        {...props}
      >
        <TextButtonContent ownerState={ownerState} style={styles?.content}>
          {icon && (
            <TextButtonIcon style={styles?.icon}>
              {React.cloneElement(icon, {
                height: theme.comp.textButton.withIcon.icon.size,
                width: theme.comp.textButton.withIcon.icon.size,
              })}
            </TextButtonIcon>
          )}
          <TextButtonLabel style={styles?.label}>{children}</TextButtonLabel>
        </TextButtonContent>
      </TextButtonRoot>
    )
  },
)

if (__DEV__) {
  TextButton.displayName = "TextButton"
}
