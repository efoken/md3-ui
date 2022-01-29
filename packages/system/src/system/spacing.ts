import { compose, style } from "../create-style"
import { SpacingProps } from "./types"

const padding = style({
  prop: "padding",
  styleProp: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
  themeKey: "spacing",
})

const paddingTop = style({
  prop: "paddingTop",
  themeKey: "spacing",
})

const paddingRight = style({
  prop: "paddingRight",
  themeKey: "spacing",
})

const paddingBottom = style({
  prop: "paddingBottom",
  themeKey: "spacing",
})

const paddingLeft = style({
  prop: "paddingLeft",
  themeKey: "spacing",
})

const paddingStart = style({
  prop: "paddingStart",
  themeKey: "spacing",
})

const paddingEnd = style({
  prop: "paddingEnd",
  themeKey: "spacing",
})

const paddingX = style({
  prop: "paddingX",
  styleProp: ["paddingLeft", "paddingRight"],
  themeKey: "spacing",
})

const paddingY = style({
  prop: "paddingY",
  styleProp: ["paddingTop", "paddingBottom"],
  themeKey: "spacing",
})

const margin = style({
  prop: "margin",
  styleProp: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
  themeKey: "spacing",
})

const marginTop = style({
  prop: "marginTop",
  themeKey: "spacing",
})

const marginRight = style({
  prop: "marginRight",
  themeKey: "spacing",
})

const marginBottom = style({
  prop: "marginBottom",
  themeKey: "spacing",
})

const marginLeft = style({
  prop: "marginLeft",
  themeKey: "spacing",
})

const marginStart = style({
  prop: "marginStart",
  themeKey: "spacing",
})

const marginEnd = style({
  prop: "marginEnd",
  themeKey: "spacing",
})

const marginX = style({
  prop: "marginX",
  styleProp: ["marginLeft", "marginRight"],
  themeKey: "spacing",
})

const marginY = style({
  prop: "marginY",
  styleProp: ["marginTop", "marginBottom"],
  themeKey: "spacing",
})

export const spacing = compose<keyof SpacingProps>(
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingStart,
  paddingEnd,
  paddingX,
  paddingY,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginStart,
  marginEnd,
  marginX,
  marginY,
)
