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
import { __DEV__, createChainedFunction } from "@md3-ui/utils"
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

type TextButtonOwnerState = Pick<TextButtonProps, "disabled" | "icon"> & {
  focused: boolean
  hovered: boolean
  pressed: boolean
}

const TextButtonRoot = styled(ButtonBase, {
  name: "TextButton",
  slot: "Root",
})<OwnerStateProps<TextButtonOwnerState>>(({ theme, ownerState }) => [
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
})<OwnerStateProps<TextButtonOwnerState>>(({ theme, ownerState }) => ({
  color: theme.comp.textButton.labelText.color,

  ...(ownerState.disabled && {
    color: theme.utils.rgba(
      theme.comp.textButton.disabled.labelText.color,
      theme.comp.textButton.disabled.labelText.opacity,
    ),
  }),

  ...(ownerState.hovered && {
    color: theme.comp.textButton.hover.labelText.color,
  }),

  ...(ownerState.focused && {
    color: theme.comp.textButton.focus.labelText.color,
  }),

  ...(ownerState.pressed && {
    color: theme.comp.textButton.pressed.labelText.color,
  }),
}))

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
      onBlur,
      onFocusVisible,
      onHoverIn,
      onHoverOut,
      onPressIn,
      onPressOut,
      style,
      styles,
      ...props
    } = useThemeProps({ name: "TextButton", props: inProps })

    const theme = useTheme()

    const [focused, handleFocus] = useBoolean()
    const [hovered, handleHover] = useBoolean()
    const [pressed, handlePress] = useBoolean()

    const ownerState = {
      disabled,
      focused,
      hovered,
      icon,
      pressed,
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
        onBlur={createChainedFunction(onBlur, handleFocus.off)}
        onFocusVisible={createChainedFunction(onFocusVisible, handleFocus.on)}
        onHoverIn={createChainedFunction(onHoverIn, handleHover.on)}
        onHoverOut={createChainedFunction(onHoverOut, handleHover.off)}
        onPressIn={createChainedFunction(onPressIn, handlePress.on)}
        onPressOut={createChainedFunction(onPressOut, handlePress.off)}
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
