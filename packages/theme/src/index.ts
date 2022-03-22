import { mix, rgba } from "polished"
import { Breakpoints, createBreakpoints } from "./create-breakpoints"
import { Color, createColor } from "./create-color"
import { createElevation, Elevation } from "./create-elevation"
import { createTypescale, Typescale } from "./create-typescale"

export interface Theme {
  breakpoints: Breakpoints
  color: Color
  elevation: Elevation
  typescale: Typescale
  spacing: (value: number) => number
  zIndex: {
    modal: number
  }
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

export function createTheme(theme: Partial<Theme> = {}): Theme {
  return {
    breakpoints: createBreakpoints(),
    color: createColor(theme.color),
    elevation: createElevation(theme.elevation),
    typescale: createTypescale(theme.typescale),
    spacing: (value) => value * 8,
    zIndex: {
      modal: 1300,
    },
    utils: {
      mix,
      rgba,
    },
    components: {},
  }
}

export const theme = createTheme()
