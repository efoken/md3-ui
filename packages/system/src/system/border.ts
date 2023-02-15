import { createPaletteStyle } from "../create-palette-style"
import { compose, style } from "../style"
import { BorderProps } from "./types"

const borderStyle = style({
  prop: "borderStyle",
})

const borderColor = createPaletteStyle({
  prop: "borderColor",
})

const borderTopColor = createPaletteStyle({
  prop: "borderTopColor",
})

const borderRightColor = createPaletteStyle({
  prop: "borderRightColor",
})

const borderBottomColor = createPaletteStyle({
  prop: "borderBottomColor",
})

const borderLeftColor = createPaletteStyle({
  prop: "borderLeftColor",
})

const borderStartColor = createPaletteStyle({
  prop: "borderStartColor",
})

const borderEndColor = createPaletteStyle({
  prop: "borderEndColor",
})

const borderRadius = style({
  prop: "borderRadius",
})

const borderTopRadius = style({
  prop: "borderTopRadius",
  styleProp: ["borderTopLeftRadius", "borderTopRightRadius"],
})

const borderRightRadius = style({
  prop: "borderRightRadius",
  styleProp: ["borderTopRightRadius", "borderBottomRightRadius"],
})

const borderBottomRadius = style({
  prop: "borderBottomRadius",
  styleProp: ["borderBottomLeftRadius", "borderBottomRightRadius"],
})

const borderLeftRadius = style({
  prop: "borderLeftRadius",
  styleProp: ["borderTopLeftRadius", "borderBottomLeftRadius"],
})

const borderStartRadius = style({
  prop: "borderStartRadius",
  styleProp: ["borderTopStartRadius", "borderBottomStartRadius"],
})

const borderEndRadius = style({
  prop: "borderEndRadius",
  styleProp: ["borderTopEndRadius", "borderBottomEndRadius"],
})

const borderTopLeftRadius = style({
  prop: "borderTopLeftRadius",
})

const borderTopRightRadius = style({
  prop: "borderTopRightRadius",
})

const borderTopStartRadius = style({
  prop: "borderTopStartRadius",
})

const borderTopEndRadius = style({
  prop: "borderTopEndRadius",
})

const borderBottomLeftRadius = style({
  prop: "borderBottomLeftRadius",
})

const borderBottomRightRadius = style({
  prop: "borderBottomRightRadius",
})

const borderBottomStartRadius = style({
  prop: "borderBottomStartRadius",
})

const borderBottomEndRadius = style({
  prop: "borderBottomEndRadius",
})

const borderWidth = style({
  prop: "borderWidth",
})

const borderTopWidth = style({
  prop: "borderTopWidth",
})

const borderRightWidth = style({
  prop: "borderRightWidth",
})

const borderBottomWidth = style({
  prop: "borderBottomWidth",
})

const borderLeftWidth = style({
  prop: "borderLeftWidth",
})

const borderStartWidth = style({
  prop: "borderStartWidth",
})

const borderEndWidth = style({
  prop: "borderEndWidth",
})

export const border = compose<BorderProps>(
  borderStyle,
  borderColor,
  borderTopColor,
  borderRightColor,
  borderBottomColor,
  borderLeftColor,
  borderStartColor,
  borderEndColor,
  borderRadius,
  borderTopRadius,
  borderRightRadius,
  borderBottomRadius,
  borderLeftRadius,
  borderStartRadius,
  borderEndRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderTopStartRadius,
  borderTopEndRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderBottomStartRadius,
  borderBottomEndRadius,
  borderWidth,
  borderTopWidth,
  borderRightWidth,
  borderBottomWidth,
  borderLeftWidth,
  borderStartWidth,
  borderEndWidth,
)
