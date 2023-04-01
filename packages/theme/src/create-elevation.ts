import { clamp } from "@md3-ui/utils"
import { Platform, ViewStyle as RNViewStyle } from "react-native"

export interface Elevation {
  level0: RNViewStyle
  level1: RNViewStyle
  level2: RNViewStyle
  level3: RNViewStyle
  level4: RNViewStyle
  level5: RNViewStyle
}

const getKeyY = (level: number) => {
  const level1Y = clamp(0, level, 1)
  const level4Y = clamp(0, level - 3, 1)
  const level5Y = 2 * clamp(0, level - 4, 1)
  return level1Y + level4Y + level5Y
}

const getKeyBlur = (level: number) => {
  const level1Blur = 2 * clamp(0, level, 1)
  const level3Blur = clamp(0, level - 2, 1)
  const level5Blur = clamp(0, level - 4, 1)
  return level1Blur + level3Blur + level5Blur
}

const getAmbientY = (level: number) => {
  const level1Y = clamp(0, level, 1)
  const level2Y = clamp(0, level - 1, 1)
  const level3To5Y = 2 * clamp(0, level - 2, 3)
  return level1Y + level2Y + level3To5Y
}

const getAmbientBlur = (level: number) => {
  const level1To2Blur = 3 * clamp(0, level, 2)
  const level3To5Blur = 2 * clamp(0, level - 2, 3)
  return level1To2Blur + level3To5Blur
}

const getAmbientSpread = (level: number) => {
  const level1To4Spread = clamp(0, level, 4)
  const level5Spread = 2 * clamp(0, level - 4, 1)
  return level1To4Spread + level5Spread
}

const createShadow = (elevation: number, level: number) =>
  Platform.select({
    default: {
      elevation,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: getAmbientY(level),
      },
      shadowOpacity: 0.45,
      shadowRadius: getAmbientBlur(level),
    },
    web: {
      boxShadow: `0px ${getKeyY(level)}px ${getKeyBlur(
        level,
      )}px 0px rgba(0, 0, 0, 0.3), 0px ${getAmbientY(level)}px ${getAmbientBlur(
        level,
      )}px ${getAmbientSpread(level)}px rgba(0, 0, 0, 0.15)`,
      elevation,
    },
  })

export function createElevation(elevation?: Partial<Elevation>): Elevation {
  return {
    level0: createShadow(0, 0),
    level1: createShadow(1, 1),
    level2: createShadow(3, 2),
    level3: createShadow(6, 3),
    level4: createShadow(8, 4),
    level5: createShadow(12, 5),
    ...elevation,
  }
}
