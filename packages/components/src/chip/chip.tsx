import {
  OwnerStateProps,
  StylesProp,
  SxProps,
  Text,
  TextStyleProvider,
  styled,
  useThemeProps,
} from "@md3-ui/system"
import { cloneElement, forwardRef } from "react"
import {
  TextStyle as RNTextStyle,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"
import { ButtonBase, ButtonBaseProps } from "../button"

export interface ChipProps extends ButtonBaseProps {
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean
  /**
   * If `true`, the component is elevated.
   * @default false
   */
  elevated?: boolean
  /**
   * Icon element.
   */
  icon?: React.ReactElement
  /**
   * The content of the component.
   */
  label?: string
  onDelete?: () => void
  /**
   * If `true`, the Chip will appear pressable, and will raise when pressed,
   * even if the `onPress` or `onLongProps` props are not defined. If `false`,
   * the Chip will not appear pressable, even if `onPress` or `onLongProps`
   * props are defined. This can be used, for example, along with the `as` prop
   * to indicate an anchor Chip is pressable. Note: This controls the UI and
   * does not affect the `onPress` event.
   */
  pressable?: boolean
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected?: boolean
  /**
   * Override or extend the styles applied to the component.
   */
  styles?: StylesProp<{
    root?: RNViewStyle
    icon?: RNViewStyle
    label?: RNTextStyle
  }>
  /**
   * The system prop that allows defining system overrides as well as additional
   * styles.
   */
  sx?: SxProps
  /**
   * The variant to use.
   * @default "assist"
   */
  variant?: "assist" | "filter" | "input" | "suggestion"
}

export type ChipStyleKey = keyof NonNullable<ChipProps["styles"]>

const ChipRoot = styled(ButtonBase, {
  name: "Chip",
  slot: "Root",
})<OwnerStateProps<Pick<ChipProps, "elevated" | "selected" | "variant">>>(
  ({ theme, ownerState }) => ({
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    height: 32,
    paddingHorizontal: 16 - 1,

    ...(ownerState.variant === "assist" && {
      ...theme.sys.elevation.level0,
      backgroundColor: theme.sys.color.surface,
      borderColor: theme.sys.color.outline,

      ...(ownerState.elevated && {
        ...theme.sys.elevation.level1,
        borderColor: "transparent",
      }),
    }),

    ...(ownerState.variant === "filter" && {
      ...theme.sys.elevation.level0,
      backgroundColor: theme.sys.color.surface,
      borderColor: theme.sys.color.outline,

      ...(ownerState.elevated && {
        ...theme.sys.elevation.level1,
        borderColor: "transparent",
      }),

      ...(ownerState.selected && {
        backgroundColor: theme.sys.color.secondaryContainer,
        borderWidth: 0,
        paddingHorizontal: 16,
      }),
    }),

    ...(ownerState.variant === "input" && {
      ...theme.sys.elevation.level0,
      backgroundColor: theme.sys.color.surface,
      borderColor: theme.sys.color.outline,

      ...(ownerState.selected && {
        backgroundColor: theme.sys.color.secondaryContainer,
        borderWidth: 0,
        paddingHorizontal: 16,
      }),
    }),

    ...(ownerState.variant === "suggestion" && {
      ...theme.sys.elevation.level0,
      backgroundColor: theme.sys.color.surface,
      borderColor: theme.sys.color.outline,

      ...(ownerState.elevated && {
        ...theme.sys.elevation.level1,
        borderColor: "transparent",
      }),

      ...(ownerState.selected && {
        backgroundColor: theme.sys.color.secondaryContainer,
        borderWidth: 0,
        paddingHorizontal: 16,
      }),
    }),
  }),
)

const ChipContent = styled(TextStyleProvider, {
  name: "Chip",
  slot: "Content",
  skipSx: true,
})(({ theme }) => ({
  color: theme.sys.color.primary,
}))

const ChipIcon = styled(RNView, {
  name: "Chip",
  slot: "Icon",
  skipSx: true,
})<OwnerStateProps<Pick<ChipProps, "variant">>>({
  marginEnd: 8,
  marginStart: -8,
})

const ChipLabel = styled(Text, {
  name: "Chip",
  slot: "Label",
  skipSx: true,
})<OwnerStateProps<Pick<ChipProps, "selected" | "variant">>>(
  ({ theme, ownerState }) => ({
    ...theme.sys.typescale.labelLarge,

    ...(ownerState.variant === "assist" && {
      color: theme.sys.color.onSurface,
    }),

    ...(ownerState.variant === "filter" && {
      color: ownerState.selected
        ? theme.sys.color.onSecondaryContainer
        : theme.sys.color.onSurfaceVariant,
    }),

    ...(ownerState.variant === "input" && {
      color: ownerState.selected
        ? theme.sys.color.onSecondaryContainer
        : theme.sys.color.onSurfaceVariant,
    }),

    ...(ownerState.variant === "suggestion" && {
      color: ownerState.selected
        ? theme.sys.color.onSecondaryContainer
        : theme.sys.color.onSurfaceVariant,
    }),
  }),
)

export const Chip = forwardRef<RNView, ChipProps>((inProps, ref) => {
  const {
    children,
    disabled = false,
    elevated = false,
    icon,
    label,
    onDelete,
    pressable: pressableProp,
    selected = false,
    style,
    styles,
    variant = "assist",
    ...props
  } = useThemeProps({
    name: "Text",
    props: inProps,
  })

  const pressable =
    pressableProp !== false &&
    (props.href != null ||
      props.onPress != null ||
      props.onPressIn != null ||
      props.onPressOut != null ||
      props.onLongPress != null)
      ? true
      : pressableProp

  const ownerState = {
    elevated,
    selected,
    variant,
  }

  return (
    <ChipRoot
      ref={ref}
      as={pressable || onDelete != null ? undefined : RNView}
      disabled={pressable && disabled ? true : undefined}
      ownerState={ownerState}
      style={[style, styles?.root]}
      {...props}
    >
      <ChipContent>
        {icon && (
          <ChipIcon ownerState={ownerState} style={styles?.icon}>
            {cloneElement(icon, {
              height: 18,
              width: 18,
            })}
          </ChipIcon>
        )}
        <ChipLabel ownerState={ownerState} style={styles?.label}>
          {label}
        </ChipLabel>
      </ChipContent>
    </ChipRoot>
  )
})

Chip.displayName = "Chip"
