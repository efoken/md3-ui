import {
  OwnerStateProps,
  styled,
  StylesProp,
  SxProps,
  TextStyleProvider,
  useTheme,
  useThemeProps,
} from "@md3-ui/system"
import { cloneElement, forwardRef } from "react"
import {
  TextStyle as RNTextStyle,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"
import { ButtonBase, ButtonBaseProps } from "./button-base"
import { useButtonBaseState } from "./use-button-base-state"

export interface IconButtonProps extends ButtonBaseProps {
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
  /** @default false */
  toggle?: boolean
}

export type IconButtonStyleKey = keyof NonNullable<IconButtonProps["styles"]>

type IconButtonOwnerState = Pick<
  IconButtonProps,
  "disabled" | "edge" | "selected" | "toggle"
> & {
  focused: boolean
  hovered: boolean
  pressed: boolean
}

const IconButtonRoot = styled(ButtonBase, {
  name: "IconButton",
  slot: "Root",
})<OwnerStateProps<IconButtonOwnerState>>(({ theme, ownerState }) => ({
  alignItems: "center",
  borderRadius: theme.comp.iconButton.stateLayer.shape,
  height: theme.comp.iconButton.stateLayer.size,
  justifyContent: "center",
  marginEnd: ownerState.edge === "end" ? -12 : undefined,
  marginStart: ownerState.edge === "start" ? -12 : undefined,
  width: theme.comp.iconButton.stateLayer.size,
}))

const IconButtonContent = styled(TextStyleProvider, {
  name: "IconButton",
  slot: "Content",
  skipSx: true,
})<OwnerStateProps<IconButtonOwnerState>>(({ theme, ownerState }) => ({
  color: ownerState.selected
    ? theme.comp.iconButton.selected.icon.color
    : theme.comp.iconButton.unselected.icon.color,

  ...(ownerState.hovered && {
    color: ownerState.selected
      ? theme.comp.iconButton.selected.hover.icon.color
      : theme.comp.iconButton.unselected.hover.icon.color,
  }),

  ...(ownerState.focused && {
    color: ownerState.selected
      ? theme.comp.iconButton.selected.focus.icon.color
      : theme.comp.iconButton.unselected.focus.icon.color,
  }),

  ...(ownerState.pressed && {
    color: ownerState.selected
      ? theme.comp.iconButton.selected.pressed.icon.color
      : theme.comp.iconButton.unselected.pressed.icon.color,
  }),

  ...(ownerState.disabled && {
    color: theme.utils.rgba(
      theme.comp.iconButton.disabled.icon.color,
      theme.comp.iconButton.disabled.icon.opacity,
    ),
  }),
}))

export const IconButton = forwardRef<RNView, IconButtonProps>(
  (inProps, ref) => {
    const {
      children,
      disabled = false,
      edge = false,
      selected,
      style,
      styles,
      toggle = false,
      ...props
    } = useThemeProps({
      name: "IconButton",
      props: inProps,
    })

    const theme = useTheme()

    const { focused, hovered, pressed, ...buttonBaseProps } =
      useButtonBaseState(props)

    const ownerState = {
      disabled,
      edge,
      focused,
      hovered,
      pressed,
      selected,
      toggle,
    }

    return (
      <IconButtonRoot
        ref={ref}
        disabled={disabled}
        focusColor={
          selected
            ? theme.comp.iconButton.selected.focus.stateLayer.color
            : theme.comp.iconButton.unselected.focus.stateLayer.color
        }
        focusOpacity={
          selected
            ? theme.comp.iconButton.selected.focus.stateLayer.opacity
            : theme.comp.iconButton.unselected.focus.stateLayer.opacity
        }
        hitSlop={4}
        hoverColor={
          selected
            ? theme.comp.iconButton.selected.hover.stateLayer.color
            : theme.comp.iconButton.unselected.hover.stateLayer.color
        }
        hoverOpacity={
          selected
            ? theme.comp.iconButton.selected.hover.stateLayer.opacity
            : theme.comp.iconButton.unselected.hover.stateLayer.opacity
        }
        ownerState={ownerState}
        pressedColor={
          selected
            ? theme.comp.iconButton.selected.pressed.stateLayer.color
            : theme.comp.iconButton.unselected.pressed.stateLayer.color
        }
        pressedOpacity={
          selected
            ? theme.comp.iconButton.selected.pressed.stateLayer.opacity
            : theme.comp.iconButton.unselected.pressed.stateLayer.opacity
        }
        style={[style, styles?.root]}
        {...buttonBaseProps}
        {...props}
      >
        <IconButtonContent ownerState={ownerState} style={styles?.content}>
          {cloneElement(children, {
            height: theme.comp.iconButton.icon.size,
            width: theme.comp.iconButton.icon.size,
          })}
        </IconButtonContent>
      </IconButtonRoot>
    )
  },
)

IconButton.displayName = "IconButton"
