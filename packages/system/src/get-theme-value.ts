import { Theme } from "@md3-ui/theme"
import { background } from "./system/background"
import { border } from "./system/border"
import { display } from "./system/display"
import { elevation } from "./system/elevation"
import { flexbox } from "./system/flexbox"
import { interactivity } from "./system/interactivity"
import { position } from "./system/position"
import { sizing } from "./system/sizing"
import { spacing } from "./system/spacing"
import { transform } from "./system/transform"
import { transition } from "./system/transition"
import { typography } from "./system/typography"

const filterPropsMapping = {
  background: background.filterProps,
  border: border.filterProps,
  display: display.filterProps,
  elevation: elevation.filterProps,
  flexbox: flexbox.filterProps,
  interactivity: interactivity.filterProps,
  position: position.filterProps,
  sizing: sizing.filterProps,
  spacing: spacing.filterProps,
  transform: transform.filterProps,
  transition: transition.filterProps,
  typography: typography.filterProps,
}

const styleFunctionMapping = {
  background,
  border,
  display,
  elevation,
  flexbox,
  interactivity,
  position,
  sizing,
  spacing,
  transform,
  transition,
  typography,
}

export const propToStyleFunction = Object.keys(filterPropsMapping).reduce(
  (acc, styleFnName) => {
    filterPropsMapping[styleFnName].forEach((propName: any) => {
      acc[propName] = styleFunctionMapping[styleFnName]
    })
    return acc
  },
  {},
)

export function getThemeValue(prop: string, value: any, theme: Theme) {
  const inputProps = {
    [prop]: value,
    theme,
  }
  const styleFunction = propToStyleFunction[prop]
  return styleFunction ? styleFunction(inputProps) : { [prop]: value }
}
