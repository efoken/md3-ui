import { FlexStyle, ViewStyle } from "react-native"

export type BackgroundProps = {
  backgroundColor?: string
  bgColor?: string
}

export type BorderProps = {
  borderStyle?: ViewStyle["borderStyle"]
  borderWidth?: ViewStyle["borderWidth"]
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

export type DisplayProps = {
  display?: FlexStyle["display"]
  overflow?: FlexStyle["overflow"]
}

export type FlexboxProps = {
  alignContent?: FlexStyle["alignContent"]
  alignItems?: FlexStyle["alignItems"]
  alignSelf?: FlexStyle["alignSelf"]
  flex?: FlexStyle["flex"]
  flexBasis?: FlexStyle["flexBasis"]
  flexDirection?: FlexStyle["flexDirection"]
  flexGrow?: FlexStyle["flexGrow"]
  flexShrink?: FlexStyle["flexShrink"]
  flexWrap?: FlexStyle["flexWrap"]
  justifyContent?: FlexStyle["justifyContent"]
}

export type PositionProops = {
  position?: FlexStyle["position"]
  zIndex?: FlexStyle["zIndex"]
  top?: FlexStyle["top"]
  right?: FlexStyle["right"]
  bottom?: FlexStyle["bottom"]
  left?: FlexStyle["left"]
}

export type SizingProps = {
  width?: FlexStyle["width"]
  maxWidth?: FlexStyle["maxWidth"]
  minWidth?: FlexStyle["minWidth"]
  height?: FlexStyle["height"]
  maxHeight?: FlexStyle["maxHeight"]
  minHeight?: FlexStyle["minHeight"]
  size?: string | number
}

export type SpacingProps = {
  padding?: number
  paddingTop?: number
  paddingRight?: number
  paddingBottom?: number
  paddingLeft?: number
  paddingStart?: number
  paddingEnd?: number
  paddingX?: number
  paddingY?: number
  margin?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  marginStart?: number
  marginEnd?: number
  marginX?: number
  marginY?: number
}
