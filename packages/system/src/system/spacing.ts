import { compose, style } from "../style"
import { SpacingProps } from "./types"

export function getValue(
  transform: (cssValue: any) => string | number,
  propValue: any,
) {
  if (typeof propValue === "string" || propValue == null) {
    return propValue as string | undefined
  }

  const value = transform(Math.abs(propValue))

  if (propValue >= 0) {
    return value
  }
  if (typeof value === "number") {
    return -value
  }
  return `-${value}`
}

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

const paddingHorizontal = style({
  prop: "paddingHorizontal",
  styleProp: ["paddingLeft", "paddingRight"],
  themeKey: "spacing",
})

const paddingVertical = style({
  prop: "paddingVertical",
  styleProp: ["paddingTop", "paddingBottom"],
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

const p = style({
  prop: "p",
  styleProp: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
  themeKey: "spacing",
})

const pt = style({
  prop: "pt",
  styleProp: "paddingTop",
  themeKey: "spacing",
})

const pr = style({
  prop: "pr",
  styleProp: "paddingRight",
  themeKey: "spacing",
})

const pb = style({
  prop: "pb",
  styleProp: "paddingBottom",
  themeKey: "spacing",
})

const pl = style({
  prop: "pl",
  styleProp: "paddingLeft",
  themeKey: "spacing",
})

const ps = style({
  prop: "ps",
  styleProp: "paddingStart",
  themeKey: "spacing",
})

const pe = style({
  prop: "pe",
  styleProp: "paddingEnd",
  themeKey: "spacing",
})

const px = style({
  prop: "px",
  styleProp: ["paddingLeft", "paddingRight"],
  themeKey: "spacing",
})

const py = style({
  prop: "py",
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

const marginHorizontal = style({
  prop: "marginHorizontal",
  styleProp: ["marginLeft", "marginRight"],
  themeKey: "spacing",
})

const marginVertical = style({
  prop: "marginVertical",
  styleProp: ["marginTop", "marginBottom"],
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

const m = style({
  prop: "m",
  styleProp: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
  themeKey: "spacing",
})

const mt = style({
  prop: "mt",
  styleProp: "marginTop",
  themeKey: "spacing",
})

const mr = style({
  prop: "mr",
  styleProp: "marginRight",
  themeKey: "spacing",
})

const mb = style({
  prop: "mb",
  styleProp: "marginBottom",
  themeKey: "spacing",
})

const ml = style({
  prop: "ml",
  styleProp: "marginLeft",
  themeKey: "spacing",
})

const ms = style({
  prop: "ms",
  styleProp: "marginStart",
  themeKey: "spacing",
})

const me = style({
  prop: "me",
  styleProp: "marginEnd",
  themeKey: "spacing",
})

const mx = style({
  prop: "mx",
  styleProp: ["marginLeft", "marginRight"],
  themeKey: "spacing",
})

const my = style({
  prop: "my",
  styleProp: ["marginTop", "marginBottom"],
  themeKey: "spacing",
})

export const spacing = compose<SpacingProps>(
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingStart,
  paddingEnd,
  paddingHorizontal,
  paddingVertical,
  paddingX,
  paddingY,
  p,
  pt,
  pr,
  pb,
  pl,
  ps,
  pe,
  px,
  py,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginStart,
  marginEnd,
  marginHorizontal,
  marginVertical,
  marginX,
  marginY,
  m,
  mt,
  mr,
  mb,
  ml,
  ms,
  me,
  mx,
  my,
)
