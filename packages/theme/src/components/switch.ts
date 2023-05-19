/**
 * Do not edit directly
 * Generated on Sat, 06 May 2023 11:12:42 GMT
 */

export interface Md3CompSwitch {
  disabled: {
    selected: {
      handle: { color: string; opacity: number }
      icon: { color: string; opacity: number }
      track: { color: string }
    }
    track: { opacity: number }
    unselected: {
      handle: { color: string; opacity: number }
      icon: { color: string; opacity: number }
      track: { color: string; outline: { color: string } }
    }
  }
  handle: { shape: number }
  pressed: { handle: { height: number; width: number } }
  selected: {
    focus: {
      handle: { color: string }
      icon: { color: string }
      stateLayer: { color: string; opacity: number }
      track: { color: string }
    }
    handle: { color: string; height: number; width: number }
    hover: {
      handle: { color: string }
      icon: { color: string }
      stateLayer: { color: string; opacity: number }
      track: { color: string }
    }
    icon: { color: string; size: number }
    pressed: {
      handle: { color: string }
      icon: { color: string }
      stateLayer: { color: string; opacity: number }
      track: { color: string }
    }
    track: { color: string }
  }
  stateLayer: { shape: number; size: number }
  track: {
    height: number
    outline: { width: number }
    shape: number
    width: number
  }
  unselected: {
    focus: {
      handle: { color: string }
      icon: { color: string }
      stateLayer: { color: string; opacity: number }
      track: { color: string; outline: { color: string } }
    }
    handle: { color: string; height: number; width: number }
    hover: {
      handle: { color: string }
      icon: { color: string }
      stateLayer: { color: string; opacity: number }
      track: { color: string; outline: { color: string } }
    }
    icon: { color: string; size: number }
    pressed: {
      handle: { color: string }
      icon: { color: string }
      stateLayer: { color: string; opacity: number }
      track: { color: string; outline: { color: string } }
    }
    track: { color: string; outline: { color: string } }
  }
  withIcon: { handle: { height: number; width: number } }
}

export const switchTheme = (theme: Record<string, any>): Md3CompSwitch => ({
  disabled: {
    selected: {
      handle: {
        color: theme.sys.color.surface,
        opacity: 1,
      },
      icon: {
        color: theme.sys.color.onSurface,
        opacity: 0.38,
      },
      track: {
        color: theme.sys.color.onSurface,
      },
    },
    track: {
      opacity: 0.12,
    },
    unselected: {
      handle: {
        color: theme.sys.color.onSurface,
        opacity: 0.38,
      },
      icon: {
        color: theme.sys.color.surfaceVariant,
        opacity: 0.38,
      },
      track: {
        color: theme.sys.color.surfaceVariant,
        outline: {
          color: theme.sys.color.onSurface,
        },
      },
    },
  },
  handle: {
    shape: theme.sys.shape.corner.full,
  },
  pressed: {
    handle: {
      height: 28,
      width: 28,
    },
  },
  selected: {
    focus: {
      handle: {
        color: theme.sys.color.primaryContainer,
      },
      icon: {
        color: theme.sys.color.onPrimaryContainer,
      },
      stateLayer: {
        color: theme.sys.color.primary,
        opacity: theme.sys.state.focus.stateLayerOpacity,
      },
      track: {
        color: theme.sys.color.primary,
      },
    },
    handle: {
      color: theme.sys.color.onPrimary,
      height: 24,
      width: 24,
    },
    hover: {
      handle: {
        color: theme.sys.color.primaryContainer,
      },
      icon: {
        color: theme.sys.color.onPrimaryContainer,
      },
      stateLayer: {
        color: theme.sys.color.primary,
        opacity: theme.sys.state.hover.stateLayerOpacity,
      },
      track: {
        color: theme.sys.color.primary,
      },
    },
    icon: {
      color: theme.sys.color.onPrimaryContainer,
      size: 16,
    },
    pressed: {
      handle: {
        color: theme.sys.color.primaryContainer,
      },
      icon: {
        color: theme.sys.color.onPrimaryContainer,
      },
      stateLayer: {
        color: theme.sys.color.primary,
        opacity: theme.sys.state.pressed.stateLayerOpacity,
      },
      track: {
        color: theme.sys.color.primary,
      },
    },
    track: {
      color: theme.sys.color.primary,
    },
  },
  stateLayer: {
    shape: theme.sys.shape.corner.full,
    size: 40,
  },
  track: {
    height: 32,
    outline: {
      width: 2,
    },
    shape: theme.sys.shape.corner.full,
    width: 52,
  },
  unselected: {
    focus: {
      handle: {
        color: theme.sys.color.onSurfaceVariant,
      },
      icon: {
        color: theme.sys.color.surfaceVariant,
      },
      stateLayer: {
        color: theme.sys.color.onSurface,
        opacity: theme.sys.state.focus.stateLayerOpacity,
      },
      track: {
        color: theme.sys.color.surfaceVariant,
        outline: {
          color: theme.sys.color.outline,
        },
      },
    },
    handle: {
      color: theme.sys.color.outline,
      height: 16,
      width: 16,
    },
    hover: {
      handle: {
        color: theme.sys.color.onSurfaceVariant,
      },
      icon: {
        color: theme.sys.color.surfaceVariant,
      },
      stateLayer: {
        color: theme.sys.color.onSurface,
        opacity: theme.sys.state.hover.stateLayerOpacity,
      },
      track: {
        color: theme.sys.color.surfaceVariant,
        outline: {
          color: theme.sys.color.outline,
        },
      },
    },
    icon: {
      color: theme.sys.color.surfaceVariant,
      size: 16,
    },
    pressed: {
      handle: {
        color: theme.sys.color.onSurfaceVariant,
      },
      icon: {
        color: theme.sys.color.surfaceVariant,
      },
      stateLayer: {
        color: theme.sys.color.onSurface,
        opacity: theme.sys.state.pressed.stateLayerOpacity,
      },
      track: {
        color: theme.sys.color.surfaceVariant,
        outline: {
          color: theme.sys.color.outline,
        },
      },
    },
    track: {
      color: theme.sys.color.surfaceVariant,
      outline: {
        color: theme.sys.color.outline,
      },
    },
  },
  withIcon: {
    handle: {
      height: 24,
      width: 24,
    },
  },
})
