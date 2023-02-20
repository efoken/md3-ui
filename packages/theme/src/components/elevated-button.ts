import { ViewStyle as RNViewStyle } from "react-native"
import type { Theme } from ".."

export interface Md3CompElevatedButton {
  container: {
    elevation: RNViewStyle
    height: number
    shape: number
  }
}

export const elevatedButton = (
  theme: Omit<Theme, "comp">,
): Md3CompElevatedButton => ({
  container: {
    elevation: theme.sys.elevation.level1,
    height: 40,
    shape: theme.sys.shape.corner.full,
  },
})
