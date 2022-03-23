import { compose, style } from "../create-style"
import { ElevationProps } from "./types"

const elevationRaw = style({
  prop: "elevation",
  themeKey: "elevation",
})

export const elevation = compose<keyof ElevationProps>(elevationRaw)