import { Platform, TextStyle as RNTextStyle } from "react-native"
import {
  MdSysTypescaleBodyLargeFamily,
  MdSysTypescaleBodyLargeWeight,
  MdSysTypescaleBodyMediumFamily,
  MdSysTypescaleBodyMediumWeight,
  MdSysTypescaleBodySmallFamily,
  MdSysTypescaleBodySmallWeight,
  MdSysTypescaleDisplayLargeFamily,
  MdSysTypescaleDisplayLargeWeight,
  MdSysTypescaleDisplayMediumFamily,
  MdSysTypescaleDisplayMediumWeight,
  MdSysTypescaleDisplaySmallFamily,
  MdSysTypescaleDisplaySmallWeight,
  MdSysTypescaleHeadlineLargeFamily,
  MdSysTypescaleHeadlineLargeWeight,
  MdSysTypescaleHeadlineMediumFamily,
  MdSysTypescaleHeadlineMediumWeight,
  MdSysTypescaleHeadlineSmallFamily,
  MdSysTypescaleHeadlineSmallWeight,
  MdSysTypescaleLabelLargeFamily,
  MdSysTypescaleLabelLargeWeight,
  MdSysTypescaleLabelMediumFamily,
  MdSysTypescaleLabelMediumWeight,
  MdSysTypescaleLabelSmallFamily,
  MdSysTypescaleLabelSmallWeight,
  MdSysTypescaleTitleLargeFamily,
  MdSysTypescaleTitleLargeWeight,
  MdSysTypescaleTitleMediumFamily,
  MdSysTypescaleTitleMediumWeight,
  MdSysTypescaleTitleSmallFamily,
  MdSysTypescaleTitleSmallWeight,
} from "./tokens"

type TypescaleStyle = Pick<
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

export function createTypescale(typescale?: Partial<Typescale>): Typescale {
  return {
    "display-large": {
      fontSize: 57,
      letterSpacing: 0,
      lineHeight: 64,
      ...getFontStyle(
        MdSysTypescaleDisplayLargeFamily,
        MdSysTypescaleDisplayLargeWeight,
      ),
      ...typescale?.["display-large"],
    },
    "display-medium": {
      fontSize: 45,
      letterSpacing: 0,
      lineHeight: 52,
      ...getFontStyle(
        MdSysTypescaleDisplayMediumFamily,
        MdSysTypescaleDisplayMediumWeight,
      ),
      ...typescale?.["display-medium"],
    },
    "display-small": {
      fontSize: 36,
      letterSpacing: 0,
      lineHeight: 44,
      ...getFontStyle(
        MdSysTypescaleDisplaySmallFamily,
        MdSysTypescaleDisplaySmallWeight,
      ),
      ...typescale?.["display-small"],
    },
    "headline-large": {
      fontSize: 32,
      letterSpacing: 0,
      lineHeight: 40,
      ...getFontStyle(
        MdSysTypescaleHeadlineLargeFamily,
        MdSysTypescaleHeadlineLargeWeight,
      ),
      ...typescale?.["headline-large"],
    },
    "headline-medium": {
      fontSize: 28,
      letterSpacing: 0,
      lineHeight: 36,
      ...getFontStyle(
        MdSysTypescaleHeadlineMediumFamily,
        MdSysTypescaleHeadlineMediumWeight,
      ),
      ...typescale?.["headline-medium"],
    },
    "headline-small": {
      fontSize: 24,
      letterSpacing: 0,
      lineHeight: 32,
      ...getFontStyle(
        MdSysTypescaleHeadlineSmallFamily,
        MdSysTypescaleHeadlineSmallWeight,
      ),
      ...typescale?.["headline-small"],
    },
    "title-large": {
      fontSize: 22,
      letterSpacing: 0,
      lineHeight: 28,
      ...getFontStyle(
        MdSysTypescaleTitleLargeFamily,
        MdSysTypescaleTitleLargeWeight,
      ),
      ...typescale?.["title-large"],
    },
    "title-medium": {
      fontSize: 16,
      letterSpacing: 0.15,
      lineHeight: 24,
      ...getFontStyle(
        MdSysTypescaleTitleMediumFamily,
        MdSysTypescaleTitleMediumWeight,
      ),
      ...typescale?.["title-medium"],
    },
    "title-small": {
      fontSize: 14,
      letterSpacing: 0.1,
      lineHeight: 20,
      ...getFontStyle(
        MdSysTypescaleTitleSmallFamily,
        MdSysTypescaleTitleSmallWeight,
      ),
      ...typescale?.["title-small"],
    },
    "label-large": {
      fontSize: 14,
      letterSpacing: 0.1,
      lineHeight: 20,
      ...getFontStyle(
        MdSysTypescaleLabelLargeFamily,
        MdSysTypescaleLabelLargeWeight,
      ),
      ...typescale?.["label-large"],
    },
    "label-medium": {
      fontSize: 12,
      letterSpacing: 0.5,
      lineHeight: 16,
      ...getFontStyle(
        MdSysTypescaleLabelMediumFamily,
        MdSysTypescaleLabelMediumWeight,
      ),
      ...typescale?.["label-medium"],
    },
    "label-small": {
      fontSize: 11,
      letterSpacing: 0.5,
      lineHeight: 16,
      ...getFontStyle(
        MdSysTypescaleLabelSmallFamily,
        MdSysTypescaleLabelSmallWeight,
      ),
      ...typescale?.["label-small"],
    },
    "body-large": {
      fontSize: 16,
      letterSpacing: 0.25,
      lineHeight: 24,
      ...getFontStyle(
        MdSysTypescaleBodyLargeFamily,
        MdSysTypescaleBodyLargeWeight,
      ),
      ...typescale?.["body-large"],
    },
    "body-medium": {
      fontSize: 14,
      letterSpacing: 0.25,
      lineHeight: 20,
      ...getFontStyle(
        MdSysTypescaleBodyMediumFamily,
        MdSysTypescaleBodyMediumWeight,
      ),
      ...typescale?.["body-medium"],
    },
    "body-small": {
      fontSize: 12,
      letterSpacing: 0.4,
      lineHeight: 16,
      ...getFontStyle(
        MdSysTypescaleBodySmallFamily,
        MdSysTypescaleBodySmallWeight,
      ),
      ...typescale?.["body-small"],
    },
  }
}
