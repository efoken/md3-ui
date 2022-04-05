import { TextStyle as RNTextStyle } from "react-native"
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

export function createTypescale(typescale?: Partial<Typescale>): Typescale {
  return {
    "display-large": {
      fontFamily: MdSysTypescaleDisplayLargeFamily,
      fontSize: 57,
      fontWeight: MdSysTypescaleDisplayLargeWeight,
      letterSpacing: 0,
      lineHeight: 64,
      ...typescale?.["display-large"],
    },
    "display-medium": {
      fontFamily: MdSysTypescaleDisplayMediumFamily,
      fontSize: 45,
      fontWeight: MdSysTypescaleDisplayMediumWeight,
      letterSpacing: 0,
      lineHeight: 52,
      ...typescale?.["display-medium"],
    },
    "display-small": {
      fontFamily: MdSysTypescaleDisplaySmallFamily,
      fontSize: 36,
      fontWeight: MdSysTypescaleDisplaySmallWeight,
      letterSpacing: 0,
      lineHeight: 44,
      ...typescale?.["display-small"],
    },
    "headline-large": {
      fontFamily: MdSysTypescaleHeadlineLargeFamily,
      fontSize: 32,
      fontWeight: MdSysTypescaleHeadlineLargeWeight,
      letterSpacing: 0,
      lineHeight: 40,
      ...typescale?.["headline-large"],
    },
    "headline-medium": {
      fontFamily: MdSysTypescaleHeadlineMediumFamily,
      fontSize: 28,
      fontWeight: MdSysTypescaleHeadlineMediumWeight,
      letterSpacing: 0,
      lineHeight: 36,
      ...typescale?.["headline-medium"],
    },
    "headline-small": {
      fontFamily: MdSysTypescaleHeadlineSmallFamily,
      fontSize: 24,
      fontWeight: MdSysTypescaleHeadlineSmallWeight,
      letterSpacing: 0,
      lineHeight: 32,
      ...typescale?.["headline-small"],
    },
    "title-large": {
      fontFamily: MdSysTypescaleTitleLargeFamily,
      fontSize: 22,
      fontWeight: MdSysTypescaleTitleLargeWeight,
      letterSpacing: 0,
      lineHeight: 28,
      ...typescale?.["title-large"],
    },
    "title-medium": {
      fontFamily: MdSysTypescaleTitleMediumFamily,
      fontSize: 16,
      fontWeight: MdSysTypescaleTitleMediumWeight,
      letterSpacing: 0.15,
      lineHeight: 24,
      ...typescale?.["title-medium"],
    },
    "title-small": {
      fontFamily: MdSysTypescaleTitleSmallFamily,
      fontSize: 14,
      fontWeight: MdSysTypescaleTitleSmallWeight,
      letterSpacing: 0.1,
      lineHeight: 20,
      ...typescale?.["title-small"],
    },
    "label-large": {
      fontFamily: MdSysTypescaleLabelLargeFamily,
      fontSize: 14,
      fontWeight: MdSysTypescaleLabelLargeWeight,
      letterSpacing: 0.1,
      lineHeight: 20,
      ...typescale?.["label-large"],
    },
    "label-medium": {
      fontFamily: MdSysTypescaleLabelMediumFamily,
      fontSize: 12,
      fontWeight: MdSysTypescaleLabelMediumWeight,
      letterSpacing: 0.5,
      lineHeight: 16,
      ...typescale?.["label-medium"],
    },
    "label-small": {
      fontFamily: MdSysTypescaleLabelSmallFamily,
      fontSize: 11,
      fontWeight: MdSysTypescaleLabelSmallWeight,
      letterSpacing: 0.5,
      lineHeight: 16,
      ...typescale?.["label-small"],
    },
    "body-large": {
      fontFamily: MdSysTypescaleBodyLargeFamily,
      fontSize: 16,
      fontWeight: MdSysTypescaleBodyLargeWeight,
      letterSpacing: 0.25,
      lineHeight: 24,
      ...typescale?.["body-large"],
    },
    "body-medium": {
      fontFamily: MdSysTypescaleBodyMediumFamily,
      fontSize: 14,
      fontWeight: MdSysTypescaleBodyMediumWeight,
      letterSpacing: 0.25,
      lineHeight: 20,
      ...typescale?.["body-medium"],
    },
    "body-small": {
      fontFamily: MdSysTypescaleBodySmallFamily,
      fontSize: 12,
      fontWeight: MdSysTypescaleBodySmallWeight,
      letterSpacing: 0.4,
      lineHeight: 16,
      ...typescale?.["body-small"],
    },
  }
}
