import { createPaletteStyle } from "../create-palette-style"
import { compose } from "../style"
import { BackgroundProps } from "./types"

const backgroundColor = createPaletteStyle({
  prop: "backgroundColor",
})

const bgColor = createPaletteStyle({
  prop: "bgColor",
  styleProp: "backgroundColor",
})

export const background = compose<BackgroundProps>(backgroundColor, bgColor)
