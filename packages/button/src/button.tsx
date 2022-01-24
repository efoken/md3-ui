import { TextProvider, Text } from "@md3-ui/layout"
import {
  OwnerStateProps,
  styled,
  useTheme,
  useThemeProps,
} from "@md3-ui/styles"
import * as React from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { ButtonBase, ButtonBaseProps } from "./button-base"

export interface ButtonProps extends ButtonBaseProps {
  children?: React.ReactNode
  icon?: React.ReactElement
  styles?: {
    root?: ViewStyle
    icon?: ViewStyle
    label?: TextStyle
  }
  /** @default "elevated" */
  variant?: "elevated" | "filled" | "tonal" | "outlined" | "text"
}

export type ButtonStyleKey = keyof NonNullable<ButtonProps["styles"]>

const ButtonRoot = styled(ButtonBase, {
  name: "Button",
  slot: "Root",
})<OwnerStateProps<Pick<ButtonProps, "variant">>>(({ ownerState, theme }) => [
  {
    alignItems: "center",
    borderRadius: 20,
    flexDirection: "row",
    height: 40,
    paddingHorizontal: theme.spacing(3),

    ...(ownerState.variant === "elevated" && {
      ...theme.elevation[1],
      backgroundColor: theme.color.surface.main,

      ":hover": {
        ...theme.elevation[2],
      },
    }),

    ...(ownerState.variant === "filled" && {
      ...theme.elevation[0],
      backgroundColor: theme.color.primary.main,

      ":hover": {
        ...theme.elevation[1],
      },
    }),

    ...(ownerState.variant === "tonal" && {
      ...theme.elevation[0],
      backgroundColor: theme.color.secondary.container,

      ":hover": {
        ...theme.elevation[1],
      },
    }),

    ...(ownerState.variant === "outlined" && {
      ...theme.elevation[0],
      backgroundColor: "transparent",
      borderColor: theme.color.outline,
      borderWidth: 1,
      paddingHorizontal: theme.spacing(3) - 1,

      ":focus": {
        borderColor: theme.color.primary.main,
      },
    }),

    ...(ownerState.variant === "text" && {
      ...theme.elevation[0],
      minWidth: 48,
      paddingHorizontal: theme.spacing(1.5),
    }),
  },
])

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
})<OwnerStateProps<Pick<ButtonProps, "variant">>>(({ theme, ownerState }) => ({
  color:
    ownerState.variant === "elevated"
      ? theme.color.primary.main
      : ownerState.variant === "filled"
      ? theme.color.primary["on-main"]
      : ownerState.variant === "tonal"
      ? theme.color.secondary["on-container"]
      : ownerState.variant === "outlined"
      ? theme.color.primary.main
      : ownerState.variant === "text"
      ? theme.color.primary.main
      : "inherit",
}))

const ButtonLabel = styled(Text, {
  name: "Button",
  slot: "Label",
})<OwnerStateProps<Pick<ButtonProps, "variant">>>(({ theme }) => ({
  ...theme.typescale["label-large"],
  textAlign: "center",
}))

export const Button = React.forwardRef<View, ButtonProps>((inProps, ref) => {
  const {
    children,
    icon,
    style,
    styles,
    variant = "elevated",
    ...props
  } = useThemeProps({ name: "Button", props: inProps })

  const theme = useTheme()

  const ownerState = {
    variant,
  }

  return (
    <ButtonRoot
      ref={ref}
      hoverColor={
        variant === "elevated"
          ? theme.color.primary.main
          : variant === "filled"
          ? theme.color.primary["on-main"]
          : variant === "tonal"
          ? theme.color.secondary["on-container"]
          : variant === "outlined"
          ? theme.color.primary.main
          : variant === "text"
          ? theme.color.primary.main
          : undefined
      }
      ownerState={ownerState}
      pressedColor={
        variant === "elevated"
          ? theme.color.primary.main
          : variant === "filled"
          ? theme.color.primary["on-main"]
          : variant === "tonal"
          ? theme.color.secondary["on-container"]
          : variant === "outlined"
          ? theme.color.primary.main
          : variant === "text"
          ? theme.color.primary.main
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
