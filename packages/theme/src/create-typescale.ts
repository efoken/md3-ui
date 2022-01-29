import { TextStyle } from "react-native"
import {
  MdSysTypescaleBodyLargeFamily,
  MdSysTypescaleBodyLargeSize,
  MdSysTypescaleBodyMediumFamily,
  MdSysTypescaleBodyMediumSize,
  MdSysTypescaleBodySmallFamily,
  MdSysTypescaleBodySmallSize,
  MdSysTypescaleDisplayLargeFamily,
  MdSysTypescaleDisplayLargeSize,
  MdSysTypescaleDisplayMediumFamily,
  MdSysTypescaleDisplayMediumSize,
  MdSysTypescaleDisplaySmallFamily,
  MdSysTypescaleDisplaySmallSize,
  MdSysTypescaleHeadlineLargeFamily,
  MdSysTypescaleHeadlineLargeSize,
  MdSysTypescaleHeadlineMediumFamily,
  MdSysTypescaleHeadlineMediumSize,
  MdSysTypescaleHeadlineSmallFamily,
  MdSysTypescaleHeadlineSmallSize,
  MdSysTypescaleLabelLargeFamily,
  MdSysTypescaleLabelLargeSize,
  MdSysTypescaleLabelMediumFamily,
  MdSysTypescaleLabelMediumSize,
  MdSysTypescaleLabelSmallFamily,
  MdSysTypescaleLabelSmallSize,
  MdSysTypescaleTitleLargeFamily,
  MdSysTypescaleTitleLargeSize,
  MdSysTypescaleTitleMediumFamily,
  MdSysTypescaleTitleMediumSize,
  MdSysTypescaleTitleSmallFamily,
  MdSysTypescaleTitleSmallSize,
} from "./tokens"

export interface Typescale {
  "display-large": TextStyle
  "display-medium": TextStyle
  "display-small": TextStyle
  "headline-large": TextStyle
  "headline-medium": TextStyle
  "headline-small": TextStyle
  "title-large": TextStyle
  "title-medium": TextStyle
  "title-small": TextStyle
  "label-large": TextStyle
  "label-medium": TextStyle
  "label-small": TextStyle
  "body-large": TextStyle
  "body-medium": TextStyle
  "body-small": TextStyle
}

export function createTypescale(typescale?: Partial<Typescale>): Typescale {
  return {
    "display-large": {
      fontFamily: MdSysTypescaleDisplayLargeFamily,
      fontSize: Number.parseInt(MdSysTypescaleDisplayLargeSize, 10),
      fontWeight: "400",
      letterSpacing: 0,
      lineHeight: 64,
      ...typescale?.["display-large"],
    },
    "display-medium": {
      fontFamily: MdSysTypescaleDisplayMediumFamily,
      fontSize: Number.parseInt(MdSysTypescaleDisplayMediumSize, 10),
      fontWeight: "400",
      letterSpacing: 0,
      lineHeight: 52,
      ...typescale?.["display-medium"],
    },
    "display-small": {
      fontFamily: MdSysTypescaleDisplaySmallFamily,
      fontSize: Number.parseInt(MdSysTypescaleDisplaySmallSize, 10),
      fontWeight: "400",
      letterSpacing: 0,
      lineHeight: 44,
      ...typescale?.["display-small"],
    },
    "headline-large": {
      fontFamily: MdSysTypescaleHeadlineLargeFamily,
      fontSize: Number.parseInt(MdSysTypescaleHeadlineLargeSize, 10),
      fontWeight: "400",
      letterSpacing: 0,
      lineHeight: 40,
      ...typescale?.["headline-large"],
    },
    "headline-medium": {
      fontFamily: MdSysTypescaleHeadlineMediumFamily,
      fontSize: Number.parseInt(MdSysTypescaleHeadlineMediumSize, 10),
      fontWeight: "400",
      letterSpacing: 0,
      lineHeight: 36,
      ...typescale?.["headline-medium"],
    },
    "headline-small": {
      fontFamily: MdSysTypescaleHeadlineSmallFamily,
      fontSize: Number.parseInt(MdSysTypescaleHeadlineSmallSize, 10),
      fontWeight: "400",
      letterSpacing: 0,
      lineHeight: 32,
      ...typescale?.["headline-small"],
    },
    "title-large": {
      fontFamily: MdSysTypescaleTitleLargeFamily,
      fontSize: Number.parseInt(MdSysTypescaleTitleLargeSize, 10),
      fontWeight: "400",
      letterSpacing: 0,
      lineHeight: 28,
      ...typescale?.["title-large"],
    },
    "title-medium": {
      fontFamily: MdSysTypescaleTitleMediumFamily,
      fontSize: Number.parseInt(MdSysTypescaleTitleMediumSize, 10),
      fontWeight: "500",
      letterSpacing: 0.15,
      lineHeight: 24,
      ...typescale?.["title-medium"],
    },
    "title-small": {
      fontFamily: MdSysTypescaleTitleSmallFamily,
      fontSize: Number.parseInt(MdSysTypescaleTitleSmallSize, 10),
      fontWeight: "500",
      letterSpacing: 0.1,
      lineHeight: 20,
      ...typescale?.["title-small"],
    },
    "label-large": {
      fontFamily: MdSysTypescaleLabelLargeFamily,
      fontSize: Number.parseInt(MdSysTypescaleLabelLargeSize, 10),
      fontWeight: "500",
      letterSpacing: 0.1,
      lineHeight: 20,
      ...typescale?.["label-large"],
    },
    "label-medium": {
      fontFamily: MdSysTypescaleLabelMediumFamily,
      fontSize: Number.parseInt(MdSysTypescaleLabelMediumSize, 10),
      fontWeight: "500",
      letterSpacing: 0.5,
      lineHeight: 16,
      ...typescale?.["label-medium"],
    },
    "label-small": {
      fontFamily: MdSysTypescaleLabelSmallFamily,
      fontSize: Number.parseInt(MdSysTypescaleLabelSmallSize, 10),
      fontWeight: "500",
      letterSpacing: 0.5,
      lineHeight: 6,
      ...typescale?.["label-small"],
    },
    "body-large": {
      fontFamily: MdSysTypescaleBodyLargeFamily,
      fontSize: Number.parseInt(MdSysTypescaleBodyLargeSize, 10),
      fontWeight: "400",
      letterSpacing: 0.25,
      lineHeight: 24,
      ...typescale?.["body-large"],
    },
    "body-medium": {
      fontFamily: MdSysTypescaleBodyMediumFamily,
      fontSize: Number.parseInt(MdSysTypescaleBodyMediumSize, 10),
      fontWeight: "400",
      letterSpacing: 0.25,
      lineHeight: 20,
      ...typescale?.["body-medium"],
    },
    "body-small": {
      fontFamily: MdSysTypescaleBodySmallFamily,
      fontSize: Number.parseInt(MdSysTypescaleBodySmallSize, 10),
      fontWeight: "400",
      letterSpacing: 0.4,
      lineHeight: 16,
      ...typescale?.["body-small"],
    },
  }
}
