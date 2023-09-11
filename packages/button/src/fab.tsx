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
  Platform,
  TextStyle as RNTextStyle,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"
import { ButtonBase, ButtonBaseProps } from "./button-base"
import { useButtonBaseState } from "./use-button-base-state"

export interface FabProps extends Omit<ButtonBaseProps, "children"> {
  /**
   * The icon to display.
   */
  icon: React.ReactElement
  /**
   * If `true`, the component is lowered.
   */
  lowered?: boolean
  /**
   * Override or extend the styles applied to the component.
   */
  styles?: StylesProp<{
    root?: RNViewStyle
    icon?: RNTextStyle
  }>
  /**
   * The system prop that allows defining system overrides as well as
   * additional styles.
   */
  sx?: SxProps
}

export type FabStyleKey = keyof NonNullable<FabProps["styles"]>

type FabOwnerState = Pick<FabProps, "lowered"> & {
  focused: boolean
  hovered: boolean
  pressed: boolean
}

const FabRoot = styled(ButtonBase, {
  name: "Fab",
  slot: "Root",
})<OwnerStateProps<FabOwnerState>>(({ theme, ownerState }) => ({
  ...theme.comp.fab.primary.container.elevation,
  alignItems: "center",
  backgroundColor: theme.comp.fab.primary.container.color,
  borderRadius: theme.comp.fab.primary.container.shape,
  height: theme.comp.fab.primary.container.height,
  justifyContent: "center",
  width: theme.comp.fab.primary.container.width,

  ...(Platform.OS !== "web" && {
    shadowColor: theme.comp.fab.primary.container.shadowColor,
  }),

  ...(ownerState.lowered && {
    ...theme.comp.fab.primary.lowered.container.elevation,
  }),

  ...(ownerState.hovered && {
    ...(ownerState.lowered
      ? theme.comp.fab.primary.lowered.hover.container.elevation
      : theme.comp.fab.primary.hover.container.elevation),
  }),

  ...(ownerState.focused && {
    ...(ownerState.lowered
      ? theme.comp.fab.primary.lowered.focus.container.elevation
      : theme.comp.fab.primary.focus.container.elevation),
  }),

  ...(ownerState.pressed && {
    ...(ownerState.lowered
      ? theme.comp.fab.primary.lowered.pressed.container.elevation
      : theme.comp.fab.primary.pressed.container.elevation),
  }),
}))

const FabIcon = styled(TextStyleProvider, {
  name: "Fab",
  slot: "Icon",
  skipSx: true,
})<OwnerStateProps<FabOwnerState>>(({ theme, ownerState }) => ({
  color: theme.comp.fab.primary.icon.color,

  ...(ownerState.hovered && {
    color: theme.comp.fab.primary.hover.icon.color,
  }),

  ...(ownerState.focused && {
    color: theme.comp.fab.primary.focus.icon.color,
  }),

  ...(ownerState.pressed && {
    color: theme.comp.fab.primary.pressed.icon.color,
  }),
}))

export const Fab = forwardRef<RNView, FabProps>((inProps, ref) => {
  const {
    icon,
    lowered = false,
    style,
    styles,
    ...props
  } = useThemeProps({
    name: "Fab",
    props: inProps,
  })

  const theme = useTheme()

  const { focused, hovered, pressed, ...buttonBaseProps } =
    useButtonBaseState(props)

  const ownerState = {
    focused,
    hovered,
    lowered,
    pressed,
  }

  return (
    <FabRoot
      ref={ref}
      focusColor={theme.comp.fab.primary.focus.stateLayer.color}
      focusOpacity={theme.comp.fab.primary.focus.stateLayer.opacity}
      hoverColor={theme.comp.fab.primary.hover.stateLayer.color}
      hoverOpacity={theme.comp.fab.primary.hover.stateLayer.opacity}
      ownerState={ownerState}
      pressedColor={theme.comp.fab.primary.pressed.stateLayer.color}
      pressedOpacity={theme.comp.fab.primary.pressed.stateLayer.opacity}
      style={[style, styles?.root]}
      {...buttonBaseProps}
      {...props}
    >
      <FabIcon ownerState={ownerState} style={styles?.icon}>
        {cloneElement(icon, {
          height: theme.comp.fab.primary.icon.size,
          width: theme.comp.fab.primary.icon.size,
        })}
      </FabIcon>
    </FabRoot>
  )
})

Fab.displayName = "Fab"
