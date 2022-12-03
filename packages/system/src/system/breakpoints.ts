import { Theme } from "@md3-ui/theme"
import { isEmptyObject } from "@md3-ui/utils"
import { ResponsiveValue, RNStyle } from "../types"

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
        `@media (min-width: ${values[key]}px)`
      : `@media (min-width: ${values[key]}px)`,
  values: undefined,
}

export function handleBreakpoints<P extends { theme?: Theme }, T>(
  props: P,
  propValue: T | Partial<Record<keyof Theme["breakpoints"]["values"], T>>,
  styleFromPropValue: (propValueFinal?: T) => RNStyle,
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

  if (propValue != null && typeof propValue === "object") {
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

export function createEmptyBreakpointObject(
  themeBreakpoints?: Theme["breakpoints"],
) {
  const breakpointsInOrder = themeBreakpoints?.keys.reduce(
    (acc: any, key: string) => {
      const breakpointStyleKey = themeBreakpoints.up(key)
      acc[breakpointStyleKey] = {}
      return acc
    },
    {},
  )
  return breakpointsInOrder || {}
}

export function removeUnusedBreakpoints(
  breakpointKeys: Theme["breakpoints"]["keys"],
  style: any,
) {
  return breakpointKeys.reduce((acc, key) => {
    const breakpointOutput = acc[key]
    const isBreakpointUnused =
      !breakpointOutput || isEmptyObject(breakpointOutput)
    if (isBreakpointUnused) {
      delete acc[key]
    }
    return acc
  }, style)
}

export function computeBreakpointsBase(
  breakpointValues: ResponsiveValue<any>,
  themeBreakpoints: Theme["breakpoints"]["values"],
) {
  // Fixed value
  if (typeof breakpointValues !== "object") {
    return {}
  }
  const base: Record<string, boolean> = {}
  const breakpointKeys = Object.keys(themeBreakpoints)
  if (Array.isArray(breakpointValues)) {
    breakpointKeys.forEach((breakpoint, i) => {
      if (i < breakpointValues.length) {
        base[breakpoint] = true
      }
    })
  } else {
    breakpointKeys.forEach((breakpoint) => {
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
  breakpoints: Theme["breakpoints"]["values"]
  values: ResponsiveValue<T>
}) {
  const base =
    baseProp ?? computeBreakpointsBase(breakpointValues, themeBreakpoints)
  const keys = Object.keys(base)

  if (keys.length === 0) {
    return breakpointValues as T
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
  }, {} as Record<keyof Theme["breakpoints"]["values"], T>)
}
