import { AllStyle } from "../types"

const values = {
  compact: 0,
  medium: 600,
  expanded: 840,
}

const defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for types.
  keys: ["compact", "medium", "expanded"],
  up: (key: string) =>
    key === "medium"
      ? // Phones in landscape mode still use `compact`
        // See: https://m3.material.io/foundations/adaptive-design/large-screens/overview
        `@media (min-width: ${values[key]}px) and (orientation: portrait)`
      : `@media (min-width: ${values[key]}px)`,
}

export function handleBreakpoints(
  props: any,
  propValue: any,
  styleFromPropValue: (propValueFinal: number | string | AllStyle) => any,
) {
  const { theme = {} } = props

  if (Array.isArray(propValue)) {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints
    // eslint-disable-next-line unicorn/prefer-object-from-entries
    return propValue.reduce((acc, item, index) => {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] =
        styleFromPropValue(propValue[index])
      return acc
    }, {})
  }

  if (typeof propValue === "object") {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints
    // eslint-disable-next-line unicorn/prefer-object-from-entries
    return Object.keys(propValue).reduce((acc, breakpoint) => {
      // Key is the breakpoint
      if (Object.keys(themeBreakpoints.values || values).includes(breakpoint)) {
        const mediaKey = themeBreakpoints.up(breakpoint)
        acc[mediaKey] = styleFromPropValue(propValue[breakpoint])
      } else {
        const cssKey = breakpoint
        acc[cssKey] = propValue[cssKey]
      }
      return acc
    }, {})
  }

  return styleFromPropValue(propValue)
}

export function createEmptyBreakpointObject(breakpointsInput: any = {}) {
  const breakpointsInOrder = breakpointsInput?.keys?.reduce(
    (acc: any, key: string) => {
      const breakpointStyleKey = breakpointsInput.up(key)
      acc[breakpointStyleKey] = {}
      return acc
    },
    {},
  )
  return breakpointsInOrder || {}
}

export function removeUnusedBreakpoints(breakpointKeys: string[], style: any) {
  return breakpointKeys.reduce((acc, key) => {
    const breakpointOutput = acc[key]
    const isBreakpointUnused =
      !breakpointOutput || Object.keys(breakpointOutput).length === 0
    if (isBreakpointUnused) {
      delete acc[key]
    }
    return acc
  }, style)
}
