import { styled, SxProps, useThemeProps } from "@md3-ui/system"
import { OverridableComponent, OverrideProps } from "@md3-ui/utils"
import * as React from "react"
import { View as RNView, ViewStyle as RNViewStyle } from "react-native"

export interface CardActionsTypeMap<
  P = {},
  C extends React.ElementType = typeof RNView,
> {
  props: P & {
    children?: React.ReactNode
    styles?: {
      root?: RNViewStyle
    }
    sx?: SxProps
  }
  defaultAs: C
}

export type CardActionsProps<
  C extends React.ElementType = CardActionsTypeMap["defaultAs"],
  P = {},
> = OverrideProps<CardActionsTypeMap<P, C>, C>

export type CardActionsStyleKey = keyof NonNullable<CardActionsProps["styles"]>

const CardActionsRoot = styled(RNView, {
  name: "CardActions",
  slot: "Root",
})(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "flex-end",
  paddingBottom: theme.spacing(2),
  paddingHorizontal: theme.spacing(2),
}))

export const CardActions = React.forwardRef<RNView, CardActionsProps>(
  (inProps, ref) => {
    const { style, styles, ...props } = useThemeProps({
      name: "CardActions",
      props: inProps,
    })

    return (
      <CardActionsRoot ref={ref} style={[style, styles?.root]} {...props} />
    )
  },
) as OverridableComponent<CardActionsTypeMap>
