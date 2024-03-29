/**
 * Do not edit directly
 * Generated on Sat, 06 May 2023 11:12:41 GMT
 */

import { mergeDeep } from "@md3-ui/utils"

export interface Typeface {
  brand: string
  plain: string
  weightBold: number
  weightMedium: number
  weightRegular: number
}

export function createTypeface(typeface?: Partial<Typeface>) {
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
