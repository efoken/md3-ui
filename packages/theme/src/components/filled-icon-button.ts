/**
 * Do not edit directly
 * Generated on Sat, 18 Mar 2023 23:31:03 GMT
 */

export interface Md3CompFilledIconButton {
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

export const filledIconButtonTheme = (
  theme: Record<string, any>,
): Md3CompFilledIconButton => ({
  container: {
    color: theme.sys.color.primary,
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
      color: theme.sys.color.onPrimary,
    },
    stateLayer: {
      color: theme.sys.color.onPrimary,
      opacity: theme.sys.state.focus.stateLayerOpacity,
    },
  },
  hover: {
    icon: {
      color: theme.sys.color.onPrimary,
    },
    stateLayer: {
      color: theme.sys.color.onPrimary,
      opacity: theme.sys.state.hover.stateLayerOpacity,
    },
  },
  icon: {
    color: theme.sys.color.onPrimary,
    size: 24,
  },
  pressed: {
    icon: {
      color: theme.sys.color.onPrimary,
    },
    stateLayer: {
      color: theme.sys.color.onPrimary,
      opacity: theme.sys.state.pressed.stateLayerOpacity,
    },
  },
  selected: {
    container: {
      color: theme.sys.color.primary,
    },
  },
  toggle: {
    selected: {
      focus: {
        icon: {
          color: theme.sys.color.onPrimary,
        },
        stateLayer: {
          color: theme.sys.color.onPrimary,
        },
      },
      hover: {
        icon: {
          color: theme.sys.color.onPrimary,
        },
        stateLayer: {
          color: theme.sys.color.onPrimary,
        },
      },
      icon: {
        color: theme.sys.color.onPrimary,
      },
      pressed: {
        icon: {
          color: theme.sys.color.onPrimary,
        },
        stateLayer: {
          color: theme.sys.color.onPrimary,
        },
      },
    },
    unselected: {
      focus: {
        icon: {
          color: theme.sys.color.primary,
        },
        stateLayer: {
          color: theme.sys.color.primary,
        },
      },
      hover: {
        icon: {
          color: theme.sys.color.primary,
        },
        stateLayer: {
          color: theme.sys.color.primary,
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
