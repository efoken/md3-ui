import { compose, style } from "../create-style"
import { TransformProps } from "./types"

const transformRaw = style({
  prop: "transform",
})

export const transform = compose<keyof TransformProps>(transformRaw)
