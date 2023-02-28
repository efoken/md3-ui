/**
 * Do not edit directly
 * Generated on Tue, 28 Feb 2023 14:24:16 GMT
 */

import { mergeDeep } from "@md3-ui/utils"

export function createTypeface(typeface: any) {
  return mergeDeep(
    {
      brand: "Roboto",
      plain: "Roboto",
      weightBold: 700,
      weightMedium: 500,
      weightRegular: 400,
    },
    typeface,
  )
}

export type Typeface = ReturnType<typeof createTypeface>
