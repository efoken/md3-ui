import { Platform, ViewStyle } from "react-native"

export interface Elevation {
  level0: ViewStyle
  level1: ViewStyle
  level2: ViewStyle
  level3: ViewStyle
}

export function createElevation(elevation?: Partial<Elevation>): Elevation {
  return {
    level0: Platform.select({
      default: {
        elevation: 0,
      },
      web: {
        boxShadow:
          "0px 0px 0px 0px rgba(0, 0, 0, 0.3), 0px 0px 0px 0px rgba(0, 0, 0, 0.15)",
      },
    }),
    level1: Platform.select({
      default: {
        elevation: 1,
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.18,
        shadowRadius: 1,
      },
      web: {
        boxShadow:
          "0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
      },
    }),
    level2: Platform.select({
      default: {
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 3, height: 8 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      web: {
        boxShadow:
          "0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
      },
    }),
    level3: Platform.select({
      default: {
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 5, height: 11 },
        shadowOpacity: 0.22,
        shadowRadius: 3,
      },
      web: {
        boxShadow:
          "0px 1px 3px 0px rgba(0, 0, 0, 0.3), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)",
      },
    }),
    ...elevation,
  }
}
