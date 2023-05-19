/**
 * Do not edit directly
 * Generated on Sat, 06 May 2023 11:12:42 GMT
 */

import { TextStyle as RNTextStyle } from "react-native"

export interface Md3CompSnackbar {
  action: {
    focus: {
      labelText: { color: string }
      stateLayer: { color: string; opacity: number }
    }
    hover: {
      labelText: { color: string }
      stateLayer: { color: string; opacity: number }
    }
    labelText: { color: string; textStyle: Partial<RNTextStyle> }
    pressed: {
      labelText: { color: string }
      stateLayer: { color: string; opacity: number }
    }
  }
  container: {
    color: string
    elevation: any
    shadowColor: string
    shape: number
  }
  icon: {
    color: string
    focus: {
      icon: { color: string }
      stateLayer: { color: string; opacity: number }
    }
    hover: {
      icon: { color: string }
      stateLayer: { color: string; opacity: number }
    }
    pressed: {
      icon: { color: string }
      stateLayer: { color: string; opacity: number }
    }
    size: number
  }
  supportingText: { color: string; textStyle: Partial<RNTextStyle> }
  withSingleLine: { container: { height: number } }
  withTwoLines: { container: { height: number } }
}

export const snackbarTheme = (theme: Record<string, any>): Md3CompSnackbar => ({
  action: {
    focus: {
      labelText: {
        color: theme.sys.color.inversePrimary,
      },
      stateLayer: {
        color: theme.sys.color.inversePrimary,
        opacity: theme.sys.state.focus.stateLayerOpacity,
      },
    },
    hover: {
      labelText: {
        color: theme.sys.color.inversePrimary,
      },
      stateLayer: {
        color: theme.sys.color.inversePrimary,
        opacity: theme.sys.state.hover.stateLayerOpacity,
      },
    },
    labelText: {
      color: theme.sys.color.inversePrimary,
      textStyle: theme.sys.typescale.labelLarge,
    },
    pressed: {
      labelText: {
        color: theme.sys.color.inversePrimary,
      },
      stateLayer: {
        color: theme.sys.color.inversePrimary,
        opacity: theme.sys.state.pressed.stateLayerOpacity,
      },
    },
  },
  container: {
    color: theme.sys.color.inverseSurface,
    elevation: theme.sys.elevation.level3,
    shadowColor: theme.sys.color.shadow,
    shape: theme.sys.shape.corner.extraSmall,
  },
  icon: {
    color: theme.sys.color.inverseOnSurface,
    focus: {
      icon: {
        color: theme.sys.color.inverseOnSurface,
      },
      stateLayer: {
        color: theme.sys.color.inverseOnSurface,
        opacity: theme.sys.state.focus.stateLayerOpacity,
      },
    },
    hover: {
      icon: {
        color: theme.sys.color.inverseOnSurface,
      },
      stateLayer: {
        color: theme.sys.color.inverseOnSurface,
        opacity: theme.sys.state.hover.stateLayerOpacity,
      },
    },
    pressed: {
      icon: {
        color: theme.sys.color.inverseOnSurface,
      },
      stateLayer: {
        color: theme.sys.color.inverseOnSurface,
        opacity: theme.sys.state.pressed.stateLayerOpacity,
      },
    },
    size: 24,
  },
  supportingText: {
    color: theme.sys.color.inverseOnSurface,
    textStyle: theme.sys.typescale.bodyMedium,
  },
  withSingleLine: {
    container: {
      height: 48,
    },
  },
  withTwoLines: {
    container: {
      height: 68,
    },
  },
})
