/**
 * Do not edit directly
 * Generated on Wed, 29 Mar 2023 09:38:35 GMT
 */

export interface Md3CompTonalIconButton {
  container: { color: string; shape: number; size: number }
  disabled: {
    container: { color: string; opacity: number }
    icon: { color: string; opacity: number }
  }
  focus: {
    icon: { color: string }
    stateLayer: { color: string; opacity: number }
  }
  hover: {
    icon: { color: string }
    stateLayer: { color: string; opacity: number }
  }
  icon: { color: string; size: number }
  pressed: {
    icon: { color: string }
    stateLayer: { color: string; opacity: number }
  }
  selected: { container: { color: string } }
  toggle: {
    selected: {
      focus: { icon: { color: string }; stateLayer: { color: string } }
      hover: { icon: { color: string }; stateLayer: { color: string } }
      icon: { color: string }
      pressed: { icon: { color: string }; stateLayer: { color: string } }
    }
    unselected: {
      focus: { icon: { color: string }; stateLayer: { color: string } }
      hover: { icon: { color: string }; stateLayer: { color: string } }
      icon: { color: string }
      pressed: { icon: { color: string }; stateLayer: { color: string } }
    }
  }
  unselected: { container: { color: string } }
}

export const tonalIconButtonTheme = (
  theme: Record<string, any>,
): Md3CompTonalIconButton => ({
  container: {
    color: theme.sys.color.secondaryContainer,
    shape: theme.sys.shape.corner.full,
    size: 40,
  },
  disabled: {
    container: {
      color: theme.sys.color.onSurface,
      opacity: 0.12,
    },
    icon: {
      color: theme.sys.color.onSurface,
      opacity: 0.38,
    },
  },
  focus: {
    icon: {
      color: theme.sys.color.onSecondaryContainer,
    },
    stateLayer: {
      color: theme.sys.color.onSecondaryContainer,
      opacity: theme.sys.state.focus.stateLayerOpacity,
    },
  },
  hover: {
    icon: {
      color: theme.sys.color.onSecondaryContainer,
    },
    stateLayer: {
      color: theme.sys.color.onSecondaryContainer,
      opacity: theme.sys.state.hover.stateLayerOpacity,
    },
  },
  icon: {
    color: theme.sys.color.onSecondaryContainer,
    size: 24,
  },
  pressed: {
    icon: {
      color: theme.sys.color.onSecondaryContainer,
    },
    stateLayer: {
      color: theme.sys.color.onSecondaryContainer,
      opacity: theme.sys.state.pressed.stateLayerOpacity,
    },
  },
  selected: {
    container: {
      color: theme.sys.color.secondaryContainer,
    },
  },
  toggle: {
    selected: {
      focus: {
        icon: {
          color: theme.sys.color.onSecondaryContainer,
        },
        stateLayer: {
          color: theme.sys.color.onSecondaryContainer,
        },
      },
      hover: {
        icon: {
          color: theme.sys.color.onSecondaryContainer,
        },
        stateLayer: {
          color: theme.sys.color.onSecondaryContainer,
        },
      },
      icon: {
        color: theme.sys.color.onSecondaryContainer,
      },
      pressed: {
        icon: {
          color: theme.sys.color.onSecondaryContainer,
        },
        stateLayer: {
          color: theme.sys.color.onSecondaryContainer,
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
      pressed: {
        icon: {
          color: theme.sys.color.onSurfaceVariant,
        },
        stateLayer: {
          color: theme.sys.color.onSurfaceVariant,
        },
      },
    },
  },
  unselected: {
    container: {
      color: theme.sys.color.surfaceVariant,
    },
  },
})
