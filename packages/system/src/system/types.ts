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
  borderWidth?: RNViewStyle["borderWidth"]
  borderRadius?: number
  borderTopColor?: string
  borderTopRadius?: number
  borderTopWidth?: number
  borderRightColor?: string
  borderRightRadius?: number
  borderRightWidth?: number
  borderBottomColor?: string
  borderBottomRadius?: number
  borderBottomWidth?: number
  borderColor?: string
  borderLeftColor?: string
  borderLeftRadius?: number
  borderLeftWidth?: number
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
