/**
 * Do not edit directly
 * Generated on Sat, 06 May 2023 11:12:41 GMT
 */

import { mergeDeep } from "@md3-ui/utils"

export interface Shape {
  corner: {
    extraLarge: number
    extraSmall: number
    full: number
    large: number
    medium: number
    none: number
    small: number
  }
}

export function createShape(shape?: Partial<Shape>) {
  return mergeDeep(
    {
      corner: {
        extraLarge: 28,
        extraSmall: 4,
        full: 999,
        large: 16,
        medium: 12,
        none: 0,
        small: 8,
      },
    },
    shape,
  )
}
