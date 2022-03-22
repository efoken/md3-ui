import { styled, SxProps, useThemeProps } from "@md3-ui/system"
import { OverridableComponent, OverrideProps } from "@md3-ui/utils"
import * as React from "react"
import { View as RNView, ViewStyle as RNViewStyle } from "react-native"

export interface CardContentTypeMap<
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

export type CardContentProps<
  C extends React.ElementType = CardContentTypeMap["defaultAs"],
  P = {},
> = OverrideProps<CardContentTypeMap<P, C>, C>

export type CardContentStyleKey = keyof NonNullable<CardContentProps["styles"]>

const CardContentRoot = styled(RNView, {
  name: "CardContent",
  slot: "Root",
})(({ theme }) => ({
  padding: theme.spacing(2),
}))

export const CardContent = React.forwardRef<RNView, CardContentProps>(
  (inProps, ref) => {
    const { style, styles, ...props } = useThemeProps({
      name: "CardContent",
      props: inProps,
    })

    return (
      <CardContentRoot ref={ref} style={[style, styles?.root]} {...props} />
    )
  },
) as OverridableComponent<CardContentTypeMap>