export type Spacing = (value: string | number) => string | number

export function createSpacing(spacing = 8): Spacing {
  return (value: string | number) =>
    typeof value === "string" ? value : value * spacing
}
