interface NestedRecord<V = any> {
  [k: string | number]: NestedRecord<V> | V
}

export function assignNestedKeys<
  Object extends Record<string, any> = NestedRecord,
  Value = any,
>(obj: Object, keys: string[], value: Value) {
  let temp: Record<string, any> = obj
  keys.forEach((k, index) => {
    if (index === keys.length - 1) {
      if (temp && typeof temp === "object") {
        temp[k] = value
      }
    } else if (temp && typeof temp === "object") {
      if (!temp[k]) {
        temp[k] = {}
      }
      temp = temp[k]
    }
  })
}

export function walkObjectDeep<Value, T = Record<string, any>>(
  obj: T,
  callback: (
    keys: string[],
    value: Value,
    scope: Record<string, string | number>,
  ) => void,
  shouldSkipPaths?: (keys: string[]) => boolean,
) {
  function recurse(object: any, parentKeys: string[] = []) {
    Object.entries(object).forEach(([key, value]: [string, any]) => {
      if (
        (!shouldSkipPaths ||
          (shouldSkipPaths && !shouldSkipPaths([...parentKeys, key]))) &&
        value !== undefined &&
        value !== null
      ) {
        if (typeof value === "object" && Object.keys(value).length > 0) {
          recurse(value, [...parentKeys, key])
        } else {
          callback([...parentKeys, key], value, object)
        }
      }
    })
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
      // opacity values are unitless
      return value
    }
    return `${value}px`
  }
  return value
}

export function cssVarsParser<T extends Record<string, any>>(
  theme: T,
  options?: {
    prefix?: string
    basePrefix?: string
    shouldSkipGeneratingVar?: (
      objectPathKeys: string[],
      value: string | number,
    ) => boolean
  },
) {
  const { prefix, basePrefix = "", shouldSkipGeneratingVar } = options || {}
  const css = {} as NestedRecord<string>
  const vars = {} as NestedRecord<string>
  const parsedTheme = {} as T

  walkObjectDeep(
    theme,
    (keys, value: string | number | object) => {
      if (typeof value === "string" || typeof value === "number") {
        if (typeof value === "string" && /var\(\s*--/.test(value)) {
          // for CSS var, apply prefix or remove basePrefix from the variable
          if (!basePrefix && prefix) {
            // eslint-disable-next-line no-param-reassign
            value = value.replace(/var\(\s*--/g, `var(--${prefix}-`)
          } else {
            // eslint-disable-next-line no-param-reassign
            value = prefix
              ? value.replace(
                  new RegExp(`var\\(\\s*--${basePrefix}`, "g"),
                  `var(--${prefix}`,
                ) // removing spaces
              : value.replace(
                  new RegExp(`var\\(\\s*--${basePrefix}-`, "g"),
                  "var(--",
                )
          }
        }

        if (
          shouldSkipGeneratingVar == null ||
          shouldSkipGeneratingVar(keys, value)
        ) {
          // only create css & var if `shouldSkipGeneratingVar` return false
          const cssVar = `--${prefix ? `${prefix}-` : ""}${keys.join("-")}`
          Object.assign(css, { [cssVar]: getCssValue(keys, value) })

          assignNestedKeys(vars, keys, `var(${cssVar})`)
        }
      }
      assignNestedKeys(parsedTheme, keys, value)
    },
    (keys) => keys[0] === "vars", // skip 'vars/*' paths
  )

  return { css, vars, parsedTheme }
}
