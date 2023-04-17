/**
 * Do not edit directly
 * Generated on Wed, 12 Apr 2023 15:53:00 GMT
 */

import { TextStyle as RNTextStyle } from "react-native"

export interface Md3CompExtendedFab {
  primary: {
    container: {
      color: string
      elevation: any
      height: number
      shadowColor: string
      shape: number
    }
    focus: {
      container: { elevation: any }
      icon: { color: string }
      labelText: { color: string }
      stateLayer: { color: string; opacity: number }
    }
    hover: {
      container: { elevation: any }
      icon: { color: string }
      labelText: { color: string }
      stateLayer: { color: string; opacity: number }
    }
    icon: { color: string; size: number }
    labelText: { color: string; textStyle: Partial<RNTextStyle> }
    lowered: {
      container: { elevation: any }
      focus: { container: { elevation: any } }
      hover: { container: { elevation: any } }
      pressed: { container: { elevation: any } }
    }
    pressed: {
      container: { elevation: any }
      icon: { color: string }
      labelText: { color: string }
      stateLayer: { color: string; opacity: number }
    }
  }
}

export const extendedFabTheme = (
  theme: Record<string, any>,
): Md3CompExtendedFab => ({
  primary: {
    container: {
      color: theme.sys.color.primaryContainer,
      elevation: theme.sys.elevation.level3,
      height: 56,
      shadowColor: theme.sys.color.shadow,
      shape: theme.sys.shape.corner.large,
    },
    focus: {
      container: {
        elevation: theme.sys.elevation.level3,
      },
      icon: {
        color: theme.sys.color.onPrimaryContainer,
      },
      labelText: {
        color: theme.sys.color.onPrimaryContainer,
      },
      stateLayer: {
        color: theme.sys.color.onPrimaryContainer,
        opacity: theme.sys.state.focus.stateLayerOpacity,
      },
    },
    hover: {
      container: {
        elevation: theme.sys.elevation.level4,
      },
      icon: {
        color: theme.sys.color.onPrimaryContainer,
      },
      labelText: {
        color: theme.sys.color.onPrimaryContainer,
      },
      stateLayer: {
        color: theme.sys.color.onPrimaryContainer,
        opacity: theme.sys.state.hover.stateLayerOpacity,
      },
    },
    icon: {
      color: theme.sys.color.onPrimaryContainer,
      size: 24,
    },
    labelText: {
      color: theme.sys.color.onPrimaryContainer,
      textStyle: theme.sys.typescale.labelLarge,
    },
    lowered: {
      container: {
        elevation: theme.sys.elevation.level1,
      },
      focus: {
        container: {
          elevation: theme.sys.elevation.level1,
        },
      },
      hover: {
        container: {
          elevation: theme.sys.elevation.level2,
        },
      },
      pressed: {
        container: {
          elevation: theme.sys.elevation.level1,
        },
      },
    },
    pressed: {
      container: {
        elevation: theme.sys.elevation.level3,
      },
      icon: {
        color: theme.sys.color.onPrimaryContainer,
      },
      labelText: {
        color: theme.sys.color.onPrimaryContainer,
      },
      stateLayer: {
        color: theme.sys.color.onPrimaryContainer,
        opacity: theme.sys.state.pressed.stateLayerOpacity,
      },
    },
  },
})
