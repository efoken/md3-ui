import { compose, style } from "../create-style"
import { TypescaleProps } from "./types"

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
  textAlign,
  textDecorationLine,
  textDecorationStyle,
  textDecorationColor,
  textShadowColor,
  textShadowOffset,
  textShadowRadius,
  textTransform,
)
