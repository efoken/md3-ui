import { Theme } from "@md3-ui/theme"
import * as React from "react"
import {
  FlexStyle as RNFlexStyle,
  TextStyle as RNTextStyle,
  TransformsStyle as RNTransformsStyle,
  ViewStyle as RNViewStyle,
} from "react-native"

export interface BackgroundProps {
  backgroundColor?: keyof Theme["color"] | (string & {})
  bgColor?: keyof Theme["color"] | (string & {})
}

export interface BorderProps {
  borderStyle?: RNViewStyle["borderStyle"]
  borderColor?: keyof Theme["color"] | (string & {})
  borderTopColor?: keyof Theme["color"] | (string & {})
  borderRightColor?: keyof Theme["color"] | (string & {})
  borderBottomColor?: keyof Theme["color"] | (string & {})
  borderLeftColor?: keyof Theme["color"] | (string & {})
  borderStartColor?: keyof Theme["color"] | (string & {})
  borderEndColor?: keyof Theme["color"] | (string & {})
  borderRadius?: RNViewStyle["borderRadius"]
  borderTopRadius?: number
  borderRightRadius?: number
  borderBottomRadius?: number
  borderLeftRadius?: number
  borderStartRadius?: number
  borderEndRadius?: number
  borderTopLeftRadius?: RNViewStyle["borderTopLeftRadius"]
  borderTopRightRadius?: RNViewStyle["borderTopRightRadius"]
  borderTopStartRadius?: RNViewStyle["borderTopStartRadius"]
  borderTopEndRadius?: RNViewStyle["borderTopEndRadius"]
  borderBottomLeftRadius?: RNViewStyle["borderBottomLeftRadius"]
  borderBottomRightRadius?: RNViewStyle["borderBottomRightRadius"]
  borderBottomStartRadius?: RNViewStyle["borderBottomStartRadius"]
  borderBottomEndRadius?: RNViewStyle["borderBottomEndRadius"]
  borderWidth?: RNViewStyle["borderWidth"]
  borderTopWidth?: RNViewStyle["borderTopWidth"]
  borderRightWidth?: RNViewStyle["borderRightWidth"]
  borderBottomWidth?: RNViewStyle["borderBottomWidth"]
  borderLeftWidth?: RNViewStyle["borderLeftWidth"]
  borderStartWidth?: RNFlexStyle["borderStartWidth"]
  borderEndWidth?: RNFlexStyle["borderEndWidth"]
}

export interface DisplayProps {
  display?: RNFlexStyle["display"]
  overflow?: RNFlexStyle["overflow"]
  /** @platform web */
  visibility?: React.CSSProperties["visibility"]
}

export interface ElevationProps {
  elevation?: keyof Theme["elevation"]
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
  margin?: number | "auto" | (string & {})
  marginTop?: number | "auto" | (string & {})
  marginRight?: number | "auto" | (string & {})
  marginBottom?: number | "auto" | (string & {})
  marginLeft?: number | "auto" | (string & {})
  marginStart?: number | "auto" | (string & {})
  marginEnd?: number | "auto" | (string & {})
  marginHorizontal?: number | "auto" | (string & {})
  marginVertical?: number | "auto" | (string & {})
  marginX?: number | "auto" | (string & {})
  marginY?: number | "auto" | (string & {})
  m?: number | "auto" | (string & {})
  mt?: number | "auto" | (string & {})
  mr?: number | "auto" | (string & {})
  mb?: number | "auto" | (string & {})
  ml?: number | "auto" | (string & {})
  ms?: number | "auto" | (string & {})
  me?: number | "auto" | (string & {})
  mx?: number | "auto" | (string & {})
  my?: number | "auto" | (string & {})
}

export interface TransformProps {
  transform?: RNTransformsStyle["transform"]
}

export interface TransitionProps {
  /** @platform web */
  transition?: React.CSSProperties["transition"]
  /** @platform web */
  transitionDelay?: React.CSSProperties["transitionDelay"]
  /** @platform web */
  transitionDuration?: React.CSSProperties["transitionDuration"]
  /** @platform web */
  transitionProperty?: React.CSSProperties["transitionProperty"]
  /** @platform web */
  transitionTimingFunction?: React.CSSProperties["transitionTimingFunction"]
  /** @platform web */
  willChange?: React.CSSProperties["willChange"]
  /** @platform web */
  animation?: React.CSSProperties["animation"]
}

export interface TypographyProps {
  color?: keyof Theme["color"] | (string & {})
  fontSize?: RNTextStyle["fontSize"]
  fontStyle?: RNTextStyle["fontStyle"]
  fontVariant?: RNTextStyle["fontVariant"]
  fontWeight?: keyof Theme["typeface"]["weight"] | RNTextStyle["fontWeight"]
  lineHeight?: RNTextStyle["lineHeight"]
  textAlign?: RNTextStyle["textAlign"]
  textAlignVertical?: RNTextStyle["textAlignVertical"]
  textDecorationLine?: RNTextStyle["textDecorationLine"]
  textDecorationStyle?: RNTextStyle["textDecorationStyle"]
  textDecorationColor?: keyof Theme["color"] | (string & {})
  textShadowColor?: keyof Theme["color"] | (string & {})
  textShadowOffset?: RNTextStyle["textShadowOffset"]
  textShadowRadius?: RNTextStyle["textShadowRadius"]
  textTransform?: RNTextStyle["textTransform"]
}
