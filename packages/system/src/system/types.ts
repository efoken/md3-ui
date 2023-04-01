import { Theme } from "@md3-ui/theme"
import * as React from "react"
import {
  FlexStyle as RNFlexStyle,
  TextStyle as RNTextStyle,
  ViewStyle as RNViewStyle,
} from "react-native"

export interface BackgroundProps {
  backgroundColor?: keyof Theme["sys"]["color"] | (string & {})
  bgColor?: keyof Theme["sys"]["color"] | (string & {})
}

export interface BorderProps {
  borderStyle?: RNViewStyle["borderStyle"]
  borderColor?: keyof Theme["sys"]["color"] | (string & {})
  borderTopColor?: keyof Theme["sys"]["color"] | (string & {})
  borderRightColor?: keyof Theme["sys"]["color"] | (string & {})
  borderBottomColor?: keyof Theme["sys"]["color"] | (string & {})
  borderLeftColor?: keyof Theme["sys"]["color"] | (string & {})
  borderStartColor?: keyof Theme["sys"]["color"] | (string & {})
  borderEndColor?: keyof Theme["sys"]["color"] | (string & {})
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
  elevation?: keyof Theme["sys"]["elevation"]
}

export interface FlexboxProps {
  gap?: RNFlexStyle["gap"]
  columnGap?: RNFlexStyle["columnGap"]
  rowGap?: RNFlexStyle["rowGap"]
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

export interface InteractivityProps {
  /** @platform web */
  cursor?: React.CSSProperties["cursor"]
  pointerEvents?: RNViewStyle["pointerEvents"]
  userSelect?: RNViewStyle["userSelect"]
  /** @platform web */
  outlineStyle?: React.CSSProperties["outlineStyle"]
  /** @platform web */
  outlineColor?: React.CSSProperties["outlineColor"]
  /** @platform web */
  outlineOffset?: React.CSSProperties["outlineOffset"]
  /** @platform web */
  outlineWidth?: React.CSSProperties["outlineWidth"]
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
  transform?: string
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
}

export interface TypographyProps {
  color?: keyof Theme["sys"]["color"] | (string & {})
  fontSize?: RNTextStyle["fontSize"]
  fontStyle?: RNTextStyle["fontStyle"]
  fontVariant?: RNTextStyle["fontVariant"]
  fontWeight?:
    | Exclude<keyof Theme["ref"]["typeface"], "brand" | "plain">
    | RNTextStyle["fontWeight"]
  lineHeight?: RNTextStyle["lineHeight"]
  textAlign?: RNTextStyle["textAlign"]
  textAlignVertical?: RNTextStyle["textAlignVertical"]
  textDecorationLine?: RNTextStyle["textDecorationLine"]
  textDecorationStyle?: RNTextStyle["textDecorationStyle"]
  textDecorationColor?: keyof Theme["sys"]["color"] | (string & {})
  textShadowColor?: keyof Theme["sys"]["color"] | (string & {})
  textShadowRadius?: RNTextStyle["textShadowRadius"]
  textTransform?: RNTextStyle["textTransform"]
}
