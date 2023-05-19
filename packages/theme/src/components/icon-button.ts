/**
 * Do not edit directly
 * Generated on Sat, 06 May 2023 11:12:42 GMT
 */

export interface Md3CompIconButton {
  disabled: { icon: { color: string; opacity: number } }
  icon: { size: number }
  selected: {
    focus: {
      icon: { color: string }
      stateLayer: { color: string; opacity: number }
    }
    hover: {
      icon: { color: string }
      stateLayer: { color: string; opacity: number }
    }
    icon: { color: string }
    pressed: {
      icon: { color: string }
      stateLayer: { color: string; opacity: number }
    }
  }
  stateLayer: { shape: number; size: number }
  unselected: {
    focus: {
      icon: { color: string }
      stateLayer: { color: string; opacity: number }
    }
    hover: {
      icon: { color: string }
      stateLayer: { color: string; opacity: number }
    }
    icon: { color: string }
    pressed: {
      icon: { color: string }
      stateLayer: { color: string; opacity: number }
    }
  }
}

export const iconButtonTheme = (
  theme: Record<string, any>,
): Md3CompIconButton => ({
  disabled: {
    icon: {
      color: theme.sys.color.onSurface,
      opacity: 0.38,
    },
  },
  icon: {
    size: 24,
  },
  selected: {
    focus: {
      icon: {
        color: theme.sys.color.primary,
      },
      stateLayer: {
        color: theme.sys.color.primary,
        opacity: theme.sys.state.focus.stateLayerOpacity,
      },
    },
    hover: {
      icon: {
        color: theme.sys.color.primary,
      },
      stateLayer: {
        color: theme.sys.color.primary,
        opacity: theme.sys.state.hover.stateLayerOpacity,
      },
    },
    icon: {
      color: theme.sys.color.primary,
    },
    pressed: {
      icon: {
        color: theme.sys.color.primary,
      },
      stateLayer: {
        color: theme.sys.color.primary,
        opacity: theme.sys.state.pressed.stateLayerOpacity,
      },
    },
  },
  stateLayer: {
    shape: theme.sys.shape.corner.full,
    size: 40,
  },
  unselected: {
    focus: {
      icon: {
        color: theme.sys.color.onSurfaceVariant,
      },
      stateLayer: {
        color: theme.sys.color.onSurfaceVariant,
        opacity: theme.sys.state.focus.stateLayerOpacity,
      },
    },
    hover: {
      icon: {
        color: theme.sys.color.onSurfaceVariant,
      },
      stateLayer: {
        color: theme.sys.color.onSurfaceVariant,
        opacity: theme.sys.state.hover.stateLayerOpacity,
      },
    },
    icon: {
      color: theme.sys.color.onSurfaceVariant,
    },
    pressed: {
      icon: {
        color: theme.sys.color.onSurfaceVariant,
      },
      stateLayer: {
        color: theme.sys.color.onSurfaceVariant,
        opacity: theme.sys.state.pressed.stateLayerOpacity,
      },
    },
  },
})
