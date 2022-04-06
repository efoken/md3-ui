export type Spacing = (value: number) => number

export function createSpacing(spacing = 8): Spacing {
  return (value: number) =>
    typeof value === "string" ? value : value * spacing
}
