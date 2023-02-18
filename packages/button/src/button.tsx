import { useBoolean } from "@md3-ui/hooks"
import { Text } from "@md3-ui/layout"
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

export interface ButtonProps extends ButtonBaseProps {
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
  styles?: {
    root?: RNViewStyle
    content?: RNTextStyle
    icon?: RNViewStyle
    label?: RNTextStyle
  }
  /**
   * The system prop that allows defining system overrides as well as
   * additional styles.
   */
  sx?: SxProps
  /**
   * The variant to use.
   * @default "elevated"
   */
  variant?: "elevated" | "filled" | "tonal" | "outlined" | "text"
}

export type ButtonStyleKey = keyof NonNullable<ButtonProps["styles"]>

const ButtonRoot = styled(ButtonBase, {
  name: "Button",
  slot: "Root",
})<OwnerStateProps<Pick<ButtonProps, "disabled" | "icon" | "variant">>>(
  ({ theme, ownerState }) => [
    {
      alignItems: "center",
      borderRadius: 20,
      flexDirection: "row",
      height: 40,
      justifyContent: "center",
      paddingHorizontal: 24,

      ...(ownerState.variant === "elevated" && {
        ...theme.sys.elevation.level1,
        backgroundColor: theme.sys.color.surface,

        ...(ownerState.disabled && {
          ...theme.sys.elevation.level0,
          backgroundColor: theme.utils.rgba(theme.sys.color.onSurface, 0.12),
        }),

        "&:hover": {
          ...theme.sys.elevation.level2,
        },

        "&:focus-visible": {
          ...theme.sys.elevation.level1,
        },
      }),

      ...(ownerState.variant === "filled" && {
        ...theme.sys.elevation.level0,
        backgroundColor: theme.sys.color.primary,

        ...(ownerState.disabled && {
          ...theme.sys.elevation.level0,
          backgroundColor: theme.utils.rgba(theme.sys.color.onSurface, 0.12),
        }),

        "&:hover": {
          ...theme.sys.elevation.level1,
        },

        "&:focus-visible": {
          ...theme.sys.elevation.level0,
        },
      }),

      ...(ownerState.variant === "tonal" && {
        ...theme.sys.elevation.level0,
        backgroundColor: theme.sys.color.secondaryContainer,

        ...(ownerState.disabled && {
          backgroundColor: theme.utils.rgba(theme.sys.color.onSurface, 0.12),
        }),

        "&:hover": {
          ...theme.sys.elevation.level1,
        },

        "&:focus-visible": {
          ...theme.sys.elevation.level0,
        },
      }),

      ...(ownerState.variant === "outlined" && {
        ...theme.sys.elevation.level0,
        backgroundColor: "transparent",
        borderColor: theme.sys.color.outline,
        borderWidth: 1,
        paddingHorizontal: 24 - 1,

        ...(ownerState.disabled && {
          borderColor: theme.utils.rgba(theme.sys.color.onSurface, 0.12),
        }),

        "&:focus-visible": {
          borderColor: theme.sys.color.primary,
        },
      }),

      ...(ownerState.variant === "text" && {
        ...theme.sys.elevation.level0,
        minWidth: 48,
        paddingEnd: ownerState.icon ? 16 : 12,
        paddingStart: 12,
      }),
    },
  ],
)

const ButtonContent = styled(TextStyleProvider, {
  name: "Button",
  slot: "Content",
  skipSx: true,
})<OwnerStateProps<Pick<ButtonProps, "disabled" | "variant">>>(
  ({ theme, ownerState }) => ({
    ...(ownerState.variant === "elevated" && {
      color: theme.sys.color.primary,
    }),

    ...(ownerState.variant === "filled" && {
      color: theme.sys.color.onPrimary,
    }),

    ...(ownerState.variant === "tonal" && {
      color: theme.sys.color.onSecondaryContainer,
    }),

    ...(ownerState.variant === "outlined" && {
      color: theme.sys.color.primary,
    }),

    ...(ownerState.variant === "text" && {
      color: theme.sys.color.primary,
    }),

    ...(ownerState.disabled && {
      color: theme.utils.rgba(theme.sys.color.onSurface, 0.38),
    }),
  }),
)

const ButtonIcon = styled(RNView, {
  name: "Button",
  slot: "Icon",
  skipSx: true,
})<OwnerStateProps<Pick<ButtonProps, "variant">>>(({ ownerState }) => ({
  marginEnd: 8,
  marginStart: ownerState.variant === "text" ? 0 : -8,
}))

const ButtonLabel = styled(Text, {
  name: "Button",
  slot: "Label",
  skipSx: true,
})(({ theme }) => ({
  ...theme.sys.typescale["label-large"],
  textAlign: "center",
}))

export const Button = React.forwardRef<RNView, ButtonProps>((inProps, ref) => {
  const {
    children,
    disabled = false,
    icon,
    style,
    styles,
    variant = "elevated",
    ...props
  } = useThemeProps({ name: "Button", props: inProps })

  const theme = useTheme()

  const [hovered, handleHover] = useBoolean()
  const [focused, handleFocus] = useBoolean()

  const ownerState = {
    disabled,
    focused,
    hovered,
    icon,
    variant,
  }

  return (
    <ButtonRoot
      ref={ref}
      disabled={disabled}
      ownerState={ownerState}
      rippleColor={
        variant === "elevated"
          ? theme.sys.color.primary
          : variant === "filled"
          ? theme.sys.color.onPrimary
          : variant === "tonal"
          ? theme.sys.color.onSecondaryContainer
          : variant === "outlined"
          ? theme.sys.color.primary
          : variant === "text"
          ? theme.sys.color.primary
          : undefined
      }
      style={[styles?.root, style]}
      onBlur={handleFocus.off}
      onFocus={handleFocus.on}
      onHoverIn={handleHover.on}
      onHoverOut={handleHover.off}
      {...props}
    >
      <ButtonContent ownerState={ownerState} style={styles?.content}>
        {icon && (
          <ButtonIcon ownerState={ownerState} style={styles?.icon}>
            {React.cloneElement(icon, {
              height: 18,
              width: 18,
            })}
          </ButtonIcon>
        )}
        <ButtonLabel style={styles?.label}>{children}</ButtonLabel>
      </ButtonContent>
    </ButtonRoot>
  )
})

if (__DEV__) {
  Button.displayName = "Button"
}
