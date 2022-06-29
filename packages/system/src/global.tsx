import {
  Global as EmotionGlobal,
  GlobalProps as EmotionGlobalProps,
} from "@emotion/react"
import * as React from "react"
import { Platform } from "react-native"

export interface GlobalProps extends EmotionGlobalProps {}

export const Global: React.VFC<GlobalProps> = ({ styles }) =>
  Platform.OS === "web" ? <EmotionGlobal styles={styles} /> : null
