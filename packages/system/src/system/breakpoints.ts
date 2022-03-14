import { Theme } from "@md3-ui/theme"
import { AllStyle, ResponsiveValue } from "../types"

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
  values: undefined,
}

export function handleBreakpoints<P extends { theme?: Theme }>(
  props: P,
  propValue: any,
  styleFromPropValue: (propValueFinal: number | string | AllStyle) => any,
) {
  const { theme } = props

  if (Array.isArray(propValue)) {
    const themeBreakpoints = theme?.breakpoints || defaultBreakpoints

    return propValue.reduce((acc, item, index) => {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] =
        styleFromPropValue(propValue[index])
      return acc
    }, {})
  }

  if (typeof propValue === "object") {
    const themeBreakpoints = theme?.breakpoints || defaultBreakpoints

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

export function computeBreakpointsBase(
  breakpointValues: ResponsiveValue<any>,
  themeBreakpoints: typeof values,
) {
  // Fixed value
  if (typeof breakpointValues !== "object") {
    return {}
  }
  const base: Record<string, boolean> = {}
  const breakpointsKeys = Object.keys(themeBreakpoints)
  if (Array.isArray(breakpointValues)) {
    breakpointsKeys.forEach((breakpoint, i) => {
      if (i < breakpointValues.length) {
        base[breakpoint] = true
      }
    })
  } else {
    breakpointsKeys.forEach((breakpoint) => {
      if (breakpointValues[breakpoint] != null) {
        base[breakpoint] = true
      }
    })
  }
  return base
}

export function resolveBreakpointValues<T>({
  base: baseProp,
  breakpoints: themeBreakpoints,
  values: breakpointValues,
}: {
  base?: Record<string, boolean>
  breakpoints: typeof values
  values: ResponsiveValue<T>
}) {
  const base =
    baseProp ?? computeBreakpointsBase(breakpointValues, themeBreakpoints)
  const keys = Object.keys(base)

  if (keys.length === 0) {
    return breakpointValues
  }

  let previous: string | number

  return keys.reduce((acc, breakpoint, i) => {
    if (Array.isArray(breakpointValues)) {
      acc[breakpoint] =
        breakpointValues[i] != null
          ? breakpointValues[i]
          : breakpointValues[previous]
      previous = i
    } else {
      acc[breakpoint] =
        breakpointValues[breakpoint] != null
          ? breakpointValues[breakpoint]
          : breakpointValues[previous] || breakpointValues
      previous = breakpoint
    }
    return acc
  }, {} as Record<keyof typeof values, T>)
}
