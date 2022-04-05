import { Global as EmotionGlobal } from "@emotion/react"
import * as React from "react"
import { Platform } from "react-native"

export interface GlobalProps
  extends React.ComponentProps<typeof EmotionGlobal> {}

export const Global: React.VFC<GlobalProps> = ({ styles }) =>
  Platform.OS === "web" ? <EmotionGlobal styles={styles} /> : null
