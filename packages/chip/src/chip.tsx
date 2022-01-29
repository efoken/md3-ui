import { ButtonBase, ButtonBaseProps } from "@md3-ui/button"
import { Text } from "@md3-ui/layout"
import { OwnerStateProps, styled, useThemeProps } from "@md3-ui/styles"
import * as React from "react"
import {
  TextStyle as RNTextStyle,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"

export interface ChipProps extends ButtonBaseProps {
  icon?: React.ReactElement
  label?: string
  styles?: {
    root?: RNViewStyle
    icon?: RNViewStyle
    label?: RNTextStyle
  }
  /** @default "assist" */
  variant?: "assist" | "filter" | "input" | "suggestion"
}

export type ChipStyleKey = keyof NonNullable<ChipProps["styles"]>

const ChipRoot = styled(ButtonBase, {
  name: "Chip",
  slot: "Root",
})<OwnerStateProps<Pick<ChipProps, "variant">>>(({ theme }) => ({
  ...theme.elevation.level0,
  alignItems: "center",
  backgroundColor: theme.color.surface,
  borderColor: theme.color.outline,
  borderRadius: 8,
  borderWidth: 1,
  flexDirection: "row",
  height: 32,
  paddingHorizontal: theme.spacing(2) - 1,
}))

const ChipIcon = styled(RNView, {
  name: "Chip",
  slot: "Icon",
})<OwnerStateProps<Pick<ChipProps, "variant">>>(({ theme }) => ({
  marginEnd: theme.spacing(1),
  marginStart: -theme.spacing(1),
}))

const ChipLabel = styled(Text, {
  name: "Chip",
  slot: "Label",
})<OwnerStateProps<Pick<ChipProps, "variant">>>(({ theme, ownerState }) => ({
  ...theme.typescale["label-large"],
  color:
    ownerState.variant === "assist"
      ? theme.color["on-surface"]
      : ownerState.variant === "filter"
      ? theme.color["on-surface-variant"]
      : ownerState.variant === "input"
      ? theme.color["on-surface-variant"]
      : ownerState.variant === "suggestion"
      ? theme.color["on-surface-variant"]
      : undefined,
}))

export const Chip = React.forwardRef<RNView, ChipProps>((inProps, ref) => {
  const {
    children,
    icon,
    label,
    style,
    styles,
    variant = "assist",
    ...props
  } = useThemeProps({
    name: "Text",
    props: inProps,
  })

  const ownerState = {
    variant,
  }

  return (
    <ChipRoot
      ref={ref}
      ownerState={ownerState}
      style={[style, styles?.root]}
      {...props}
    >
      <>
        {icon && (
          <ChipIcon ownerState={ownerState} style={styles?.icon}>
            {React.cloneElement(icon, {
              size: 18,
            })}
          </ChipIcon>
        )}
        <ChipLabel ownerState={ownerState} style={styles?.label}>
          {label}
        </ChipLabel>
      </>
    </ChipRoot>
  )
})
