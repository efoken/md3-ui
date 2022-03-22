import { compose, style } from "../create-style"
import { DisplayProps } from "./types"

const displayRaw = style({
  prop: "display",
})

const overflow = style({
  prop: "overflow",
})

const visibility = style({
  prop: "visibility",
})

export const display = compose<keyof DisplayProps>(
  displayRaw,
  overflow,
  visibility,
)
