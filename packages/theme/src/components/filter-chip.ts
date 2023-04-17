/**
 * Do not edit directly
 * Generated on Wed, 12 Apr 2023 15:53:00 GMT
 */

import { TextStyle as RNTextStyle } from "react-native"

export interface Md3CompFilterChip {
  container: {
    height: number
    shape: number
    surfaceTintLayer: { color: string }
  }
  disabled: { labelText: { color: string; opacity: number } }
  dragged: { container: { elevation: any } }
  elevated: {
    container: { elevation: any; shadowColor: string }
    disabled: { container: { color: string; elevation: any; opacity: number } }
    focus: { container: { elevation: any } }
    hover: { container: { elevation: any } }
    pressed: { container: { elevation: any } }
    selected: { container: { color: string } }
    unselected: { container: { color: string } }
  }
  flat: {
    container: { elevation: any }
    disabled: {
      selected: { container: { color: string; opacity: number } }
      unselected: { outline: { color: string; opacity: number } }
    }
    selected: {
      container: { color: string }
      focus: { container: { elevation: any } }
      hover: { container: { elevation: any } }
      outline: { width: number }
      pressed: { container: { elevation: any } }
    }
    unselected: {
      focus: { container: { elevation: any }; outline: { color: string } }
      hover: { container: { elevation: any } }
      outline: { color: string; width: number }
      pressed: { container: { elevation: any } }
    }
  }
  labelText: { textStyle: Partial<RNTextStyle> }
  selected: {
    dragged: {
      labelText: { color: string }
      stateLayer: { color: string; opacity: number }
    }
    focus: {
      labelText: { color: string }
      stateLayer: { color: string; opacity: number }
    }
    hover: {
      labelText: { color: string }
      stateLayer: { color: string; opacity: number }
    }
    labelText: { color: string }
    pressed: {
      labelText: { color: string }
      stateLayer: { color: string; opacity: number }
    }
  }
  unselected: {
    dragged: {
      labelText: { color: string }
      stateLayer: { color: string; opacity: number }
    }
    focus: {
      labelText: { color: string }
      stateLayer: { color: string; opacity: number }
    }
    hover: {
      labelText: { color: string }
      stateLayer: { color: string; opacity: number }
    }
    labelText: { color: string }
    pressed: {
      labelText: { color: string }
      stateLayer: { color: string; opacity: number }
    }
  }
  withIcon: { icon: { size: number } }
  withLeadingIcon: {
    disabled: { leadingIcon: { color: string; opacity: number } }
    selected: {
      dragged: { leadingIcon: { color: string } }
      focus: { leadingIcon: { color: string } }
      hover: { leadingIcon: { color: string } }
      leadingIcon: { color: string }
      pressed: { leadingIcon: { color: string } }
    }
    unselected: {
      dragged: { leadingIcon: { color: string } }
      focus: { leadingIcon: { color: string } }
      hover: { leadingIcon: { color: string } }
      leadingIcon: { color: string }
      pressed: { leadingIcon: { color: string } }
    }
  }
  withTrailingIcon: {
    disabled: { trailingIcon: { color: string; opacity: number } }
    selected: {
      dragged: { trailingIcon: { color: string } }
      focus: { trailingIcon: { color: string } }
      hover: { trailingIcon: { color: string } }
      pressed: { trailingIcon: { color: string } }
      trailingIcon: { color: string }
    }
    unselected: {
      dragged: { trailingIcon: { color: string } }
      focus: { trailingIcon: { color: string } }
      hover: { trailingIcon: { color: string } }
      pressed: { trailingIcon: { color: string } }
      trailingIcon: { color: string }
    }
  }
}

