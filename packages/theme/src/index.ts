import { Breakpoints, createBreakpoints } from "./create-breakpoints"
import { Color, createColor } from "./create-color"
import { Components, createComponents } from "./create-components"
import { createElevation, Elevation } from "./create-elevation"
import { createMotion, Motion } from "./create-motion"
import { createShape, Shape } from "./create-shape"
import { createSpacing, Spacing } from "./create-spacing"
import { createTypeface, Typeface } from "./create-typeface"
import { createTypescale, Typescale } from "./create-typescale"
import { palette, Palette } from "./palette"
import { mix, rgba } from "./utils"

export * from "./create-breakpoints"
export * from "./create-color"
export * from "./create-elevation"
export * from "./create-motion"
export * from "./create-shape"
export * from "./create-spacing"
export * from "./create-typeface"
export * from "./create-typescale"

export interface Theme {
  breakpoints: Breakpoints
  spacing: Spacing
  ref: {
    palette: Palette
    typeface: Typeface
  }
  sys: {
    color: Color
    elevation: Elevation
    motion: Motion
    shape: Shape
    typescale: Typescale
  }
  utils: {
    mix: typeof mix
    rgba: typeof rgba
  }
  comp: Components
}

interface DefaultTheme extends Theme {}

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  export interface Theme extends DefaultTheme {}
}

export function createTheme(theme: Partial<Theme> = {}): Theme {
  const typeface = createTypeface(theme.ref?.typeface)

  const mergedTheme = {
    breakpoints: createBreakpoints(),
    spacing: createSpacing(4),
    ref: {
      palette,
      typeface,
    },
    sys: {
      color: createColor(theme.sys?.color),
      elevation: createElevation(theme.sys?.elevation),
      motion: createMotion(theme.sys?.motion),
      shape: createShape(theme.sys?.shape),
      typescale: createTypescale(typeface, theme.sys?.typescale),
    },
    utils: {
      mix,
      rgba,
    },
  }

  const comp = createComponents(mergedTheme)

  return {
    ...mergedTheme,
    comp,
  }
}

export const theme = createTheme()
