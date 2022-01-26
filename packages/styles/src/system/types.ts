import {
  FlexStyle as RNFlexStyle,
  TextStyle as RNTextStyle,
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
}

export interface SpacingProps {
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

export interface TypescaleProps {
  textAlign?: RNTextStyle["textAlign"]
  textDecorationLine?: RNTextStyle["textDecorationLine"]
  textDecorationStyle?: RNTextStyle["textDecorationStyle"]
  textDecorationColor?: RNTextStyle["textDecorationColor"]
  textShadowColor?: RNTextStyle["textShadowColor"]
  textShadowOffset?: RNTextStyle["textShadowOffset"]
  textShadowRadius?: RNTextStyle["textShadowRadius"]
  textTransform?: RNTextStyle["textTransform"]
}
