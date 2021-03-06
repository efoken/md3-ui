import { compose, style } from "../style"
import { BackgroundProps } from "./types"

const backgroundColor = style({
  prop: "backgroundColor",
  themeKey: "color",
})

const bgColor = style({
  prop: "bgColor",
  styleProp: "backgroundColor",
  themeKey: "color",
})

export const background = compose<BackgroundProps>(backgroundColor, bgColor)
