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

export type Typescale = {
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

export function createTypescale(typescale: Partial<Typescale>): Typescale {
  return {
    "display-large": {
      fontFamily: MdSysTypescaleDisplayLargeFamily,
      lineHeight: 64,
      fontSize: Number.parseInt(MdSysTypescaleDisplayLargeSize, 10),
      letterSpacing: 0,
      fontWeight: "400",
      ...typescale["display-large"],
    },
    "display-medium": {
      fontFamily: MdSysTypescaleDisplayMediumFamily,
      lineHeight: 52,
      fontSize: Number.parseInt(MdSysTypescaleDisplayMediumSize, 10),
      letterSpacing: 0,
      fontWeight: "400",
      ...typescale["display-medium"],
    },
    "display-small": {
      fontFamily: MdSysTypescaleDisplaySmallFamily,
      lineHeight: 44,
      fontSize: Number.parseInt(MdSysTypescaleDisplaySmallSize, 10),
      letterSpacing: 0,
      fontWeight: "400",
      ...typescale["display-small"],
    },
    "headline-large": {
      fontFamily: MdSysTypescaleHeadlineLargeFamily,
      lineHeight: 40,
      fontSize: Number.parseInt(MdSysTypescaleHeadlineLargeSize, 10),
      letterSpacing: 0,
      fontWeight: "400",
      ...typescale["headline-large"],
    },
    "headline-medium": {
      fontFamily: MdSysTypescaleHeadlineMediumFamily,
      lineHeight: 36,
      fontSize: Number.parseInt(MdSysTypescaleHeadlineMediumSize, 10),
      letterSpacing: 0,
      fontWeight: "400",
      ...typescale["headline-medium"],
    },
    "headline-small": {
      fontFamily: MdSysTypescaleHeadlineSmallFamily,
      lineHeight: 32,
      fontSize: Number.parseInt(MdSysTypescaleHeadlineSmallSize, 10),
      letterSpacing: 0,
      fontWeight: "400",
      ...typescale["headline-small"],
    },
    "title-large": {
      fontFamily: MdSysTypescaleTitleLargeFamily,
      lineHeight: 28,
      fontSize: Number.parseInt(MdSysTypescaleTitleLargeSize, 10),
      letterSpacing: 0,
      fontWeight: "400",
      ...typescale["title-large"],
    },
    "title-medium": {
      fontFamily: MdSysTypescaleTitleMediumFamily,
      lineHeight: 24,
      fontSize: Number.parseInt(MdSysTypescaleTitleMediumSize, 10),
      letterSpacing: 0.15,
      fontWeight: "500",
      ...typescale["title-medium"],
    },
    "title-small": {
      fontFamily: MdSysTypescaleTitleSmallFamily,
      lineHeight: 20,
      fontSize: Number.parseInt(MdSysTypescaleTitleSmallSize, 10),
      letterSpacing: 0.1,
      fontWeight: "500",
      ...typescale["title-small"],
    },
    "label-large": {
      fontFamily: MdSysTypescaleLabelLargeFamily,
      lineHeight: 20,
      fontSize: Number.parseInt(MdSysTypescaleLabelLargeSize, 10),
      letterSpacing: 0.1,
      fontWeight: "500",
      ...typescale["label-large"],
    },
    "label-medium": {
      fontFamily: MdSysTypescaleLabelMediumFamily,
      lineHeight: 16,
      fontSize: Number.parseInt(MdSysTypescaleLabelMediumSize, 10),
      letterSpacing: 0.5,
      fontWeight: "500",
      ...typescale["label-medium"],
    },
    "label-small": {
      fontFamily: MdSysTypescaleLabelSmallFamily,
      lineHeight: 6,
      fontSize: Number.parseInt(MdSysTypescaleLabelSmallSize, 10),
      letterSpacing: 0.5,
      fontWeight: "500",
      ...typescale["label-small"],
    },
    "body-large": {
      fontFamily: MdSysTypescaleBodyLargeFamily,
      lineHeight: 24,
      fontSize: Number.parseInt(MdSysTypescaleBodyLargeSize, 10),
      letterSpacing: 0.25,
      fontWeight: "400",
      ...typescale["body-large"],
    },
    "body-medium": {
      fontFamily: MdSysTypescaleBodyMediumFamily,
      lineHeight: 20,
      fontSize: Number.parseInt(MdSysTypescaleBodyMediumSize, 10),
      letterSpacing: 0.25,
      fontWeight: "400",
      ...typescale["body-medium"],
    },
    "body-small": {
      fontFamily: MdSysTypescaleBodySmallFamily,
      lineHeight: 16,
      fontSize: Number.parseInt(MdSysTypescaleBodySmallSize, 10),
      letterSpacing: 0.4,
      fontWeight: "400",
      ...typescale["body-small"],
    },
  }
}
