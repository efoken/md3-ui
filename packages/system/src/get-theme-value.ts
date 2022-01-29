import { Theme } from "@md3-ui/theme"
import { background } from "./system/background"
import { border } from "./system/border"
import { display } from "./system/display"
import { flexbox } from "./system/flexbox"
import { position } from "./system/position"
import { sizing } from "./system/sizing"
import { spacing } from "./system/spacing"
import { typescale } from "./system/typescale"

const filterPropsMapping = {
  background: background.filterProps,
  border: border.filterProps,
  display: display.filterProps,
  flexbox: flexbox.filterProps,
  position: position.filterProps,
  sizing: sizing.filterProps,
  spacing: spacing.filterProps,
  typescale: typescale.filterProps,
}

const styleFunctionMapping = {
  background,
  border,
  display,
  flexbox,
  position,
  sizing,
  spacing,
  typescale,
}

// eslint-disable-next-line unicorn/prefer-object-from-entries
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
