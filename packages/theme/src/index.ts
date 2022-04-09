import { Breakpoints, createBreakpoints } from "./create-breakpoints"
import { Color, createColor } from "./create-color"
import { createElevation, Elevation } from "./create-elevation"
import { createSpacing, Spacing } from "./create-spacing"
import { createTypescale, Typescale } from "./create-typescale"
import { mix, rgba, transition } from "./utils"

export * from "./create-breakpoints"
export * from "./create-spacing"

export interface Theme {
  breakpoints: Breakpoints
  color: Color
  elevation: Elevation
  typescale: Typescale
  spacing: Spacing
  zIndex: {
    appBar: number
    modal: number
  }
  utils: {
    mix: typeof mix
    rgba: typeof rgba
    transition: typeof transition
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
    spacing: createSpacing(8),
    zIndex: {
      appBar: 1200,
      modal: 1300,
    },
    utils: {
      mix,
      rgba,
      transition,
    },
    components: {},
  }
}

export const theme = createTheme()
