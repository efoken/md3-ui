import { TextStyle as RNTextStyle } from "react-native"
import {
  MdRefTypefaceBrand,
  MdRefTypefacePlain,
  MdRefTypefaceWeightBold,
  MdRefTypefaceWeightMedium,
  MdRefTypefaceWeightRegular,
} from "./tokens"

export interface Typeface {
  plain: string
  brand: string
  weight: {
    bold: NonNullable<RNTextStyle["fontWeight"]>
    medium: NonNullable<RNTextStyle["fontWeight"]>
    regular: NonNullable<RNTextStyle["fontWeight"]>
  }
}

export function createTypeface(typeface?: Partial<Typeface>): Typeface {
  return {
    plain: MdRefTypefacePlain,
    brand: MdRefTypefaceBrand,
    ...typeface,
    weight: {
      bold: MdRefTypefaceWeightBold as any,
      medium: MdRefTypefaceWeightMedium as any,
      regular: MdRefTypefaceWeightRegular as any,
      ...typeface?.weight,
    },
  }
}
