import { Breakpoints, createBreakpoints } from "./create-breakpoints"
import { Color, createColor } from "./create-color"
import { createElevation, Elevation } from "./create-elevation"
import { createShape, Shape } from "./create-shape"
import { createSpacing, Spacing } from "./create-spacing"
import { createTypography, Typeface, Typescale } from "./create-typorgaphy"
import { mix, rgba, transition } from "./utils"

export * from "./create-breakpoints"
export * from "./create-color"
export * from "./create-elevation"
export * from "./create-spacing"
export * from "./create-typorgaphy"

export interface Theme {
  breakpoints: Breakpoints
  color: Color
  elevation: Elevation
  typeface: Typeface
  typescale: Typescale
  shape: Shape
  spacing: Spacing
  zIndex: {
    appBar: number
    drawer: number
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
    ...createTypography({
      typeface: theme.typeface,
      typescale: theme.typescale,
    }),
    shape: createShape(theme.shape),
    spacing: createSpacing(8),
    zIndex: {
      appBar: 1200,
      drawer: 1300,
      modal: 1400,
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
