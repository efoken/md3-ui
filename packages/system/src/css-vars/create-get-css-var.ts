/**
 * The benefit of this function is to help developers get CSS var from theme
 * without specifying the whole variable and they does not need to remember the
 * prefix (defined once).
 */
export default function createGetCssVar<T extends string = string>(
  prefix = "",
) {
  const appendVar = (...vars: string[]): string => {
    if (vars.length === 0) {
      return ""
    }
    const value = vars[0]
    if (
      typeof value === "string" &&
      !/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))/.test(
        value,
      )
    ) {
      return `, var(--${prefix ? `${prefix}-` : ""}${value}${appendVar(
        ...vars.slice(1),
      )})`
    }
    return `, ${value}`
  }

  // AdditionalVars makes `getCssVar` less strict, so it can be use like this `getCssVar('non-mui-variable')` without type error.
  const getCssVar = <AdditionalVars extends string = never>(
    field: T | AdditionalVars,
    ...vars: (T | AdditionalVars)[]
  ) => `var(--${prefix ? `${prefix}-` : ""}${field}${appendVar(...vars)})`

  return getCssVar
}
