import {
  OwnerStateProps,
  styled,
  StylesProp,
  SxProps,
  TextStyleProvider,
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
  /** @default false */
  toggle?: boolean
}

export type FilledIconButtonStyleKey = keyof NonNullable<
  FilledIconButtonProps["styles"]
>

type FilledIconButtonOwnerState = Pick<
  FilledIconButtonProps,
  "disabled" | "edge" | "selected" | "toggle"
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

  ...(ownerState.toggle && {
    backgroundColor: ownerState.selected
      ? theme.comp.filledIconButton.selected.container.color
      : theme.comp.filledIconButton.unselected.container.color,
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

  ...(ownerState.hovered && {
    color: theme.comp.filledIconButton.hover.icon.color,
  }),

  ...(ownerState.focused && {
    color: theme.comp.filledIconButton.focus.icon.color,
  }),

  ...(ownerState.pressed && {
    color: theme.comp.filledIconButton.pressed.icon.color,
  }),

  ...(ownerState.toggle && {
    color: ownerState.selected
      ? theme.comp.filledIconButton.toggle.selected.icon.color
      : theme.comp.filledIconButton.toggle.unselected.icon.color,

    ...(ownerState.hovered && {
      color: ownerState.selected
        ? theme.comp.filledIconButton.toggle.selected.hover.icon.color
        : theme.comp.filledIconButton.toggle.unselected.hover.icon.color,
    }),

    ...(ownerState.focused && {
      color: ownerState.selected
        ? theme.comp.filledIconButton.toggle.selected.focus.icon.color
        : theme.comp.filledIconButton.toggle.unselected.focus.icon.color,
    }),

    ...(ownerState.pressed && {
      color: ownerState.selected
        ? theme.comp.filledIconButton.toggle.selected.pressed.icon.color
        : theme.comp.filledIconButton.toggle.unselected.pressed.icon.color,
    }),
  }),

  ...(ownerState.disabled && {
    color: theme.utils.rgba(
      theme.comp.filledIconButton.disabled.icon.color,
      theme.comp.filledIconButton.disabled.icon.opacity,
    ),
  }),
}))

export const FilledIconButton = React.forwardRef<RNView, FilledIconButtonProps>(
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
      name: "FilledIconButton",
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
        {...(toggle && {
          focusColor: selected
            ? theme.comp.filledIconButton.toggle.selected.focus.stateLayer.color
            : theme.comp.filledIconButton.toggle.unselected.focus.stateLayer
                .color,
          hoverColor: selected
            ? theme.comp.filledIconButton.toggle.selected.hover.stateLayer.color
            : theme.comp.filledIconButton.toggle.unselected.hover.stateLayer
                .color,
          pressedColor:
            theme.comp.filledIconButton.toggle.unselected.pressed.stateLayer
              .color,
        })}
        style={[style, styles?.root]}
        {...buttonBaseProps}
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

FilledIconButton.displayName = "FilledIconButton"
