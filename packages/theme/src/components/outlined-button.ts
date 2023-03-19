/**
 * Do not edit directly
 * Generated on Sat, 18 Mar 2023 23:31:03 GMT
 */

import { TextStyle as RNTextStyle } from "react-native"

export interface Md3CompOutlinedButton {
  container: { height: number; shape: number }
  disabled: {
    labelText: { color: string; opacity: number }
    outline: { color: string; opacity: number }
  }
  focus: {
    labelText: { color: string }
    outline: { color: string }
    stateLayer: { color: string; opacity: number }
  }
  hover: {
    labelText: { color: string }
    outline: { color: string }
    stateLayer: { color: string; opacity: number }
  }
  labelText: { color: string; textStyle: Partial<RNTextStyle> }
  outline: { color: string; width: number }
  pressed: {
    labelText: { color: string }
    outline: { color: string }
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

export const outlinedButtonTheme = (
  theme: Record<string, any>,
): Md3CompOutlinedButton => ({
  container: {
    height: 40,
    shape: theme.sys.shape.corner.full,
  },
  disabled: {
    labelText: {
      color: theme.sys.color.onSurface,
      opacity: 0.38,
    },
    outline: {
      color: theme.sys.color.onSurface,
      opacity: 0.12,
    },
  },
  focus: {
    labelText: {
      color: theme.sys.color.primary,
    },
    outline: {
      color: theme.sys.color.primary,
    },
    stateLayer: {
      color: theme.sys.color.primary,
      opacity: theme.sys.state.focus.stateLayerOpacity,
    },
  },
  hover: {
    labelText: {
      color: theme.sys.color.primary,
    },
    outline: {
      color: theme.sys.color.outline,
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
  outline: {
    color: theme.sys.color.outline,
    width: 1,
  },
  pressed: {
    labelText: {
      color: theme.sys.color.primary,
    },
    outline: {
      color: theme.sys.color.outline,
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
