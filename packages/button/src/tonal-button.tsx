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
  Platform,
  TextStyle as RNTextStyle,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"
import { ButtonBase, ButtonBaseProps } from "./button-base"

export interface TonalButtonProps extends ButtonBaseProps {
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

export type TonalButtonStyleKey = keyof NonNullable<TonalButtonProps["styles"]>

type TonalButtonOwnerState = Pick<TonalButtonProps, "disabled"> & {
  focused: boolean
  hovered: boolean
  pressed: boolean
}

const TonalButtonRoot = styled(ButtonBase, {
  name: "TonalButton",
  slot: "Root",
})<OwnerStateProps<TonalButtonOwnerState>>(({ theme, ownerState }) => [
  {
    ...theme.comp.tonalButton.container.elevation,
    alignItems: "center",
    backgroundColor: theme.comp.tonalButton.container.color,
    borderRadius: theme.comp.tonalButton.container.shape,
    flexDirection: "row",
    height: theme.comp.tonalButton.container.height,
    justifyContent: "center",
    paddingHorizontal: 24,

    ...(Platform.OS !== "web" && {
      shadowColor: theme.comp.tonalButton.container.shadowColor,
    }),

    ...(ownerState.disabled && {
      ...theme.comp.tonalButton.disabled.container.elevation,
      backgroundColor: theme.utils.rgba(
        theme.comp.tonalButton.disabled.container.color,
        theme.comp.tonalButton.disabled.container.opacity,
      ),
    }),

    ...(ownerState.hovered && {
      ...theme.comp.tonalButton.hover.container.elevation,
    }),

    ...(ownerState.focused && {
      ...theme.comp.tonalButton.focus.container.elevation,
    }),

    ...(ownerState.pressed && {
      ...theme.comp.tonalButton.pressed.container.elevation,
    }),
  },
])

const TonalButtonContent = styled(TextStyleProvider, {
  name: "TonalButton",
  slot: "Content",
  skipSx: true,
})<OwnerStateProps<TonalButtonOwnerState>>(({ theme, ownerState }) => ({
  color: theme.comp.tonalButton.labelText.color,

  ...(ownerState.disabled && {
    color: theme.utils.rgba(
      theme.comp.tonalButton.disabled.labelText.color,
      theme.comp.tonalButton.disabled.labelText.opacity,
    ),
  }),

  ...(ownerState.hovered && {
    color: theme.comp.tonalButton.hover.labelText.color,
  }),

  ...(ownerState.focused && {
    color: theme.comp.tonalButton.focus.labelText.color,
  }),

  ...(ownerState.pressed && {
    color: theme.comp.tonalButton.pressed.labelText.color,
  }),
}))

const TonalButtonIcon = styled(RNView, {
  name: "TonalButton",
  slot: "Icon",
  skipSx: true,
})({
  marginEnd: 8,
  marginStart: -8,
})

const TonalButtonLabel = styled(Text, {
  name: "TonalButton",
  slot: "Label",
  skipSx: true,
})(({ theme }) => ({
  ...theme.comp.tonalButton.labelText.textStyle,
  textAlign: "center",
}))

export const TonalButton = React.forwardRef<RNView, TonalButtonProps>(
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
    } = useThemeProps({ name: "TonalButton", props: inProps })

    const theme = useTheme()

    const [focused, handleFocus] = useBoolean()
    const [hovered, handleHover] = useBoolean()
    const [pressed, handlePress] = useBoolean()

    const ownerState = {
      disabled,
      focused,
      hovered,
      pressed,
    }

    return (
      <TonalButtonRoot
        ref={ref}
        disabled={disabled}
        focusColor={theme.comp.tonalButton.focus.stateLayer.color}
        focusOpacity={theme.comp.tonalButton.focus.stateLayer.opacity}
        hoverColor={theme.comp.tonalButton.hover.stateLayer.color}
        hoverOpacity={theme.comp.tonalButton.hover.stateLayer.opacity}
        ownerState={ownerState}
        pressedColor={theme.comp.tonalButton.pressed.stateLayer.color}
        pressedOpacity={theme.comp.tonalButton.pressed.stateLayer.opacity}
        style={[styles?.root, style]}
        onBlur={createChainedFunction(onBlur, handleFocus.off)}
        onFocusVisible={createChainedFunction(onFocusVisible, handleFocus.on)}
        onHoverIn={createChainedFunction(onHoverIn, handleHover.on)}
        onHoverOut={createChainedFunction(onHoverOut, handleHover.off)}
        onPressIn={createChainedFunction(onPressIn, handlePress.on)}
        onPressOut={createChainedFunction(onPressOut, handlePress.off)}
        {...props}
      >
        <TonalButtonContent ownerState={ownerState} style={styles?.content}>
          {icon && (
            <TonalButtonIcon style={styles?.icon}>
              {React.cloneElement(icon, {
                height: theme.comp.tonalButton.withIcon.icon.size,
                width: theme.comp.tonalButton.withIcon.icon.size,
              })}
            </TonalButtonIcon>
          )}
          <TonalButtonLabel style={styles?.label}>{children}</TonalButtonLabel>
        </TonalButtonContent>
      </TonalButtonRoot>
    )
  },
)

if (__DEV__) {
  TonalButton.displayName = "TonalButton"
}
