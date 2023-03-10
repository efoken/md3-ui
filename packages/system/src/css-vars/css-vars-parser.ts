interface NestedRecord<T = any> {
  [k: string | number]: NestedRecord<T> | T
}

export function assignNestedKeys<
  T extends Record<string, any> = NestedRecord,
  Value = any,
>(obj: T, keys: string[], value: Value, arrayKeys: string[] = []) {
  let temp: Record<string, any> = obj
  for (const [index, k] of keys.entries()) {
    if (index === keys.length - 1) {
      if (Array.isArray(temp)) {
        temp[Number(k)] = value
      } else if (temp && typeof temp === "object") {
        temp[k] = value
      }
    } else if (temp && typeof temp === "object") {
      if (!temp[k]) {
        temp[k] = arrayKeys.includes(k) ? [] : {}
      }
      temp = temp[k]
    }
  }
}

export function walkObjectDeep<Value, T = Record<string, any>>(
  obj: T,
  callback: (keys: string[], value: Value, arrayKeys: string[]) => void,
  shouldSkipPaths?: (keys: string[]) => boolean,
) {
  function recurse(
    object: any,
    parentKeys: string[] = [],
    arrayKeys: string[] = [],
  ) {
    for (const [key, value] of Object.entries<any>(object)) {
      if (
        (shouldSkipPaths == null || !shouldSkipPaths([...parentKeys, key])) &&
        value !== null
      ) {
        if (typeof value === "object" && Object.keys(value).length > 0) {
          recurse(
            value,
            [...parentKeys, key],
            Array.isArray(value) ? [...arrayKeys, key] : arrayKeys,
          )
        } else {
          callback([...parentKeys, key], value, arrayKeys)
        }
      }
    }
  }
  recurse(obj)
}

function getCssValue(keys: string[], value: string | number) {
  if (typeof value === "number") {
    if (
      ["lineHeight", "fontWeight", "opacity", "zIndex"].some((prop) =>
        keys.includes(prop),
      )
    ) {
      // CSS property that are unitless
      return value
    }
    const lastKey = keys[keys.length - 1]
    if (lastKey.toLowerCase().includes("opacity")) {
      // Opacity values are unitless
      return value
    }
    return `${value}px`
  }
  return value
}

export function cssVarsParser<T extends Record<string, any>>(
  theme: T,
  options: {
    prefix?: string
    shouldSkipGeneratingVar?: (
      objectPathKeys: string[],
      value: string | number,
    ) => boolean
  } = {},
) {
  const { prefix, shouldSkipGeneratingVar } = options
  const css = {} as Record<string, string | number>
  const vars = {} as NestedRecord<string>
  const varsWithDefaults = {}

  walkObjectDeep(
    theme,
    (keys, value: string | number | object, arrayKeys) => {
      if (
        (typeof value === "string" || typeof value === "number") &&
        (shouldSkipGeneratingVar == null ||
          !shouldSkipGeneratingVar(keys, value))
      ) {
        // Only create CSS & var if `shouldSkipGeneratingVar` returns false
        const cssVar = `--${prefix ? `${prefix}-` : ""}${keys.join("-")}`
        Object.assign(css, { [cssVar]: getCssValue(keys, value) })

        assignNestedKeys(vars, keys, `var(${cssVar})`, arrayKeys)
        assignNestedKeys(
          varsWithDefaults,
          keys,
          `var(${cssVar}, ${value})`,
          arrayKeys,
        )
      }
    },
    (keys) => keys[0] === "vars", // skip 'vars/*' paths
  )

  return { css, vars, varsWithDefaults }
}
