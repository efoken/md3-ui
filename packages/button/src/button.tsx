import { Text, TextProvider } from "@md3-ui/layout"
import {
  OwnerStateProps,
  styled,
  SxProps,
  useTheme,
  useThemeProps,
} from "@md3-ui/styles"
import * as React from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { ButtonBase, ButtonBaseProps } from "./button-base"

export interface ButtonProps extends ButtonBaseProps {
  children?: React.ReactNode
  /** @default false */
  disabled?: boolean
  icon?: React.ReactElement
  styles?: {
    root?: ViewStyle
    icon?: ViewStyle
    label?: TextStyle
  }
  sx?: SxProps
  /** @default "elevated" */
  variant?: "elevated" | "filled" | "tonal" | "outlined" | "text"
}

export type ButtonStyleKey = keyof NonNullable<ButtonProps["styles"]>

const ButtonRoot = styled(ButtonBase, {
  name: "Button",
  slot: "Root",
})<OwnerStateProps<Pick<ButtonProps, "disabled" | "variant">>>(
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

        ":hover": {
          ...theme.elevation.level2,
        },
      }),

      ...(ownerState.variant === "filled" && {
        ...theme.elevation.level0,
        backgroundColor: theme.color.primary,

        ":hover": {
          ...theme.elevation.level1,
        },
      }),

      ...(ownerState.variant === "tonal" && {
        ...theme.elevation.level0,
        backgroundColor: theme.color["secondary-container"],

        ":hover": {
          ...theme.elevation.level1,
        },
      }),

      ...(ownerState.variant === "outlined" && {
        ...theme.elevation.level0,
        backgroundColor: "rgba(255, 255, 255, 0)",
        borderColor: theme.color.outline,
        borderWidth: 1,
        paddingHorizontal: theme.spacing(3) - 1,

        ":focus": {
          borderColor: theme.color.primary,
        },
      }),

      ...(ownerState.variant === "text" && {
        ...theme.elevation.level0,
        minWidth: 48,
        paddingHorizontal: theme.spacing(1.5),
      }),
    },
  ]
)

const ButtonIcon = styled(View, {
  name: "Button",
  slot: "Icon",
})(({ theme }) => ({
  marginLeft: -theme.spacing(1),
  marginRight: theme.spacing(1),
}))

const ButtonContent = styled(TextProvider, {
  name: "Button",
  slot: "Content",
})<OwnerStateProps<Pick<ButtonProps, "disabled" | "variant">>>(
  ({ theme, ownerState }) => ({
    color:
      ownerState.variant === "elevated"
        ? theme.color.primary
        : ownerState.variant === "filled"
        ? theme.color["on-primary"]
        : ownerState.variant === "tonal"
        ? theme.color["on-secondary-container"]
        : ownerState.variant === "outlined"
        ? theme.color.primary
        : ownerState.variant === "text"
        ? theme.color.primary
        : "inherit",
  })
)

const ButtonLabel = styled(Text, {
  name: "Button",
  slot: "Label",
})<OwnerStateProps<Pick<ButtonProps, "disabled" | "variant">>>(({ theme }) => ({
  ...theme.typescale["label-large"],
  textAlign: "center",
}))

export const Button = React.forwardRef<View, ButtonProps>((inProps, ref) => {
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

  const ownerState = {
    disabled,
    variant,
  }

  return (
    <ButtonRoot
      ref={ref}
      hoverColor={
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
      ownerState={ownerState}
      pressedColor={
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
      style={[style, styles?.root]}
      {...props}
    >
      <ButtonContent ownerState={ownerState}>
        {icon && (
          <ButtonIcon style={styles?.icon}>
            {React.cloneElement(icon, {
              size: 18,
            })}
          </ButtonIcon>
        )}
        <ButtonLabel ownerState={ownerState} style={styles?.label}>
          {children}
        </ButtonLabel>
      </ButtonContent>
    </ButtonRoot>
  )
})
