import { Platform, TextStyle as RNTextStyle } from "react-native"
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

export type TypescaleStyle = Pick<
  RNTextStyle,
  | "fontFamily"
  | "fontSize"
  | "fontStyle"
  | "fontVariant"
  | "fontWeight"
  | "includeFontPadding"
  | "letterSpacing"
  | "lineHeight"
>

export interface Typescale {
  "display-large": TypescaleStyle
  "display-medium": TypescaleStyle
  "display-small": TypescaleStyle
  "headline-large": TypescaleStyle
  "headline-medium": TypescaleStyle
  "headline-small": TypescaleStyle
  "title-large": TypescaleStyle
  "title-medium": TypescaleStyle
  "title-small": TypescaleStyle
  "label-large": TypescaleStyle
  "label-medium": TypescaleStyle
  "label-small": TypescaleStyle
  "body-large": TypescaleStyle
  "body-medium": TypescaleStyle
  "body-small": TypescaleStyle
}

export interface Typography {
  typeface: Typeface
  typescale: Typescale
}

function getFontStyle(
  fontFamily: string,
  fontWeight: RNTextStyle["fontWeight"],
) {
  return Platform.select({
    ios: {
      fontFamily: "System",
      fontWeight,
    },
    web: {
      fontFamily: `${fontFamily}, "Helvetica Neue", Helvetica, Arial, sans-serif`,
      fontWeight,
    },
    default: {
      fontFamily: `sans-serif${fontWeight === "500" ? "-medium" : ""}`,
      fontWeight:
        fontWeight === "700" ? ("bold" as const) : ("normal" as const),
    },
  })
}

export function createTypography(typography?: Partial<Typography>): Typography {
  const typeface = {
    plain: MdRefTypefacePlain,
    brand: MdRefTypefaceBrand,
    ...typography?.typeface,
    weight: {
      bold: MdRefTypefaceWeightBold as any,
      medium: MdRefTypefaceWeightMedium as any,
      regular: MdRefTypefaceWeightRegular as any,
      ...typography?.typeface?.weight,
    },
  }

  const typescale = {
    ...typography?.typescale,
    "display-large": {
      fontSize: 57,
      letterSpacing: 0,
      lineHeight: 64,
      ...getFontStyle(typeface.brand, typeface.weight.regular),
      ...typography?.typescale?.["display-large"],
    },
    "display-medium": {
      fontSize: 45,
      letterSpacing: 0,
      lineHeight: 52,
      ...getFontStyle(typeface.brand, typeface.weight.regular),
      ...typography?.typescale?.["display-medium"],
    },
    "display-small": {
      fontSize: 36,
      letterSpacing: 0,
      lineHeight: 44,
      ...getFontStyle(typeface.brand, typeface.weight.regular),
      ...typography?.typescale?.["display-small"],
    },
    "headline-large": {
      fontSize: 32,
      letterSpacing: 0,
      lineHeight: 40,
      ...getFontStyle(typeface.brand, typeface.weight.regular),
      ...typography?.typescale?.["headline-large"],
    },
    "headline-medium": {
      fontSize: 28,
      letterSpacing: 0,
      lineHeight: 36,
      ...getFontStyle(typeface.brand, typeface.weight.regular),
      ...typography?.typescale?.["headline-medium"],
    },
    "headline-small": {
      fontSize: 24,
      letterSpacing: 0,
      lineHeight: 32,
      ...getFontStyle(typeface.brand, typeface.weight.regular),
      ...typography?.typescale?.["headline-small"],
    },
    "title-large": {
      fontSize: 22,
      letterSpacing: 0,
      lineHeight: 28,
      ...getFontStyle(typeface.brand, typeface.weight.regular),
      ...typography?.typescale?.["title-large"],
    },
    "title-medium": {
      fontSize: 16,
      letterSpacing: 0.15,
      lineHeight: 24,
      ...getFontStyle(typeface.plain, typeface.weight.medium),
      ...typography?.typescale?.["title-medium"],
    },
    "title-small": {
      fontSize: 14,
      letterSpacing: 0.1,
      lineHeight: 20,
      ...getFontStyle(typeface.plain, typeface.weight.medium),
      ...typography?.typescale?.["title-small"],
    },
    "label-large": {
      fontSize: 14,
      letterSpacing: 0.1,
      lineHeight: 20,
      ...getFontStyle(typeface.plain, typeface.weight.medium),
      ...typography?.typescale?.["label-large"],
    },
    "label-medium": {
      fontSize: 12,
      letterSpacing: 0.5,
      lineHeight: 16,
      ...getFontStyle(typeface.plain, typeface.weight.medium),
      ...typography?.typescale?.["label-medium"],
    },
    "label-small": {
      fontSize: 11,
      letterSpacing: 0.5,
      lineHeight: 16,
      ...getFontStyle(typeface.plain, typeface.weight.medium),
      ...typography?.typescale?.["label-small"],
    },
    "body-large": {
      fontSize: 16,
      letterSpacing: 0.25,
      lineHeight: 24,
      ...getFontStyle(typeface.plain, typeface.weight.regular),
      ...typography?.typescale?.["body-large"],
    },
    "body-medium": {
      fontSize: 14,
      letterSpacing: 0.25,
      lineHeight: 20,
      ...getFontStyle(typeface.plain, typeface.weight.regular),
      ...typography?.typescale?.["body-medium"],
    },
    "body-small": {
      fontSize: 12,
      letterSpacing: 0.4,
      lineHeight: 16,
      ...getFontStyle(typeface.plain, typeface.weight.regular),
      ...typography?.typescale?.["body-small"],
    },
  }

  return {
    typeface,
    typescale,
  }
}
