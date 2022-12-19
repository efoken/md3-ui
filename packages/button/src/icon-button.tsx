import {
  OwnerStateProps,
  styled,
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
   * The size of the component. `small` is equivalent to the dense button
   * styling.
   * @default "medium"
   */
  size?: "small" | "medium" | "large"
  /**
   * Override or extend the styles applied to the component.
   */
  styles?: {
    root?: RNViewStyle
    content?: RNTextStyle
  }
  /**
   * The system prop that allows defining system overrides as well as
   * additional styles.
   */
  sx?: SxProps
  /**
   * The variant to use.
   * @default "standard"
   */
  variant?: "filled" | "tonal" | "outlined" | "standard"
}

export type IconButtonStyleKey = keyof NonNullable<IconButtonProps["styles"]>

const IconButtonRoot = styled(ButtonBase, {
  name: "IconButton",
  slot: "Root",
})<
  OwnerStateProps<
    Pick<IconButtonProps, "disabled" | "edge" | "selected" | "size" | "variant">
  >
>(({ theme, ownerState }) => ({
  alignItems: "center",
  borderRadius: theme.sys.shape.corner.full,
  justifyContent: "center",
  marginEnd: ownerState.edge === "end" ? -theme.spacing(1.5) : undefined,
  marginStart: ownerState.edge === "start" ? -theme.spacing(1.5) : undefined,

  ...(ownerState.size === "small" && {
    height: 32,
    width: 32,
  }),

  ...(ownerState.size === "medium" && {
    height: 40,
    width: 40,
  }),

  ...(ownerState.size === "large" && {
    height: 48,
    width: 48,
  }),

  ...(ownerState.variant === "filled" && {
    backgroundColor:
      ownerState.selected === false
        ? theme.sys.color.surfaceVariant
        : theme.sys.color.primary,

    ...(ownerState.disabled && {
      backgroundColor: theme.utils.rgba(theme.sys.color.onSurface, 0.12),
    }),
  }),

  ...(ownerState.variant === "tonal" && {
    backgroundColor:
      ownerState.selected === false
        ? theme.sys.color.surfaceVariant
        : theme.sys.color.secondaryContainer,

    ...(ownerState.disabled && {
      backgroundColor: theme.utils.rgba(theme.sys.color.onSurface, 0.12),
    }),
  }),

  ...(ownerState.variant === "outlined" && {
    backgroundColor: "transparent",
    borderColor: theme.sys.color.outline,
    borderWidth: 1,

    ...(ownerState.selected === true && {
      backgroundColor: theme.sys.color.inverseSurface,
      borderColor: "transparent",
    }),

    ...(ownerState.disabled && {
      borderColor: theme.utils.rgba(theme.sys.color.onSurface, 0.12),
    }),
  }),
}))

const IconButtonContent = styled(TextStyleProvider, {
  name: "IconButton",
  slot: "Content",
  skipSx: true,
})<OwnerStateProps<Pick<IconButtonProps, "disabled" | "selected" | "variant">>>(
  ({ theme, ownerState }) => ({
    ...(ownerState.variant === "filled" && {
      color:
        ownerState.selected === false
          ? theme.sys.color.primary
          : theme.sys.color.onPrimary,
    }),

    ...(ownerState.variant === "tonal" && {
      color:
        ownerState.selected === false
          ? theme.sys.color.surfaceVariant
          : theme.sys.color.onSecondaryContainer,
    }),

    ...(ownerState.variant === "outlined" && {
      color:
        ownerState.selected === true
          ? theme.sys.color.inverseOnSurface
          : theme.sys.color.onSurfaceVariant,
    }),

    ...(ownerState.variant === "standard" && {
      color:
        ownerState.selected === true
          ? theme.sys.color.primary
          : theme.sys.color.onSurfaceVariant,
    }),

    ...(ownerState.disabled && {
      color: theme.utils.rgba(theme.sys.color.onSurface, 0.38),
    }),
  }),
)

export const IconButton = React.forwardRef<RNView, IconButtonProps>(
  (inProps, ref) => {
    const {
      children,
      disabled = false,
      edge = false,
      selected,
      size = "medium",
      style,
      styles,
      variant = "standard",
      ...props
    } = useThemeProps({
      name: "IconButton",
      props: inProps,
    })

    const theme = useTheme()

    const ownerState = {
      disabled,
      edge,
      selected,
      size,
      variant,
    }

    return (
      <IconButtonRoot
        ref={ref}
        hitSlop={4}
        rippleColor={
          variant === "filled"
            ? theme.sys.color.onPrimary
            : variant === "tonal"
            ? theme.sys.color.onSecondaryContainer
            : variant === "outlined"
            ? theme.sys.color.primary
            : variant === "standard"
            ? theme.sys.color.primary
            : undefined
        }
        style={[style, styles?.root]}
        ownerState={ownerState}
        {...props}
      >
        <IconButtonContent ownerState={ownerState} style={styles?.content}>
          {React.cloneElement(children, {
            height: 24,
            width: 24,
          })}
        </IconButtonContent>
      </IconButtonRoot>
    )
  },
)

if (__DEV__) {
  IconButton.displayName = "IconButton"
}
