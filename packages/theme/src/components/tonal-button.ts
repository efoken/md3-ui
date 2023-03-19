/**
 * Do not edit directly
 * Generated on Sat, 18 Mar 2023 23:31:03 GMT
 */

import { TextStyle as RNTextStyle } from "react-native"

export interface Md3CompTonalButton {
  container: {
    color: string
    elevation: any
    height: number
    shadowColor: string
    shape: number
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

export const tonalButtonTheme = (
  theme: Record<string, any>,
): Md3CompTonalButton => ({
  container: {
    color: theme.sys.color.secondaryContainer,
    elevation: theme.sys.elevation.level0,
    height: 40,
    shadowColor: theme.sys.color.shadow,
    shape: theme.sys.shape.corner.full,
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
      elevation: theme.sys.elevation.level0,
    },
    labelText: {
      color: theme.sys.color.onSecondaryContainer,
    },
    stateLayer: {
      color: theme.sys.color.onSecondaryContainer,
      opacity: theme.sys.state.focus.stateLayerOpacity,
    },
  },
  hover: {
    container: {
      elevation: theme.sys.elevation.level1,
    },
    labelText: {
      color: theme.sys.color.onSecondaryContainer,
    },
    stateLayer: {
      color: theme.sys.color.onSecondaryContainer,
      opacity: theme.sys.state.hover.stateLayerOpacity,
    },
  },
  labelText: {
    color: theme.sys.color.onSecondaryContainer,
    textStyle: theme.sys.typescale.labelLarge,
  },
  pressed: {
    container: {
      elevation: theme.sys.elevation.level0,
    },
    labelText: {
      color: theme.sys.color.onSecondaryContainer,
    },
    stateLayer: {
      color: theme.sys.color.onSecondaryContainer,
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
        color: theme.sys.color.onSecondaryContainer,
      },
    },
    hover: {
      icon: {
        color: theme.sys.color.onSecondaryContainer,
      },
    },
    icon: {
      color: theme.sys.color.onSecondaryContainer,
      size: 18,
    },
    pressed: {
      icon: {
        color: theme.sys.color.onSecondaryContainer,
      },
    },
  },
})
