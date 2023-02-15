import { createPaletteStyle } from "../create-palette-style"
import { compose, style } from "../style"
import { InteractivityProps } from "./types"

const cursor = style({
  prop: "cursor",
})

const pointerEvents = style({
  prop: "pointerEvents",
})

const userSelect = style({
  prop: "userSelect",
})

const outlineStyle = style({
  prop: "outlineStyle",
})

const outlineColor = createPaletteStyle({
  prop: "outlineColor",
})

const outlineOffset = style({
  prop: "outlineOffset",
})

const outlineWidth = style({
  prop: "outlineWidth",
})

export const interactivity = compose<InteractivityProps>(
  cursor,
  pointerEvents,
  userSelect,
  outlineStyle,
  outlineColor,
  outlineOffset,
  outlineWidth,
)
