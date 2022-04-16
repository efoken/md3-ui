import { compose, style } from "../style"
import { TypographyProps } from "./types"

const color = style({
  prop: "color",
  themeKey: "color",
})

const fontSize = style({
  prop: "fontSize",
})

const fontStyle = style({
  prop: "fontStyle",
})

const fontVariant = style({
  prop: "fontVariant",
})

const fontWeight = style({
  prop: "fontWeight",
  themeKey: "typeface.weight" as any,
})

const lineHeight = style({
  prop: "lineHeight",
})

const textAlign = style({
  prop: "textAlign",
})

const textAlignVertical = style({
  prop: "textAlignVertical",
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

export const typography = compose<TypographyProps>(
  color,
  fontSize,
  fontStyle,
  fontVariant,
  fontWeight,
  lineHeight,
  textAlign,
  textAlignVertical,
  textDecorationLine,
  textDecorationStyle,
  textDecorationColor,
  textShadowColor,
  textShadowOffset,
  textShadowRadius,
  textTransform,
)
