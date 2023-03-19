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

export interface FilledIconButtonProps extends ButtonBaseProps {
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

export type FilledIconButtonStyleKey = keyof NonNullable<
  FilledIconButtonProps["styles"]
>

type FilledIconButtonOwnerState = Pick<
  FilledIconButtonProps,
  "disabled" | "edge" | "selected"
> & {
  focused: boolean
  hovered: boolean
  pressed: boolean
}

const FilledIconButtonRoot = styled(ButtonBase, {
  name: "FilledIconButton",
  slot: "Root",
})<OwnerStateProps<FilledIconButtonOwnerState>>(({ theme, ownerState }) => ({
  alignItems: "center",
  backgroundColor: theme.comp.filledIconButton.container.color,
  borderRadius: theme.comp.filledIconButton.container.shape,
  height: theme.comp.filledIconButton.container.size,
  justifyContent: "center",
  marginEnd: ownerState.edge === "end" ? -12 : undefined,
  marginStart: ownerState.edge === "start" ? -12 : undefined,
  width: theme.comp.filledIconButton.container.size,

  ...(ownerState.selected === true && {
    backgroundColor: theme.comp.filledIconButton.selected.container.color,
  }),

  ...(ownerState.selected === false && {
    backgroundColor: theme.comp.filledIconButton.unselected.container.color,
  }),

  ...(ownerState.disabled && {
    backgroundColor: theme.utils.rgba(
      theme.comp.filledIconButton.disabled.container.color,
      theme.comp.filledIconButton.disabled.container.opacity,
    ),
  }),
}))

const FilledIconButtonContent = styled(TextStyleProvider, {
  name: "FilledIconButton",
  slot: "Content",
  skipSx: true,
})<OwnerStateProps<FilledIconButtonOwnerState>>(({ theme, ownerState }) => ({
  color: theme.comp.filledIconButton.icon.color,

  ...(ownerState.disabled && {
    color: theme.utils.rgba(
      theme.comp.filledIconButton.disabled.icon.color,
      theme.comp.filledIconButton.disabled.icon.opacity,
    ),
  }),

  ...(ownerState.hovered && {
    color: theme.comp.filledIconButton.hover.icon.color,
  }),

  ...(ownerState.focused && {
    color: theme.comp.filledIconButton.focus.icon.color,
  }),

  ...(ownerState.pressed && {
    color: theme.comp.filledIconButton.pressed.icon.color,
  }),
}))

export const FilledIconButton = React.forwardRef<RNView, FilledIconButtonProps>(
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
      name: "FilledIconButton",
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
      <FilledIconButtonRoot
        ref={ref}
        disabled={disabled}
        focusColor={theme.comp.filledIconButton.focus.stateLayer.color}
        focusOpacity={theme.comp.filledIconButton.focus.stateLayer.opacity}
        hitSlop={4}
        hoverColor={theme.comp.filledIconButton.hover.stateLayer.color}
        hoverOpacity={theme.comp.filledIconButton.hover.stateLayer.opacity}
        ownerState={ownerState}
        pressedColor={theme.comp.filledIconButton.pressed.stateLayer.color}
        pressedOpacity={theme.comp.filledIconButton.pressed.stateLayer.opacity}
        style={[style, styles?.root]}
        onBlur={createChainedFunction(onBlur, handleFocus.off)}
        onFocusVisible={createChainedFunction(onFocusVisible, handleFocus.on)}
        onHoverIn={createChainedFunction(onHoverIn, handleHover.on)}
        onHoverOut={createChainedFunction(onHoverOut, handleHover.off)}
        onPressIn={createChainedFunction(onPressIn, handlePress.on)}
        onPressOut={createChainedFunction(onPressOut, handlePress.off)}
        {...props}
      >
        <FilledIconButtonContent
          ownerState={ownerState}
          style={styles?.content}
        >
          {React.cloneElement(children, {
            height: theme.comp.filledIconButton.icon.size,
            width: theme.comp.filledIconButton.icon.size,
          })}
        </FilledIconButtonContent>
      </FilledIconButtonRoot>
    )
  },
)

if (__DEV__) {
  FilledIconButton.displayName = "FilledIconButton"
}
