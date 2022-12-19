export interface Shape {
  corner: {
    none: number
    extraSmall: number
    small: number
    medium: number
    large: number
    extraLarge: number
    full: number
  }
}

interface CreateShapeOptions {
  corner?: Partial<Shape["corner"]>
}

export function createShape(shape: CreateShapeOptions = {}): Shape {
  return {
    ...shape,
    corner: {
      none: 0,
      extraSmall: 4,
      small: 8,
      medium: 12,
      large: 16,
      extraLarge: 28,
      full: 9999,
      ...shape.corner,
    },
  }
}
