import { Platform, TextStyle as RNTextStyle } from "react-native"
import { Typeface } from "./create-typeface"

export type TypescaleStyle = Required<
  Pick<
    RNTextStyle,
    "fontFamily" | "fontSize" | "fontWeight" | "letterSpacing" | "lineHeight"
  >
> &
  Pick<RNTextStyle, "fontStyle" | "fontVariant" | "includeFontPadding">

export interface Typescale {
  displayLarge: TypescaleStyle
  displayMedium: TypescaleStyle
  displaySmall: TypescaleStyle
  headlineLarge: TypescaleStyle
  headlineMedium: TypescaleStyle
  headlineSmall: TypescaleStyle
  titleLarge: TypescaleStyle
  titleMedium: TypescaleStyle
  titleSmall: TypescaleStyle
  labelLarge: TypescaleStyle
  labelMedium: TypescaleStyle
  labelSmall: TypescaleStyle
  bodyLarge: TypescaleStyle
  bodyMedium: TypescaleStyle
  bodySmall: TypescaleStyle
}

function getFontStyle(fontFamily: string, fontWeight: number) {
  return Platform.select({
    ios: {
      fontFamily: "System",
      fontWeight: fontWeight as unknown as NonNullable<
        RNTextStyle["fontWeight"]
      >,
    },
    web: {
      fontFamily: `${fontFamily}, "Helvetica Neue", Helvetica, Arial, sans-serif`,
      fontWeight: fontWeight as unknown as NonNullable<
        RNTextStyle["fontWeight"]
      >,
    },
    default: {
      fontFamily: `sans-serif${fontWeight === 500 ? "-medium" : ""}`,
      fontWeight: fontWeight === 700 ? ("bold" as const) : ("normal" as const),
    },
  })
}

export function createTypescale(
  typeface: Typeface,
  typescale?: Partial<Typescale>,
): Typescale {
  return {
    ...typescale,
    displayLarge: {
      fontSize: 57,
      letterSpacing: 0,
      lineHeight: 64,
      ...getFontStyle(typeface.brand, typeface.weightRegular),
      ...typescale?.displayLarge,
    },
    displayMedium: {
      fontSize: 45,
      letterSpacing: 0,
      lineHeight: 52,
      ...getFontStyle(typeface.brand, typeface.weightRegular),
      ...typescale?.displayMedium,
    },
    displaySmall: {
      fontSize: 36,
      letterSpacing: 0,
      lineHeight: 44,
      ...getFontStyle(typeface.brand, typeface.weightRegular),
      ...typescale?.displaySmall,
    },
    headlineLarge: {
      fontSize: 32,
      letterSpacing: 0,
      lineHeight: 40,
      ...getFontStyle(typeface.brand, typeface.weightRegular),
      ...typescale?.headlineLarge,
    },
    headlineMedium: {
      fontSize: 28,
      letterSpacing: 0,
      lineHeight: 36,
      ...getFontStyle(typeface.brand, typeface.weightRegular),
      ...typescale?.headlineMedium,
    },
    headlineSmall: {
      fontSize: 24,
      letterSpacing: 0,
      lineHeight: 32,
      ...getFontStyle(typeface.brand, typeface.weightRegular),
      ...typescale?.headlineSmall,
    },
    titleLarge: {
      fontSize: 22,
      letterSpacing: 0,
      lineHeight: 28,
      ...getFontStyle(typeface.brand, typeface.weightRegular),
      ...typescale?.titleLarge,
    },
    titleMedium: {
      fontSize: 16,
      letterSpacing: 0.15,
      lineHeight: 24,
      ...getFontStyle(typeface.plain, typeface.weightMedium),
      ...typescale?.titleMedium,
    },
    titleSmall: {
      fontSize: 14,
      letterSpacing: 0.1,
      lineHeight: 20,
      ...getFontStyle(typeface.plain, typeface.weightMedium),
      ...typescale?.titleSmall,
    },
    labelLarge: {
      fontSize: 14,
      letterSpacing: 0.1,
      lineHeight: 20,
      ...getFontStyle(typeface.plain, typeface.weightMedium),
      ...typescale?.labelLarge,
    },
    labelMedium: {
      fontSize: 12,
      letterSpacing: 0.5,
      lineHeight: 16,
      ...getFontStyle(typeface.plain, typeface.weightMedium),
      ...typescale?.labelMedium,
    },
    labelSmall: {
      fontSize: 11,
      letterSpacing: 0.5,
      lineHeight: 16,
      ...getFontStyle(typeface.plain, typeface.weightMedium),
      ...typescale?.labelSmall,
    },
    bodyLarge: {
      fontSize: 16,
      letterSpacing: 0.25,
      lineHeight: 24,
      ...getFontStyle(typeface.plain, typeface.weightRegular),
      ...typescale?.bodyLarge,
    },
    bodyMedium: {
      fontSize: 14,
      letterSpacing: 0.25,
      lineHeight: 20,
      ...getFontStyle(typeface.plain, typeface.weightRegular),
      ...typescale?.bodyMedium,
    },
    bodySmall: {
      fontSize: 12,
      letterSpacing: 0.4,
      lineHeight: 16,
      ...getFontStyle(typeface.plain, typeface.weightRegular),
      ...typescale?.bodySmall,
    },
  }
}
