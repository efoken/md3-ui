import { Breakpoints, createBreakpoints } from "./create-breakpoints"
import { Color, createColor } from "./create-color"
import { Components, createComponents } from "./create-components"
import { Elevation, createElevation } from "./create-elevation"
import { Motion, createMotion } from "./create-motion"
import { Palette, createPalette } from "./create-palette"
import { Shape, createShape } from "./create-shape"
import { Spacing, createSpacing } from "./create-spacing"
import { State, createState } from "./create-state"
import { Typeface, createTypeface } from "./create-typeface"
import { Typescale, createTypescale } from "./create-typescale"
import { mix, rgba } from "./utils"

export * from "./create-breakpoints"
export * from "./create-color"
export * from "./create-components"
export * from "./create-elevation"
export * from "./create-motion"
export * from "./create-palette"
export * from "./create-shape"
export * from "./create-spacing"
export * from "./create-state"
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
    state: State
    typescale: Typescale
  }
  utils: {
    mix: typeof mix
    rgba: typeof rgba
  }
  vars: any
  comp: Components
}

type PartialTheme = Omit<Partial<Theme>, "ref" | "sys" | "utils" | "vars"> & {
  ref?: {
    palette?: Partial<Palette>
    typeface?: Partial<Typeface>
  }
  sys?: {
    color?: Partial<Color>
    elevation?: Partial<Elevation>
    motion?: Partial<Motion>
    shape?: Partial<Shape>
    state?: Partial<State>
    typescale?: Partial<Typescale>
  }
}

export function createTheme(theme: PartialTheme = {}): Theme {
  const palette = createPalette(theme.ref?.palette)
  const typeface = createTypeface(theme.ref?.typeface)

  const mergedTheme = {
    breakpoints: createBreakpoints(),
    spacing: createSpacing(4),
    ref: {
      palette,
      typeface,
    },
    sys: {
      color: createColor(palette, theme.sys?.color),
      elevation: createElevation(theme.sys?.elevation),
      motion: createMotion(theme.sys?.motion),
      shape: createShape(theme.sys?.shape),
      state: createState(theme.sys?.state),
      typescale: createTypescale(typeface, theme.sys?.typescale),
    },
    vars: {},
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
