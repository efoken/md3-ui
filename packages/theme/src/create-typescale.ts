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

function getNativeFontName(fontFamily: string, fontWeight: string) {
  return `${fontFamily}_${fontWeight}${
    { "400": "Regular", "500": "Medium", "700": "Bold" }[fontWeight]
  }`
}

export function createTypescale(typescale?: Partial<Typescale>): Typescale {
  return {
    "display-large": {
      fontSize: 57,
      letterSpacing: 0,
      lineHeight: 64,
      ...Platform.select({
        default: {
          fontFamily: getNativeFontName(
            MdSysTypescaleDisplayLargeFamily,
            MdSysTypescaleDisplayLargeWeight,
          ),
        },
        web: {
          fontFamily: MdSysTypescaleDisplayLargeFamily,
          fontWeight: MdSysTypescaleDisplayLargeWeight,
        },
      }),
      ...typescale?.["display-large"],
    },
    "display-medium": {
      fontSize: 45,
      letterSpacing: 0,
      lineHeight: 52,
      ...Platform.select({
        default: {
          fontFamily: getNativeFontName(
            MdSysTypescaleDisplayMediumFamily,
            MdSysTypescaleDisplayMediumWeight,
          ),
        },
        web: {
          fontFamily: MdSysTypescaleDisplayMediumFamily,
          fontWeight: MdSysTypescaleDisplayMediumWeight,
        },
      }),
      ...typescale?.["display-medium"],
    },
    "display-small": {
      fontSize: 36,
      letterSpacing: 0,
      lineHeight: 44,
      ...Platform.select({
        default: {
          fontFamily: getNativeFontName(
            MdSysTypescaleDisplaySmallFamily,
            MdSysTypescaleDisplaySmallWeight,
          ),
        },
        web: {
          fontFamily: MdSysTypescaleDisplaySmallFamily,
          fontWeight: MdSysTypescaleDisplaySmallWeight,
        },
      }),
      ...typescale?.["display-small"],
    },
    "headline-large": {
      fontSize: 32,
      letterSpacing: 0,
      lineHeight: 40,
      ...Platform.select({
        default: {
          fontFamily: getNativeFontName(
            MdSysTypescaleHeadlineLargeFamily,
            MdSysTypescaleHeadlineLargeWeight,
          ),
        },
        web: {
          fontFamily: MdSysTypescaleHeadlineLargeFamily,
          fontWeight: MdSysTypescaleHeadlineLargeWeight,
        },
      }),
      ...typescale?.["headline-large"],
    },
    "headline-medium": {
      fontSize: 28,
      letterSpacing: 0,
      lineHeight: 36,
      ...Platform.select({
        default: {
          fontFamily: getNativeFontName(
            MdSysTypescaleHeadlineMediumFamily,
            MdSysTypescaleHeadlineMediumWeight,
          ),
        },
        web: {
          fontFamily: MdSysTypescaleHeadlineMediumFamily,
          fontWeight: MdSysTypescaleHeadlineMediumWeight,
        },
      }),
      ...typescale?.["headline-medium"],
    },
    "headline-small": {
      fontSize: 24,
      letterSpacing: 0,
      lineHeight: 32,
      ...Platform.select({
        default: {
          fontFamily: getNativeFontName(
            MdSysTypescaleHeadlineSmallFamily,
            MdSysTypescaleHeadlineSmallWeight,
          ),
        },
        web: {
          fontFamily: MdSysTypescaleHeadlineSmallFamily,
          fontWeight: MdSysTypescaleHeadlineSmallWeight,
        },
      }),
      ...typescale?.["headline-small"],
    },
    "title-large": {
      fontSize: 22,
      letterSpacing: 0,
      lineHeight: 28,
      ...Platform.select({
        default: {
          fontFamily: getNativeFontName(
            MdSysTypescaleTitleLargeFamily,
            MdSysTypescaleTitleLargeWeight,
          ),
        },
        web: {
          fontFamily: MdSysTypescaleTitleLargeFamily,
          fontWeight: MdSysTypescaleTitleLargeWeight,
        },
      }),
      ...typescale?.["title-large"],
    },
    "title-medium": {
      fontSize: 16,
      letterSpacing: 0.15,
      lineHeight: 24,
      ...Platform.select({
        default: {
          fontFamily: getNativeFontName(
            MdSysTypescaleTitleMediumFamily,
            MdSysTypescaleTitleMediumWeight,
          ),
        },
        web: {
          fontFamily: MdSysTypescaleTitleMediumFamily,
          fontWeight: MdSysTypescaleTitleMediumWeight,
        },
      }),
      ...typescale?.["title-medium"],
    },
    "title-small": {
      fontSize: 14,
      letterSpacing: 0.1,
      lineHeight: 20,
      ...Platform.select({
        default: {
          fontFamily: getNativeFontName(
            MdSysTypescaleTitleSmallFamily,
            MdSysTypescaleTitleSmallWeight,
          ),
        },
        web: {
          fontFamily: MdSysTypescaleTitleSmallFamily,
          fontWeight: MdSysTypescaleTitleSmallWeight,
        },
      }),
      ...typescale?.["title-small"],
    },
    "label-large": {
      fontSize: 14,
      letterSpacing: 0.1,
      lineHeight: 20,
      ...Platform.select({
        default: {
          fontFamily: getNativeFontName(
            MdSysTypescaleLabelLargeFamily,
            MdSysTypescaleLabelLargeWeight,
          ),
        },
        web: {
          fontFamily: MdSysTypescaleLabelLargeFamily,
          fontWeight: MdSysTypescaleLabelLargeWeight,
        },
      }),
      ...typescale?.["label-large"],
    },
    "label-medium": {
      fontSize: 12,
      letterSpacing: 0.5,
      lineHeight: 16,
      ...Platform.select({
        default: {
          fontFamily: getNativeFontName(
            MdSysTypescaleLabelMediumFamily,
            MdSysTypescaleLabelMediumWeight,
          ),
        },
        web: {
          fontFamily: MdSysTypescaleLabelMediumFamily,
          fontWeight: MdSysTypescaleLabelMediumWeight,
        },
      }),
      ...typescale?.["label-medium"],
    },
    "label-small": {
      fontSize: 11,
      letterSpacing: 0.5,
      lineHeight: 16,
      ...Platform.select({
        default: {
          fontFamily: getNativeFontName(
            MdSysTypescaleLabelSmallFamily,
            MdSysTypescaleLabelSmallWeight,
          ),
        },
        web: {
          fontFamily: MdSysTypescaleLabelSmallFamily,
          fontWeight: MdSysTypescaleLabelSmallWeight,
        },
      }),
      ...typescale?.["label-small"],
    },
    "body-large": {
      fontSize: 16,
      letterSpacing: 0.25,
      lineHeight: 24,
      ...Platform.select({
        default: {
          fontFamily: getNativeFontName(
            MdSysTypescaleBodyLargeFamily,
            MdSysTypescaleBodyLargeWeight,
          ),
        },
        web: {
          fontFamily: MdSysTypescaleBodyLargeFamily,
          fontWeight: MdSysTypescaleBodyLargeWeight,
        },
      }),
      ...typescale?.["body-large"],
    },
    "body-medium": {
      fontSize: 14,
      letterSpacing: 0.25,
      lineHeight: 20,
      ...Platform.select({
        default: {
          fontFamily: getNativeFontName(
            MdSysTypescaleBodyMediumFamily,
            MdSysTypescaleBodyMediumWeight,
          ),
        },
        web: {
          fontFamily: MdSysTypescaleBodyMediumFamily,
          fontWeight: MdSysTypescaleBodyMediumWeight,
        },
      }),
      ...typescale?.["body-medium"],
    },
    "body-small": {
      fontSize: 12,
      letterSpacing: 0.4,
      lineHeight: 16,
      ...Platform.select({
        default: {
          fontFamily: getNativeFontName(
            MdSysTypescaleBodySmallFamily,
            MdSysTypescaleBodySmallWeight,
          ),
        },
        web: {
          fontFamily: MdSysTypescaleBodySmallFamily,
          fontWeight: MdSysTypescaleBodySmallWeight,
        },
      }),
      ...typescale?.["body-small"],
    },
  }
}
