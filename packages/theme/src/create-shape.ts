export interface Shape {
  corner: {
    none: number
    "extra-small": number
    small: number
    medium: number
    large: number
    "extra-large": number
    full: number
  }
}

export function createShape(shape?: Partial<Shape>): Shape {
  return {
    corner: {
      none: 0,
      "extra-small": 4,
      small: 8,
      medium: 12,
      large: 16,
      "extra-large": 28,
      full: 9999,
      ...shape?.corner,
    },
  }
}
