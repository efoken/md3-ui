import { compose, style } from "../create-style"
import { BorderProps } from "./types"

const borderStyle = style({
  prop: "borderStyle",
})

const borderWidth = style({
  prop: "borderWidth",
})

const borderRadius = style({
  prop: "borderRadius",
})

const borderTopColor = style({
  prop: "borderTopColor",
})

const borderTopRadius = style({
  prop: "borderTopRadius",
  styleProp: ["borderTopLeftRadius", "borderTopRightRadius"],
})

const borderTopWidth = style({
  prop: "borderTopWidth",
})

const borderRightColor = style({
  prop: "borderRightColor",
})

const borderRightRadius = style({
  prop: "borderRightRadius",
  styleProp: ["borderTopRightRadius", "borderBottomRightRadius"],
})

const borderRightWidth = style({
  prop: "borderRightWidth",
})

const borderBottomColor = style({
  prop: "borderBottomColor",
})

const borderBottomRadius = style({
  prop: "borderBottomRadius",
  styleProp: ["borderBottomLeftRadius", "borderBottomRightRadius"],
})

const borderBottomWidth = style({
  prop: "borderBottomWidth",
})

const borderColor = style({
  prop: "borderColor",
})

const borderLeftColor = style({
  prop: "borderLeftColor",
})

const borderLeftRadius = style({
  prop: "borderLeftRadius",
  styleProp: ["borderTopLeftRadius", "borderBottomLeftRadius"],
})

const borderLeftWidth = style({
  prop: "borderLeftWidth",
})

export const border = compose<keyof BorderProps>(
  borderStyle,
  borderWidth,
  borderRadius,
  borderTopColor,
  borderTopRadius,
  borderTopWidth,
  borderRightColor,
  borderRightRadius,
  borderRightWidth,
  borderBottomColor,
  borderBottomRadius,
  borderBottomWidth,
  borderColor,
  borderLeftColor,
  borderLeftRadius,
  borderLeftWidth,
)