export const filterChipTheme = (
  theme: Record<string, any>,
): Md3CompFilterChip => ({
  container: {
    height: 32,
    shape: theme.sys.shape.corner.small,
    surfaceTintLayer: {
      color: theme.sys.color.surfaceTint,
    },
  },
  disabled: {
    labelText: {
      color: theme.sys.color.onSurface,
      opacity: 0.38,
    },
  },
  dragged: {
    container: {
      elevation: theme.sys.elevation.level4,
    },
  },
  elevated: {
    container: {
      elevation: theme.sys.elevation.level1,
      shadowColor: theme.sys.color.shadow,
    },
    disabled: {
      container: {
        color: theme.sys.color.onSurface,
        elevation: theme.sys.elevation.level0,
        opacity: 0.12,
      },
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
    selected: {
      container: {
        color: theme.sys.color.secondaryContainer,
      },
    },
    unselected: {
      container: {
        color: theme.sys.color.surface,
      },
    },
  },
  flat: {
    container: {
      elevation: theme.sys.elevation.level0,
    },
    disabled: {
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
    selected: {
      container: {
        color: theme.sys.color.secondaryContainer,
      },
      focus: {
        container: {
          elevation: theme.sys.elevation.level0,
        },
      },
      hover: {
        container: {
          elevation: theme.sys.elevation.level1,
        },
      },
      outline: {
        width: 0,
      },
      pressed: {
        container: {
          elevation: theme.sys.elevation.level0,
        },
      },
    },
    unselected: {
      focus: {
        container: {
          elevation: theme.sys.elevation.level0,
        },
        outline: {
          color: theme.sys.color.onSurfaceVariant,
        },
      },
      hover: {
        container: {
          elevation: theme.sys.elevation.level0,
        },
      },
      outline: {
        color: theme.sys.color.outline,
        width: 1,
      },
      pressed: {
        container: {
          elevation: theme.sys.elevation.level0,
        },
      },
    },
  },
  labelText: {
    textStyle: theme.sys.typescale.labelLarge,
  },
  selected: {
    dragged: {
      labelText: {
        color: theme.sys.color.onSecondaryContainer,
      },
      stateLayer: {
        color: theme.sys.color.onSecondaryContainer,
        opacity: theme.sys.state.dragged.stateLayerOpacity,
      },
    },
    focus: {
      labelText: {
        color: theme.sys.color.onSecondaryContainer,
      },
      stateLayer: {
        color: theme.sys.color.onSecondaryContainer,
        opacity: theme.sys.state.focus.stateLayerOpacity,
      },
    },
    hover: {
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
    },
    pressed: {
      labelText: {
        color: theme.sys.color.onSecondaryContainer,
      },
      stateLayer: {
        color: theme.sys.color.onSurfaceVariant,
        opacity: theme.sys.state.pressed.stateLayerOpacity,
      },
    },
  },
  unselected: {
    dragged: {
      labelText: {
        color: theme.sys.color.onSurfaceVariant,
      },
      stateLayer: {
        color: theme.sys.color.onSurfaceVariant,
        opacity: theme.sys.state.dragged.stateLayerOpacity,
      },
    },
    focus: {
      labelText: {
        color: theme.sys.color.onSurfaceVariant,
      },
      stateLayer: {
        color: theme.sys.color.onSurfaceVariant,
        opacity: theme.sys.state.focus.stateLayerOpacity,
      },
    },
    hover: {
      labelText: {
        color: theme.sys.color.onSurfaceVariant,
      },
      stateLayer: {
        color: theme.sys.color.onSurfaceVariant,
        opacity: theme.sys.state.hover.stateLayerOpacity,
      },
    },
    labelText: {
      color: theme.sys.color.onSurfaceVariant,
    },
    pressed: {
      labelText: {
        color: theme.sys.color.onSurfaceVariant,
      },
      stateLayer: {
        color: theme.sys.color.onSecondaryContainer,
        opacity: theme.sys.state.pressed.stateLayerOpacity,
      },
    },
  },
  withIcon: {
    icon: {
      size: 18,
    },
  },
  withLeadingIcon: {
    disabled: {
      leadingIcon: {
        color: theme.sys.color.onSurface,
        opacity: 0.38,
      },
    },
    selected: {
      dragged: {
        leadingIcon: {
          color: theme.sys.color.onSecondaryContainer,
        },
      },
      focus: {
        leadingIcon: {
          color: theme.sys.color.onSecondaryContainer,
        },
      },
      hover: {
        leadingIcon: {
          color: theme.sys.color.onSecondaryContainer,
        },
      },
      leadingIcon: {
        color: theme.sys.color.onSecondaryContainer,
      },
      pressed: {
        leadingIcon: {
          color: theme.sys.color.onSecondaryContainer,
        },
      },
    },
    unselected: {
      dragged: {
        leadingIcon: {
          color: theme.sys.color.primary,
        },
      },
      focus: {
        leadingIcon: {
          color: theme.sys.color.primary,
        },
      },
      hover: {
        leadingIcon: {
          color: theme.sys.color.primary,
        },
      },
      leadingIcon: {
        color: theme.sys.color.primary,
      },
      pressed: {
        leadingIcon: {
          color: theme.sys.color.primary,
        },
      },
    },
  },
  withTrailingIcon: {
    disabled: {
      trailingIcon: {
        color: theme.sys.color.onSurface,
        opacity: 0.38,
      },
    },
    selected: {
      dragged: {
        trailingIcon: {
          color: theme.sys.color.onSecondaryContainer,
        },
      },
      focus: {
        trailingIcon: {
          color: theme.sys.color.onSecondaryContainer,
        },
      },
      hover: {
        trailingIcon: {
          color: theme.sys.color.onSecondaryContainer,
        },
      },
      pressed: {
        trailingIcon: {
          color: theme.sys.color.onSecondaryContainer,
        },
      },
      trailingIcon: {
        color: theme.sys.color.onSecondaryContainer,
      },
    },
    unselected: {
      dragged: {
        trailingIcon: {
          color: theme.sys.color.onSurfaceVariant,
        },
      },
      focus: {
        trailingIcon: {
          color: theme.sys.color.onSurfaceVariant,
        },
      },
      hover: {
        trailingIcon: {
          color: theme.sys.color.onSurfaceVariant,
        },
      },
      pressed: {
        trailingIcon: {
          color: theme.sys.color.onSurfaceVariant,
        },
      },
      trailingIcon: {
        color: theme.sys.color.onSurfaceVariant,
      },
    },
  },
})
