import { mix, rgba } from "polished"
import { Color, createColor } from "./create-color"
import { createElevation, Elevation } from "./create-elevation"
import { createTypescale, Typescale } from "./create-typescale"

export interface Theme {
  color: Color
  elevation: Elevation
  typescale: Typescale
  spacing: (value: number) => number
  utils: {
    mix: typeof mix
    rgba: typeof rgba
  }
  components: {}
}

interface DefaultTheme extends Theme {}

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  export interface Theme extends DefaultTheme {}
}

export const theme: Theme = {
  color: createColor({}),
  elevation: createElevation({}),
  typescale: createTypescale({}),
  spacing: (value) => value * 8,
  utils: {
    mix,
    rgba,
  },
  components: {},
}
