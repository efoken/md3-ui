import { useBoolean } from "@md3-ui/hooks"
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

export interface TonalIconButtonProps extends ButtonBaseProps {
  /**
   * The icon to display.
   */
  children: React.ReactElement
  /**
   * If given, uses a negative margin to counteract the padding on one side
   * (this is often helpful for aligning the left or right side of the icon with
   * content above or below, without ruining the border size and shape).
   */
  edge?: "start" | "end" | false
  /**
   * If `true`, the component is selected.
   */
  selected?: boolean
  /**
   * Override or extend the styles applied to the component.
   */
  styles?: StylesProp<{
    root?: RNViewStyle
    content?: RNTextStyle
  }>
  /**
   * The system prop that allows defining system overrides as well as
   * additional styles.
   */
  sx?: SxProps
}

export type TonalIconButtonStyleKey = keyof NonNullable<
  TonalIconButtonProps["styles"]
>

type TonalIconButtonOwnerState = Pick<
  TonalIconButtonProps,
  "disabled" | "edge" | "selected"
> & {
  focused: boolean
  hovered: boolean
  pressed: boolean
}

const TonalIconButtonRoot = styled(ButtonBase, {
  name: "TonalIconButton",
  slot: "Root",
})<OwnerStateProps<TonalIconButtonOwnerState>>(({ theme, ownerState }) => ({
  alignItems: "center",
  backgroundColor: theme.comp.tonalIconButton.container.color,
  borderRadius: theme.comp.tonalIconButton.container.shape,
  height: theme.comp.tonalIconButton.container.size,
  justifyContent: "center",
  marginEnd: ownerState.edge === "end" ? -12 : undefined,
  marginStart: ownerState.edge === "start" ? -12 : undefined,
  width: theme.comp.tonalIconButton.container.size,

  ...(ownerState.selected === true && {
    backgroundColor: theme.comp.tonalIconButton.selected.container.color,
  }),

  ...(ownerState.selected === false && {
    backgroundColor: theme.comp.tonalIconButton.unselected.container.color,
  }),

  ...(ownerState.disabled && {
    backgroundColor: theme.utils.rgba(
      theme.comp.tonalIconButton.disabled.container.color,
      theme.comp.tonalIconButton.disabled.container.opacity,
    ),
  }),
}))

const TonalIconButtonContent = styled(TextStyleProvider, {
  name: "TonalIconButton",
  slot: "Content",
  skipSx: true,
})<OwnerStateProps<TonalIconButtonOwnerState>>(({ theme, ownerState }) => ({
  color: theme.comp.tonalIconButton.icon.color,

  ...(ownerState.disabled && {
    color: theme.utils.rgba(
      theme.comp.tonalIconButton.disabled.icon.color,
      theme.comp.tonalIconButton.disabled.icon.opacity,
    ),
  }),

  ...(ownerState.hovered && {
    color: theme.comp.tonalIconButton.hover.icon.color,
  }),

  ...(ownerState.focused && {
    color: theme.comp.tonalIconButton.focus.icon.color,
  }),

  ...(ownerState.pressed && {
    color: theme.comp.tonalIconButton.pressed.icon.color,
  }),
}))

export const TonalIconButton = React.forwardRef<RNView, TonalIconButtonProps>(
  (inProps, ref) => {
    const {
      children,
      disabled = false,
      edge = false,
      onBlur,
      onFocusVisible,
      onHoverIn,
      onHoverOut,
      onPressIn,
      onPressOut,
      selected,
      style,
      styles,
      ...props
    } = useThemeProps({
      name: "TonalIconButton",
      props: inProps,
    })

    const theme = useTheme()

    const [focused, handleFocus] = useBoolean()
    const [hovered, handleHover] = useBoolean()
    const [pressed, handlePress] = useBoolean()

    const ownerState = {
      disabled,
      edge,
      focused,
      hovered,
      pressed,
      selected,
    }

    return (
      <TonalIconButtonRoot
        ref={ref}
        disabled={disabled}
        focusColor={theme.comp.tonalIconButton.focus.stateLayer.color}
        focusOpacity={theme.comp.tonalIconButton.focus.stateLayer.opacity}
        hitSlop={4}
        hoverColor={theme.comp.tonalIconButton.hover.stateLayer.color}
        hoverOpacity={theme.comp.tonalIconButton.hover.stateLayer.opacity}
        ownerState={ownerState}
        pressedColor={theme.comp.tonalIconButton.pressed.stateLayer.color}
        pressedOpacity={theme.comp.tonalIconButton.pressed.stateLayer.opacity}
        style={[style, styles?.root]}
        onBlur={createChainedFunction(onBlur, handleFocus.off)}
        onFocusVisible={createChainedFunction(onFocusVisible, handleFocus.on)}
        onHoverIn={createChainedFunction(onHoverIn, handleHover.on)}
        onHoverOut={createChainedFunction(onHoverOut, handleHover.off)}
        onPressIn={createChainedFunction(onPressIn, handlePress.on)}
        onPressOut={createChainedFunction(onPressOut, handlePress.off)}
        {...props}
      >
        <TonalIconButtonContent ownerState={ownerState} style={styles?.content}>
          {React.cloneElement(children, {
            height: theme.comp.tonalIconButton.icon.size,
            width: theme.comp.tonalIconButton.icon.size,
          })}
        </TonalIconButtonContent>
      </TonalIconButtonRoot>
    )
  },
)

if (__DEV__) {
  TonalIconButton.displayName = "TonalIconButton"
}
