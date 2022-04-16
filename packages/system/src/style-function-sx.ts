import { isObject, objectKeys, runIfFn, splitProps } from "@md3-ui/utils"
import { getThemeValue, propToStyleFunction } from "./get-theme-value"
import {
  createEmptyBreakpointObject,
  handleBreakpoints,
  removeUnusedBreakpoints,
} from "./system/breakpoints"
import { merge } from "./utils"

function objectsHaveSameKeys(...objects: any[]) {
  const allKeys = objects.reduce(
    (keys, object) => [...keys, ...Object.keys(object)],
    [],
  )
  const union = new Set(allKeys)
  return objects.every((object) => union.size === Object.keys(object).length)
}

export function styleFunctionSx(props: any = {}) {
  const { sx, theme = {} } = props
  if (!sx) {
    return null // Emotion will neglect null
  }

  /*
   * Receive `sxInput` as object or callback and then recursively check keys &
   * values to create media query object styles (the result will be used in
   * `styled`).
   */
  function traverse(sxInput: any) {
    let sxObject = sxInput
    if (typeof sxInput === "function") {
      sxObject = sxInput(theme)
    } else if (typeof sxInput !== "object") {
      return sxInput
    }
    if (!sxObject) {
      return null
    }
    const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints)
    const breakpointsKeys = Object.keys(emptyBreakpoints)

    let css = emptyBreakpoints

    Object.keys(sxObject).forEach((styleKey) => {
      const value = runIfFn(sxObject[styleKey], theme)
      if (value != null) {
        if (typeof value === "object") {
          if (propToStyleFunction[styleKey]) {
            css = merge(css, getThemeValue(styleKey, value, theme))
          } else {
            const breakpointsValues = handleBreakpoints(
              { theme },
              value,
              (x) => ({ [styleKey]: x }),
            )

            if (objectsHaveSameKeys(breakpointsValues, value)) {
              css[styleKey] = styleFunctionSx({ sx: value, theme })
            } else {
              css = merge(css, breakpointsValues)
            }
          }
        } else {
          css = merge(css, getThemeValue(styleKey, value, theme))
        }
      }
    })

    return removeUnusedBreakpoints(breakpointsKeys, css)
  }

  return Array.isArray(sx)
    ? sx.map((sxInput) => traverse(sxInput))
    : traverse(sx)
}

styleFunctionSx.filterProps = ["sx"]

export function extendSxProp<T extends object>({
  sx: inSx,
  ...props
}: T & { sx?: any }) {
  const [systemProps, otherProps] = splitProps(
    props,
    objectKeys(propToStyleFunction),
  )

  let finalSx
  if (Array.isArray(inSx)) {
    finalSx = [systemProps, ...inSx]
  } else if (typeof inSx === "function") {
    finalSx = (...args: any[]) => {
      const result = inSx(...args)
      if (!isObject(result)) {
        return systemProps
      }
      return { ...systemProps, ...result }
    }
  } else {
    finalSx = { ...systemProps, ...inSx }
  }

  return {
    ...otherProps,
    sx: finalSx,
  }
}
