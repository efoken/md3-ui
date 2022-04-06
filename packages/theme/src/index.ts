import { mix, rgba } from "polished"
import { Breakpoints, createBreakpoints } from "./create-breakpoints"
import { Color, createColor } from "./create-color"
import { createElevation, Elevation } from "./create-elevation"
import { createSpacing, Spacing } from "./create-spacing"
import { createTypescale, Typescale } from "./create-typescale"

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

function transition(...args: (string | string[])[]) {
  if (Array.isArray(args[0]) && args.length === 2) {
    const value = args[1]

    if (typeof value !== "string") {
      throw new TypeError("Property must be a string value.")
    }

    const transitions = args[0]
      .map((property) => `${property} ${value}`)
      .join(", ")
    return transitions
  }
  return args.join(", ")
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
