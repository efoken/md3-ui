import { compose, style } from "../style"
import { ElevationProps } from "./types"

const elevationRaw = style({
  prop: "elevation",
  styleProp: false,
  themeKey: "elevation",
})

export const elevation = compose<ElevationProps>(elevationRaw)
