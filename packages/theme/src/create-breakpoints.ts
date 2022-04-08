export interface Breakpoints {
  keys: string[]
  up: (key: string) => string
  values: {
    compact: number
    medium: number
    expanded: number
  }
}

const values = {
  compact: 0,
  medium: 600,
  expanded: 840,
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function createBreakpoints(breakpoints?: any): Breakpoints {
  return {
    // Sorted ASC by size. That's important.
    // It can't be configured as it's used statically for types.
    keys: ["compact", "medium", "expanded"],
    up: (key: string) =>
      key === "medium"
        ? // Phones in landscape mode still use `compact`
          // See: https://m3.material.io/foundations/adaptive-design/large-screens/overview
          `@media (min-width: ${values[key]}px) and (orientation: portrait)`
        : `@media (min-width: ${values[key]}px)`,
    values,
  }
}
