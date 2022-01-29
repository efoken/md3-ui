import { compose, style } from "../create-style"
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

export const background = compose<keyof BackgroundProps>(
  backgroundColor,
  bgColor,
)
