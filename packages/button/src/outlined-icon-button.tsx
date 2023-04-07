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
import { useButtonBaseState } from "./use-button-base-state"

export interface OutlinedIconButtonProps extends ButtonBaseProps {
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

export type OutlinedIconButtonStyleKey = keyof NonNullable<
  OutlinedIconButtonProps["styles"]
>

type OutlinedIconButtonOwnerState = Pick<
  OutlinedIconButtonProps,
  "disabled" | "edge" | "selected"
> & {
  focused: boolean
  hovered: boolean
  pressed: boolean
}

const OutlinedIconButtonRoot = styled(ButtonBase, {
  name: "OutlinedIconButton",
  slot: "Root",
})<OwnerStateProps<OutlinedIconButtonOwnerState>>(({ theme, ownerState }) => ({
  alignItems: "center",
  borderRadius: theme.comp.outlinedIconButton.container.shape,
  height: theme.comp.outlinedIconButton.container.size,
  justifyContent: "center",
  marginEnd: ownerState.edge === "end" ? -12 : undefined,
  marginStart: ownerState.edge === "start" ? -12 : undefined,
  width: theme.comp.outlinedIconButton.container.size,

  ...(ownerState.selected
    ? {
        backgroundColor: theme.comp.outlinedIconButton.selected.container.color,
      }
    : {
        borderColor: theme.comp.outlinedIconButton.unselected.outline.color,
        borderWidth: theme.comp.outlinedIconButton.unselected.outline.width,
      }),

  ...(ownerState.disabled &&
    (ownerState.selected
      ? {
          backgroundColor: theme.utils.rgba(
            theme.comp.outlinedIconButton.disabled.selected.container.color,
            theme.comp.outlinedIconButton.disabled.selected.container.opacity,
          ),
        }
      : {
          borderColor: theme.utils.rgba(
            theme.comp.outlinedIconButton.disabled.unselected.outline.color,
            theme.comp.outlinedIconButton.disabled.unselected.outline.opacity,
          ),
        })),
}))

const OutlinedIconButtonContent = styled(TextStyleProvider, {
  name: "OutlinedIconButton",
  slot: "Content",
  skipSx: true,
})<OwnerStateProps<OutlinedIconButtonOwnerState>>(({ theme, ownerState }) => ({
  color: ownerState.selected
    ? theme.comp.outlinedIconButton.selected.icon.color
    : theme.comp.outlinedIconButton.unselected.icon.color,

  ...(ownerState.hovered && {
    color: ownerState.selected
      ? theme.comp.outlinedIconButton.selected.hover.icon.color
      : theme.comp.outlinedIconButton.unselected.hover.icon.color,
  }),

  ...(ownerState.focused && {
    color: ownerState.selected
      ? theme.comp.outlinedIconButton.selected.focus.icon.color
      : theme.comp.outlinedIconButton.unselected.focus.icon.color,
  }),

  ...(ownerState.pressed && {
    color: ownerState.selected
      ? theme.comp.outlinedIconButton.selected.pressed.icon.color
      : theme.comp.outlinedIconButton.unselected.pressed.icon.color,
  }),

  ...(ownerState.disabled && {
    color: theme.utils.rgba(
      theme.comp.outlinedIconButton.disabled.icon.color,
      theme.comp.outlinedIconButton.disabled.icon.opacity,
    ),
  }),
}))

export const OutlinedIconButton = React.forwardRef<
  RNView,
  OutlinedIconButtonProps
>((inProps, ref) => {
  const {
    children,
    disabled = false,
    edge = false,
    selected = false,
    style,
    styles,
    ...props
  } = useThemeProps({
    name: "OutlinedIconButton",
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
  }

  return (
    <OutlinedIconButtonRoot
      ref={ref}
      disabled={disabled}
      focusColor={
        selected
          ? theme.comp.outlinedIconButton.selected.focus.stateLayer.color
          : theme.comp.outlinedIconButton.unselected.focus.stateLayer.color
      }
      focusOpacity={theme.comp.outlinedIconButton.focus.stateLayer.opacity}
      hitSlop={4}
      hoverColor={
        selected
          ? theme.comp.outlinedIconButton.selected.hover.stateLayer.color
          : theme.comp.outlinedIconButton.unselected.hover.stateLayer.color
      }
      hoverOpacity={theme.comp.outlinedIconButton.hover.stateLayer.opacity}
      ownerState={ownerState}
      pressedColor={
        selected
          ? theme.comp.outlinedIconButton.selected.pressed.stateLayer.color
          : theme.comp.outlinedIconButton.unselected.pressed.stateLayer.color
      }
      pressedOpacity={theme.comp.outlinedIconButton.pressed.stateLayer.opacity}
      style={[style, styles?.root]}
      {...buttonBaseProps}
      {...props}
    >
      <OutlinedIconButtonContent
        ownerState={ownerState}
        style={styles?.content}
      >
        {React.cloneElement(children, {
          height: theme.comp.outlinedIconButton.icon.size,
          width: theme.comp.outlinedIconButton.icon.size,
        })}
      </OutlinedIconButtonContent>
    </OutlinedIconButtonRoot>
  )
})

if (__DEV__) {
  OutlinedIconButton.displayName = "OutlinedIconButton"
}
