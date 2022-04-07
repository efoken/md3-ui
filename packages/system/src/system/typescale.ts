import { compose, style } from "../style"
import { TypescaleProps } from "./types"

const color = style({
  prop: "color",
  themeKey: "color",
})

const fontSize = style({
  prop: "fontSize",
})

const lineHeight = style({
  prop: "lineHeight",
})

const textAlign = style({
  prop: "textAlign",
})

const textDecorationLine = style({
  prop: "textDecorationLine",
})

const textDecorationStyle = style({
  prop: "textDecorationStyle",
})

const textDecorationColor = style({
  prop: "textDecorationColor",
  themeKey: "color",
})

const textShadowColor = style({
  prop: "textShadowColor",
  themeKey: "color",
})

const textShadowOffset = style({
  prop: "textShadowOffset",
})

const textShadowRadius = style({
  prop: "textShadowRadius",
})

const textTransform = style({
  prop: "textTransform",
})

export const typescale = compose<keyof TypescaleProps>(
  color,
  fontSize,
  lineHeight,
  textAlign,
  textDecorationLine,
  textDecorationStyle,
  textDecorationColor,
  textShadowColor,
  textShadowOffset,
  textShadowRadius,
  textTransform,
)
