import { compose, style } from "../create-style"
import { DisplayProps } from "./types"

const displayRaw = style({
  prop: "display",
})

const overflow = style({
  prop: "overflow",
})

export const display = compose<keyof DisplayProps>(displayRaw, overflow)
