import { compose, style } from "../style"
import { TransformProps } from "./types"

const transformRaw = style({
  prop: "transform",
})

export const transform = compose<TransformProps>(transformRaw)
