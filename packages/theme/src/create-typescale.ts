import { TextStyle } from "react-native"
import {
  MdSysTypescaleLabelLargeFamily,
  MdSysTypescaleLabelLargeSize,
  MdSysTypescaleLabelMediumFamily,
  MdSysTypescaleLabelMediumSize,
  MdSysTypescaleLabelSmallFamily,
  MdSysTypescaleLabelSmallSize,
} from "./tokens"

export type Typescale = {
  "label-large": TextStyle
  "label-medium": TextStyle
  "label-small": TextStyle
}

export function createTypescale(typescale: Partial<Typescale>): Typescale {
  return {
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
      lineHeight: 20,
      fontSize: Number.parseInt(MdSysTypescaleLabelMediumSize, 10),
      letterSpacing: 0.1,
      fontWeight: "500",
    },
    "label-small": {
      fontFamily: MdSysTypescaleLabelSmallFamily,
      lineHeight: 20,
      fontSize: Number.parseInt(MdSysTypescaleLabelSmallSize, 10),
      letterSpacing: 0.1,
      fontWeight: "500",
    },
  }
}
