import { styled, SxProps, useThemeProps } from "@md3-ui/system"
import { OverridableComponent, OverrideProps } from "@md3-ui/utils"
import * as React from "react"
import {
  Image as RNImage,
  ImageSourcePropType,
  ImageStyle as RNImageStyle,
} from "react-native"

export interface CardMediaTypeMap<
  P = {},
  C extends React.ElementType = typeof RNImage,
> {
  props: P & {
    children?: React.ReactNode
    styles?: {
      root?: RNImageStyle
    }
    source: ImageSourcePropType
    sx?: SxProps
  }
  defaultAs: C
}

export type CardMediaProps<
  C extends React.ElementType = CardMediaTypeMap["defaultAs"],
  P = {},
> = OverrideProps<CardMediaTypeMap<P, C>, C>

export type CardContentStyleKey = keyof NonNullable<CardMediaProps["styles"]>

const CardContentRoot = styled(RNImage, {
  name: "CardMedia",
  slot: "Root",
})(() => ({
  resizeMode: "cover",
  width: "100%",
}))

export const CardMedia = React.forwardRef<RNImage, CardMediaProps>(
  (inProps, ref) => {
    const { style, styles, ...props } = useThemeProps({
      name: "CardMedia",
      props: inProps,
    })

    return (
      <CardContentRoot ref={ref} style={[style, styles?.root]} {...props} />
    )
  },
) as OverridableComponent<CardMediaTypeMap>
