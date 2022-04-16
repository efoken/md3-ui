import { compose, style } from "../style"
import { FlexboxProps } from "./types"

const alignContent = style({
  prop: "alignContent",
})

const alignItems = style({
  prop: "alignItems",
})

const alignSelf = style({
  prop: "alignSelf",
})

const flex = style({
  prop: "flex",
})

const flexBasis = style({
  prop: "flexBasis",
})

const flexDirection = style({
  prop: "flexDirection",
})

const flexGrow = style({
  prop: "flexGrow",
})

const flexShrink = style({
  prop: "flexShrink",
})

const flexWrap = style({
  prop: "flexWrap",
})

const justifyContent = style({
  prop: "justifyContent",
})

export const flexbox = compose<FlexboxProps>(
  alignContent,
  alignItems,
  alignSelf,
  flex,
  flexBasis,
  flexDirection,
  flexGrow,
  flexShrink,
  flexWrap,
  justifyContent,
)
