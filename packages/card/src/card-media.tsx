import {
  OverridableComponent,
  OverrideProps,
  styled,
  StylesProp,
  SxProps,
  useThemeProps,
} from "@md3-ui/system"
import { forwardRef } from "react"
import {
  ImageSourcePropType,
  Image as RNImage,
  ImageStyle as RNImageStyle,
} from "react-native"

export interface CardMediaTypeMap<
  P = {},
  C extends React.ElementType = typeof RNImage,
> {
  props: P & {
    /**
     * The content of the component.
     */
    children?: React.ReactNode
    /**
     * Override or extend the styles applied to the component.
     */
    styles?: StylesProp<{
      root?: RNImageStyle
    }>
    source: ImageSourcePropType
    /**
     * The system prop that allows defining system overrides as well as
     * additional styles.
     */
    sx?: SxProps
  }
  defaultAs: C
}

export type CardMediaProps<
  C extends React.ElementType = CardMediaTypeMap["defaultAs"],
  P = {},
> = OverrideProps<CardMediaTypeMap<P, C>, C>

export type CardMediaStyleKey = keyof NonNullable<CardMediaProps["styles"]>

const CardContentRoot = styled(RNImage, {
  name: "CardMedia",
  slot: "Root",
})({
  borderRadius: 12,
  objectFit: "cover",
  width: "100%",
})

export const CardMedia = forwardRef<RNImage, CardMediaProps>((inProps, ref) => {
  const { style, styles, ...props } = useThemeProps({
    name: "CardMedia",
    props: inProps,
  })

  return <CardContentRoot ref={ref} style={[style, styles?.root]} {...props} />
}) as OverridableComponent<CardMediaTypeMap>

CardMedia.displayName = "CardMedia"
