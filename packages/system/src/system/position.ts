import { compose, style } from "../style"
import { PositionProops } from "./types"

const positionRaw = style({
  prop: "position",
})

const zIndex = style({
  prop: "zIndex",
})

const top = style({
  prop: "top",
})

const right = style({
  prop: "right",
})

const bottom = style({
  prop: "bottom",
})

const left = style({
  prop: "left",
})

const start = style({
  prop: "start",
})

const end = style({
  prop: "end",
})

export const position = compose<PositionProops>(
  positionRaw,
  zIndex,
  top,
  right,
  bottom,
  left,
  start,
  end,
)
