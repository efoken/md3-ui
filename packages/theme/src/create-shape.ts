/**
 * Do not edit directly
 * Generated on Tue, 28 Feb 2023 14:24:16 GMT
 */

import { mergeDeep } from "@md3-ui/utils"

export function createShape(shape: any) {
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

export type Shape = ReturnType<typeof createShape>
