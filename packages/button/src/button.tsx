import { useBoolean } from "@md3-ui/hooks"
import { Text, TextProvider } from "@md3-ui/layout"
import {
  OwnerStateProps,
  styled,
  SxProps,
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
      paddingHorizontal: theme.spacing(3),

      ...(ownerState.variant === "elevated" && {
        ...theme.elevation.level1,
        backgroundColor: theme.color.surface,

        ...(ownerState.disabled && {
          ...theme.elevation.level0,
          backgroundColor: theme.utils.rgba(theme.color["on-surface"], 0.12),
        }),

        ":hover": {
          ...theme.elevation.level2,
        },

        ":focus": {
          ...theme.elevation.level1,
        },
      }),

      ...(ownerState.variant === "filled" && {
        ...theme.elevation.level0,
        backgroundColor: theme.color.primary,

        ...(ownerState.disabled && {
          ...theme.elevation.level0,
          backgroundColor: theme.utils.rgba(theme.color["on-surface"], 0.12),
        }),

        ":hover": {
          ...theme.elevation.level1,
        },

        ":focus": {
          ...theme.elevation.level0,
        },
      }),

      ...(ownerState.variant === "tonal" && {
        ...theme.elevation.level0,
        backgroundColor: theme.color["secondary-container"],

        ...(ownerState.disabled && {
          backgroundColor: theme.utils.rgba(theme.color["on-surface"], 0.12),
        }),

        ":hover": {
          ...theme.elevation.level1,
        },

        ":focus": {
          ...theme.elevation.level0,
        },
      }),

      ...(ownerState.variant === "outlined" && {
        ...theme.elevation.level0,
        backgroundColor: "rgba(255, 255, 255, 0)",
        borderColor: theme.color.outline,
        borderWidth: 1,
        paddingHorizontal: theme.spacing(3) - 1,

        ...(ownerState.disabled && {
          borderColor: theme.utils.rgba(theme.color["on-surface"], 0.12),
        }),

        ":focus": {
          borderColor: theme.color.primary,
        },
      }),

      ...(ownerState.variant === "text" && {
        ...theme.elevation.level0,
        minWidth: 48,
        paddingEnd: ownerState.icon ? theme.spacing(2) : theme.spacing(1.5),
        paddingStart: theme.spacing(1.5),
      }),
    },
  ],
)

const ButtonContent = styled(TextProvider, {
  name: "Button",
  slot: "Content",
})<OwnerStateProps<Pick<ButtonProps, "disabled" | "variant">>>(
  ({ theme, ownerState }) => ({
    ...(ownerState.variant === "elevated" && {
      color: theme.color.primary,
    }),

    ...(ownerState.variant === "filled" && {
      color: theme.color["on-primary"],
    }),

    ...(ownerState.variant === "tonal" && {
      color: theme.color["on-secondary-container"],
    }),

    ...(ownerState.variant === "outlined" && {
      color: theme.color.primary,
    }),

    ...(ownerState.variant === "text" && {
      color: theme.color.primary,
    }),

    ...(ownerState.disabled && {
      color: theme.utils.rgba(theme.color["on-surface"], 0.38),
    }),
  }),
)

const ButtonIcon = styled(RNView, {
  name: "Button",
  slot: "Icon",
})<OwnerStateProps<Pick<ButtonProps, "variant">>>(({ theme, ownerState }) => ({
  marginEnd: theme.spacing(1),
  marginStart: ownerState.variant === "text" ? 0 : -theme.spacing(1),
}))

const ButtonLabel = styled(Text, {
  name: "Button",
  slot: "Label",
})(({ theme }) => ({
  ...theme.typescale["label-large"],
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
          ? theme.color.primary
          : variant === "filled"
          ? theme.color["on-primary"]
          : variant === "tonal"
          ? theme.color["on-secondary-container"]
          : variant === "outlined"
          ? theme.color.primary
          : variant === "text"
          ? theme.color.primary
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
