import { Global as EmotionGlobal, Interpolation } from "@emotion/react"
import { Theme } from "@md3-ui/theme"
import { Platform } from "react-native"

export interface GlobalProps {
  styles: Interpolation<Theme>
}

export const Global: React.FC<GlobalProps> = ({ styles }) =>
  Platform.OS === "web" ? <EmotionGlobal styles={styles as any} /> : null
