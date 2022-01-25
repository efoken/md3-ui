import { compose, style } from "../create-style"
import { PositionProops } from "./types"

export const position = style({
  prop: "position",
})

export const zIndex = style({
  prop: "zIndex",
  // TODO: themeKey: "zIndex",
})

export const top = style({
  prop: "top",
})

export const right = style({
  prop: "right",
})

export const bottom = style({
  prop: "bottom",
})

export const left = style({
  prop: "left",
})

export const display = compose<keyof PositionProops>(
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
)
