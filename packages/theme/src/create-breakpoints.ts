type Breakpoint = "compact" | "medium" | "expanded"

export interface Breakpoints {
  keys: Breakpoint[]
  up: (key: Breakpoint | number) => string
  values: Record<Breakpoint, number>
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
    up: (key) =>
      key === "medium"
        ? // Phones in landscape mode still use `compact`
          // See: https://m3.material.io/foundations/adaptive-design/large-screens/overview
          `@media (min-width: ${values[key]}px)`
        : `@media (min-width: ${
            typeof key === "number" ? key : values[key]
          }px)`,
    values,
  }
}
