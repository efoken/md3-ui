/**
 * Do not edit directly
 * Generated on Wed, 29 Mar 2023 09:38:35 GMT
 */

export interface Md3CompOutlinedIconButton {
  container: { shape: number; size: number }
  disabled: {
    icon: { color: string; opacity: number }
    selected: { container: { color: string; opacity: number } }
    unselected: { outline: { color: string; opacity: number } }
  }
  focus: { stateLayer: { opacity: number } }
  hover: { stateLayer: { opacity: number } }
  icon: { size: number }
  pressed: { stateLayer: { opacity: number } }
  selected: {
    container: { color: string }
    focus: { icon: { color: string }; stateLayer: { color: string } }
    hover: { icon: { color: string }; stateLayer: { color: string } }
    icon: { color: string }
    pressed: { icon: { color: string }; stateLayer: { color: string } }
  }
  unselected: {
    focus: { icon: { color: string }; stateLayer: { color: string } }
    hover: { icon: { color: string }; stateLayer: { color: string } }
    icon: { color: string }
    outline: { color: string; width: number }
    pressed: { icon: { color: string }; stateLayer: { color: string } }
  }
}

export const outlinedIconButtonTheme = (
  theme: Record<string, any>,
): Md3CompOutlinedIconButton => ({
  container: {
    shape: theme.sys.shape.corner.full,
    size: 40,
  },
  disabled: {
    icon: {
      color: theme.sys.color.onSurface,
      opacity: 0.38,
    },
    selected: {
      container: {
        color: theme.sys.color.onSurface,
        opacity: 0.12,
      },
    },
    unselected: {
      outline: {
        color: theme.sys.color.onSurface,
        opacity: 0.12,
      },
    },
  },
  focus: {
    stateLayer: {
      opacity: theme.sys.state.hover.stateLayerOpacity,
    },
  },
  hover: {
    stateLayer: {
      opacity: theme.sys.state.hover.stateLayerOpacity,
    },
  },
  icon: {
    size: 24,
  },
  pressed: {
    stateLayer: {
      opacity: theme.sys.state.pressed.stateLayerOpacity,
    },
  },
  selected: {
    container: {
      color: theme.sys.color.inverseSurface,
    },
    focus: {
      icon: {
        color: theme.sys.color.inverseOnSurface,
      },
      stateLayer: {
        color: theme.sys.color.inverseOnSurface,
      },
    },
    hover: {
      icon: {
        color: theme.sys.color.inverseOnSurface,
      },
      stateLayer: {
        color: theme.sys.color.inverseOnSurface,
      },
    },
    icon: {
      color: theme.sys.color.inverseOnSurface,
    },
    pressed: {
      icon: {
        color: theme.sys.color.inverseOnSurface,
      },
      stateLayer: {
        color: theme.sys.color.inverseOnSurface,
      },
    },
  },
  unselected: {
    focus: {
      icon: {
        color: theme.sys.color.onSurfaceVariant,
      },
      stateLayer: {
        color: theme.sys.color.onSurfaceVariant,
      },
    },
    hover: {
      icon: {
        color: theme.sys.color.onSurfaceVariant,
      },
      stateLayer: {
        color: theme.sys.color.onSurfaceVariant,
      },
    },
    icon: {
      color: theme.sys.color.onSurfaceVariant,
    },
    outline: {
      color: theme.sys.color.outline,
      width: 1,
    },
    pressed: {
      icon: {
        color: theme.sys.color.onSurface,
      },
      stateLayer: {
        color: theme.sys.color.onSurface,
      },
    },
  },
})
