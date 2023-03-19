import { Breakpoint, Theme } from "@md3-ui/theme"
import { isEmptyObject, objectKeys } from "@md3-ui/utils"
import { RNStyle, ResponsiveValue } from "../types"

const values = {
  compact: 0,
  medium: 600,
  expanded: 840,
}

const defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for types.
  keys: ["compact", "medium", "expanded"] as Breakpoint[],
  up: (key: Breakpoint) =>
    key === "medium"
      ? // Phones in landscape mode still use `compact`
        // See: https://m3.material.io/foundations/adaptive-design/large-screens/overview
        `@media (min-width: ${values[key]}px)`
      : `@media (min-width: ${values[key]}px)`,
  values: undefined,
}

export function handleBreakpoints<P extends { theme?: Theme }>(
  props: P,
  propValue: any,
  styleFromPropValue: (value?: any) => RNStyle,
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

    return Object.keys(propValue).reduce<any>((acc, breakpoint) => {
      // Key is the breakpoint
      if (Object.keys(themeBreakpoints.values || values).includes(breakpoint)) {
        const mediaKey = themeBreakpoints.up(breakpoint as Breakpoint)
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
  const breakpointsInOrder = themeBreakpoints?.keys.reduce<Record<string, any>>(
    (acc, key) => {
      const breakpointStyleKey = themeBreakpoints.up(key)
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
    const breakpointUnused =
      !breakpointOutput || isEmptyObject(breakpointOutput)
    if (breakpointUnused) {
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
  const base: Partial<Record<Breakpoint, boolean>> = {}
  const breakpointKeys = objectKeys(themeBreakpoints)
  if (Array.isArray(breakpointValues)) {
    for (const [i, breakpoint] of breakpointKeys.entries()) {
      if (i < breakpointValues.length) {
        base[breakpoint] = true
      }
    }
  } else {
    for (const breakpoint of breakpointKeys) {
      if (breakpointValues[breakpoint] != null) {
        base[breakpoint] = true
      }
    }
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
  const keys = objectKeys(base)

  if (keys.length === 0) {
    return breakpointValues as T
  }

  let previous: Breakpoint | number

  return keys.reduce((acc, breakpoint, i) => {
    if (Array.isArray(breakpointValues)) {
      acc[breakpoint] = (
        breakpointValues[i] != null
          ? breakpointValues[i]
          : breakpointValues[previous as number]
      ) as T
      previous = i
    } else {
      acc[breakpoint] =
        (breakpointValues as any)[breakpoint] != null
          ? (breakpointValues as any)[breakpoint]
          : (breakpointValues as any)[previous] || breakpointValues
      previous = breakpoint
    }
    return acc
  }, {} as Record<string, T>) as Record<Breakpoint, T>
}
