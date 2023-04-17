import {
  OwnerStateProps,
  styled,
  StylesProp,
  SxProps,
  Text,
  useTheme,
  useThemeProps,
} from "@md3-ui/system"
import * as React from "react"
import {
  Platform,
  TextStyle as RNTextStyle,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"
import { ButtonBase, ButtonBaseProps } from "./button-base"
import { useButtonBaseState } from "./use-button-base-state"

export interface ExtendedFabProps extends Omit<ButtonBaseProps, "children"> {
  /**
   * The icon to display.
   */
  icon?: React.ReactElement
  /**
   * The content of the component.
   */
  label?: React.ReactNode
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
    label?: RNTextStyle
  }>
  /**
   * The system prop that allows defining system overrides as well as
   * additional styles.
   */
  sx?: SxProps
}

export type ExtendedFabStyleKey = keyof NonNullable<ExtendedFabProps["styles"]>

type ExtendedFabOwnerState = Pick<ExtendedFabProps, "lowered"> & {
  focused: boolean
  hovered: boolean
  pressed: boolean
}

const ExtendedFabRoot = styled(ButtonBase, {
  name: "ExtendedFab",
  slot: "Root",
})<OwnerStateProps<ExtendedFabOwnerState>>(({ theme, ownerState }) => ({
  ...theme.comp.extendedFab.primary.container.elevation,
  alignItems: "center",
  backgroundColor: theme.comp.extendedFab.primary.container.color,
  borderRadius: theme.comp.extendedFab.primary.container.shape,
  columnGap: 12,
  flexDirection: "row",
  height: theme.comp.extendedFab.primary.container.height,
  justifyContent: "center",
  minWidth: 80,
  paddingEnd: 20,
  paddingStart: 16,

  ...(Platform.OS !== "web" && {
    shadowColor: theme.comp.extendedFab.primary.container.shadowColor,
  }),

  ...(ownerState.lowered && {
    ...theme.comp.extendedFab.primary.lowered.container.elevation,
  }),

  ...(ownerState.hovered && {
    ...(ownerState.lowered
      ? theme.comp.extendedFab.primary.lowered.hover.container.elevation
      : theme.comp.extendedFab.primary.hover.container.elevation),
  }),

  ...(ownerState.focused && {
    ...(ownerState.lowered
      ? theme.comp.extendedFab.primary.lowered.focus.container.elevation
      : theme.comp.extendedFab.primary.focus.container.elevation),
  }),

  ...(ownerState.pressed && {
    ...(ownerState.lowered
      ? theme.comp.extendedFab.primary.lowered.pressed.container.elevation
      : theme.comp.extendedFab.primary.pressed.container.elevation),
  }),
}))

const ExtendedFabIcon = styled(RNView, {
  name: "ExtendedFab",
  slot: "Icon",
  skipSx: true,
})<OwnerStateProps<ExtendedFabOwnerState>>(({ theme, ownerState }) => ({
  color: theme.comp.extendedFab.primary.icon.color,

  ...(ownerState.hovered && {
    color: theme.comp.extendedFab.primary.hover.icon.color,
  }),

  ...(ownerState.focused && {
    color: theme.comp.extendedFab.primary.focus.icon.color,
  }),

  ...(ownerState.pressed && {
    color: theme.comp.extendedFab.primary.pressed.icon.color,
  }),
}))

const ExtendedFabLabel = styled(Text, {
  name: "ExtendedFab",
  slot: "Label",
  skipSx: true,
})<OwnerStateProps<ExtendedFabOwnerState>>(({ theme, ownerState }) => ({
  ...theme.comp.extendedFab.primary.labelText.textStyle,
  color: theme.comp.extendedFab.primary.labelText.color,

  ...(ownerState.hovered && {
    color: theme.comp.extendedFab.primary.hover.labelText.color,
  }),

  ...(ownerState.focused && {
    color: theme.comp.extendedFab.primary.focus.labelText.color,
  }),

  ...(ownerState.pressed && {
    color: theme.comp.extendedFab.primary.pressed.labelText.color,
  }),
}))

export const ExtendedFab = React.forwardRef<RNView, ExtendedFabProps>(
  (inProps, ref) => {
    const {
      icon,
      label,
      lowered = false,
      style,
      styles,
      ...props
    } = useThemeProps({
      name: "ExtendedFab",
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
      <ExtendedFabRoot
        ref={ref}
        focusColor={theme.comp.extendedFab.primary.focus.stateLayer.color}
        focusOpacity={theme.comp.extendedFab.primary.focus.stateLayer.opacity}
        hoverColor={theme.comp.extendedFab.primary.hover.stateLayer.color}
        hoverOpacity={theme.comp.extendedFab.primary.hover.stateLayer.opacity}
        ownerState={ownerState}
        pressedColor={theme.comp.extendedFab.primary.pressed.stateLayer.color}
        pressedOpacity={
          theme.comp.extendedFab.primary.pressed.stateLayer.opacity
        }
        style={[style, styles?.root]}
        {...buttonBaseProps}
        {...props}
      >
        {icon && (
          <ExtendedFabIcon ownerState={ownerState} style={styles?.icon}>
            {React.cloneElement(icon, {
              height: theme.comp.extendedFab.primary.icon.size,
              width: theme.comp.extendedFab.primary.icon.size,
            })}
          </ExtendedFabIcon>
        )}
        {label && (
          <ExtendedFabLabel ownerState={ownerState} style={styles?.label}>
            {label}
          </ExtendedFabLabel>
        )}
      </ExtendedFabRoot>
    )
  },
)

ExtendedFab.displayName = "ExtendedFab"
