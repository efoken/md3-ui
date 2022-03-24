import {
  OverridableComponent,
  OverrideProps,
  OwnerStateProps,
  styled,
  SxProps,
  useThemeProps,
} from "@md3-ui/system"
import { __DEV__ } from "@md3-ui/utils"
import * as React from "react"
import { View as RNView, ViewStyle as RNViewStyle } from "react-native"

export interface CardTypeMap<
  P = {},
  C extends React.ElementType = typeof RNView,
> {
  props: P & {
    /**
     * The content of the component.
     */
    children?: React.ReactNode
    /**
     * Override or extend the styles applied to the component.
     */
    styles?: {
      root?: RNViewStyle
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
    variant?: "elevated" | "filled" | "outlined"
  }
  defaultAs: C
}

export type CardProps<
  C extends React.ElementType = CardTypeMap["defaultAs"],
  P = {},
> = OverrideProps<CardTypeMap<P, C>, C>

export type CardStyleKey = keyof NonNullable<CardProps["styles"]>

const CardRoot = styled(RNView, {
  name: "Card",
  slot: "Root",
})<OwnerStateProps<Pick<CardProps, "variant">>>(({ theme, ownerState }) => ({
  borderRadius: 12,
  overflow: "hidden",

  ...(ownerState.variant === "elevated" && {
    ...theme.elevation.level1,
    backgroundColor: theme.color.surface,
  }),

  ...(ownerState.variant === "filled" && {
    ...theme.elevation.level0,
    backgroundColor: theme.color["surface-variant"],
  }),

  ...(ownerState.variant === "outlined" && {
    ...theme.elevation.level0,
    backgroundColor: theme.color.surface,
    borderColor: theme.color.outline,
    borderWidth: 1,
  }),
}))

export const Card = React.forwardRef<RNView, CardProps>((inProps, ref) => {
  const {
    style,
    styles,
    variant = "elevated",
    ...props
  } = useThemeProps({
    name: "Card",
    props: inProps,
  })

  const ownerState = {
    variant,
  }

  return (
    <CardRoot
      ref={ref}
      ownerState={ownerState}
      style={[style, styles?.root]}
      {...props}
    />
  )
}) as OverridableComponent<CardTypeMap>

if (__DEV__) {
  Card.displayName = "Card"
}
