import * as React from "react"
import {
  FlexStyle as RNFlexStyle,
  TextStyle as RNTextStyle,
  TransformsStyle as RNTransformsStyle,
  ViewStyle as RNViewStyle,
} from "react-native"

export interface BackgroundProps {
  backgroundColor?: string
  bgColor?: string
}

export interface BorderProps {
  borderStyle?: RNViewStyle["borderStyle"]
  borderColor?: string
  borderTopColor?: string
  borderRightColor?: string
  borderBottomColor?: string
  borderLeftColor?: string
  borderStartColor?: string
  borderEndColor?: string
  borderRadius?: number
  borderTopRadius?: number
  borderRightRadius?: number
  borderBottomRadius?: number
  borderLeftRadius?: number
  borderStartRadius?: number
  borderEndRadius?: number
  borderTopLeftRadius?: number
  borderTopRightRadius?: number
  borderTopStartRadius?: number
  borderTopEndRadius?: number
  borderBottomLeftRadius?: number
  borderBottomRightRadius?: number
  borderBottomStartRadius?: number
  borderBottomEndRadius?: number
  borderWidth?: RNViewStyle["borderWidth"]
  borderTopWidth?: number
  borderRightWidth?: number
  borderBottomWidth?: number
  borderLeftWidth?: number
  borderStartWidth?: number
  borderEndWidth?: number
}

export interface DisplayProps {
  display?: RNFlexStyle["display"]
  overflow?: RNFlexStyle["overflow"]
  visibility?: React.CSSProperties["visibility"]
}

export interface ElevationProps {
  elevation?: number
}

export interface FlexboxProps {
  alignContent?: RNFlexStyle["alignContent"]
  alignItems?: RNFlexStyle["alignItems"]
  alignSelf?: RNFlexStyle["alignSelf"]
  flex?: RNFlexStyle["flex"]
  flexBasis?: RNFlexStyle["flexBasis"]
  flexDirection?: RNFlexStyle["flexDirection"]
  flexGrow?: RNFlexStyle["flexGrow"]
  flexShrink?: RNFlexStyle["flexShrink"]
  flexWrap?: RNFlexStyle["flexWrap"]
  justifyContent?: RNFlexStyle["justifyContent"]
}

export interface PositionProops {
  position?: RNFlexStyle["position"]
  zIndex?: RNFlexStyle["zIndex"]
  top?: RNFlexStyle["top"]
  right?: RNFlexStyle["right"]
  bottom?: RNFlexStyle["bottom"]
  left?: RNFlexStyle["left"]
  start?: RNFlexStyle["start"]
  end?: RNFlexStyle["end"]
}

export interface SizingProps {
  width?: RNFlexStyle["width"]
  maxWidth?: RNFlexStyle["maxWidth"]
  minWidth?: RNFlexStyle["minWidth"]
  height?: RNFlexStyle["height"]
  maxHeight?: RNFlexStyle["maxHeight"]
  minHeight?: RNFlexStyle["minHeight"]
  size?: string | number
  aspectRatio?: RNFlexStyle["aspectRatio"]
}

export interface SpacingProps {
  padding?: number
  paddingTop?: number
  paddingRight?: number
  paddingBottom?: number
  paddingLeft?: number
  paddingStart?: number
  paddingEnd?: number
  paddingHorizontal?: number
  paddingVertical?: number
  paddingX?: number
  paddingY?: number
  p?: number
  pt?: number
  pr?: number
  pb?: number
  pl?: number
  ps?: number
  pe?: number
  px?: number
  py?: number
  margin?: number | "auto"
  marginTop?: number | "auto"
  marginRight?: number | "auto"
  marginBottom?: number | "auto"
  marginLeft?: number | "auto"
  marginStart?: number | "auto"
  marginEnd?: number | "auto"
  marginHorizontal?: number | "auto"
  marginVertical?: number | "auto"
  marginX?: number | "auto"
  marginY?: number | "auto"
  m?: number | "auto"
  mt?: number | "auto"
  mr?: number | "auto"
  mb?: number | "auto"
  ml?: number | "auto"
  ms?: number | "auto"
  me?: number | "auto"
  mx?: number | "auto"
  my?: number | "auto"
}

export interface TransformProps {
  transform?: RNTransformsStyle["transform"]
}

export interface TypescaleProps {
  color?: RNTextStyle["color"]
  fontSize?: RNTextStyle["fontSize"]
  lineHeight?: RNTextStyle["lineHeight"]
  textAlign?: RNTextStyle["textAlign"]
  textDecorationLine?: RNTextStyle["textDecorationLine"]
  textDecorationStyle?: RNTextStyle["textDecorationStyle"]
  textDecorationColor?: RNTextStyle["textDecorationColor"]
  textShadowColor?: RNTextStyle["textShadowColor"]
  textShadowOffset?: RNTextStyle["textShadowOffset"]
  textShadowRadius?: RNTextStyle["textShadowRadius"]
  textTransform?: RNTextStyle["textTransform"]
}
