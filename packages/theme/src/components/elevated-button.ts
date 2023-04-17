/**
 * Do not edit directly
 * Generated on Wed, 12 Apr 2023 15:53:00 GMT
 */

import { TextStyle as RNTextStyle } from "react-native"

export interface Md3CompElevatedButton {
  container: {
    color: string
    elevation: any
    height: number
    shadowColor: string
    shape: number
    surfaceTintLayer: { color: string }
  }
  disabled: {
    container: { color: string; elevation: any; opacity: number }
    labelText: { color: string; opacity: number }
  }
  focus: {
    container: { elevation: any }
    labelText: { color: string }
    stateLayer: { color: string; opacity: number }
  }
  hover: {
    container: { elevation: any }
    labelText: { color: string }
    stateLayer: { color: string; opacity: number }
  }
  labelText: { color: string; textStyle: Partial<RNTextStyle> }
  pressed: {
    container: { elevation: any }
    labelText: { color: string }
    stateLayer: { color: string; opacity: number }
  }
  withIcon: {
    disabled: { icon: { color: string; opacity: number } }
    focus: { icon: { color: string } }
    hover: { icon: { color: string } }
    icon: { color: string; size: number }
    pressed: { icon: { color: string } }
  }
}

export const elevatedButtonTheme = (
  theme: Record<string, any>,
): Md3CompElevatedButton => ({
  container: {
    color: theme.sys.color.surface,
    elevation: theme.sys.elevation.level1,
    height: 40,
    shadowColor: theme.sys.color.shadow,
    shape: theme.sys.shape.corner.full,
    surfaceTintLayer: {
      color: theme.sys.color.surfaceTint,
    },
  },
  disabled: {
    container: {
      color: theme.sys.color.onSurface,
      elevation: theme.sys.elevation.level0,
      opacity: 0.12,
    },
    labelText: {
      color: theme.sys.color.onSurface,
      opacity: 0.38,
    },
  },
  focus: {
    container: {
      elevation: theme.sys.elevation.level1,
    },
    labelText: {
      color: theme.sys.color.primary,
    },
    stateLayer: {
      color: theme.sys.color.primary,
      opacity: theme.sys.state.focus.stateLayerOpacity,
    },
  },
  hover: {
    container: {
      elevation: theme.sys.elevation.level2,
    },
    labelText: {
      color: theme.sys.color.primary,
    },
    stateLayer: {
      color: theme.sys.color.primary,
      opacity: theme.sys.state.hover.stateLayerOpacity,
    },
  },
  labelText: {
    color: theme.sys.color.primary,
    textStyle: theme.sys.typescale.labelLarge,
  },
  pressed: {
    container: {
      elevation: theme.sys.elevation.level1,
    },
    labelText: {
      color: theme.sys.color.primary,
    },
    stateLayer: {
      color: theme.sys.color.primary,
      opacity: theme.sys.state.pressed.stateLayerOpacity,
    },
  },
  withIcon: {
    disabled: {
      icon: {
        color: theme.sys.color.onSurface,
        opacity: 0.38,
      },
    },
    focus: {
      icon: {
        color: theme.sys.color.primary,
      },
    },
    hover: {
      icon: {
        color: theme.sys.color.primary,
      },
    },
    icon: {
      color: theme.sys.color.primary,
      size: 18,
    },
    pressed: {
      icon: {
        color: theme.sys.color.primary,
      },
    },
  },
})
