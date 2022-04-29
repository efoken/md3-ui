import { Platform, ViewStyle } from "react-native"

export interface Elevation {
  level0: ViewStyle
  level1: ViewStyle
  level2: ViewStyle
  level3: ViewStyle
  level4: ViewStyle
  level5: ViewStyle
}

export function createElevation(elevation?: Partial<Elevation>): Elevation {
  return {
    level0: Platform.select({
      default: {
        elevation: 0,
        shadowColor: "#000",
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
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.45,
        shadowRadius: 3,
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
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.45,
        shadowRadius: 6,
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
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.45,
        shadowRadius: 8,
      },
      web: {
        boxShadow:
          "0px 1px 3px 0px rgba(0, 0, 0, 0.3), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)",
      },
    }),
    level4: Platform.select({
      default: {
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.45,
        shadowRadius: 10,
      },
      web: {
        boxShadow:
          "0px 2px 3px 0px rgba(0, 0, 0, 0.3), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)",
      },
    }),
    level5: Platform.select({
      default: {
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.45,
        shadowRadius: 12,
      },
      web: {
        boxShadow:
          "0px 4px 4px 0px rgba(0, 0, 0, 0.3), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)",
      },
    }),
    ...elevation,
  }
}
