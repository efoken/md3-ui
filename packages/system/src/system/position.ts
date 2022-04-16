import { compose, style } from "../style"
import { PositionProops } from "./types"

export const position = style({
  prop: "position",
})

export const zIndex = style({
  prop: "zIndex",
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

export const start = style({
  prop: "start",
})

export const end = style({
  prop: "end",
})

export const display = compose<PositionProops>(
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
  start,
  end,
)
