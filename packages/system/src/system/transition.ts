import { compose, style } from "../style"
import { TransitionProps } from "./types"

const transitionRaw = style({
  prop: "transition",
})

const transitionDelay = style({
  prop: "transitionDelay",
})

const transitionDuration = style({
  prop: "transitionDuration",
})

const transitionProperty = style({
  prop: "transitionProperty",
})

const transitionTimingFunction = style({
  prop: "transitionTimingFunction",
})

const willChange = style({
  prop: "willChange",
})

export const transition = compose<TransitionProps>(
  transitionRaw,
  transitionDelay,
  transitionDuration,
  transitionProperty,
  transitionTimingFunction,
  willChange,
)
