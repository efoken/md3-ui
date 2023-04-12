import { Global as EmotionGlobal, Interpolation } from "@emotion/react"
import { Theme } from "@md3-ui/theme"
import * as React from "react"
import { Platform } from "react-native"

export interface GlobalProps {
  styles: Interpolation<Theme>
}

export const Global: React.FC<GlobalProps> = ({ styles }) =>
  Platform.OS === "web" ? <EmotionGlobal styles={styles as any} /> : null
