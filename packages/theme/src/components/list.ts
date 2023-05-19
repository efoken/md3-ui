/**
 * Do not edit directly
 * Generated on Sat, 06 May 2023 11:12:42 GMT
 */

import { TextStyle as RNTextStyle } from "react-native"

export interface Md3CompList {
  listItem: {
    container: { color: string; elevation: any; shape: number }
    disabled: {
      labelText: { color: string; opacity: number }
      leadingIcon: { color: string; opacity: number }
      stateLayer: { color: string; opacity: number }
      trailingIcon: { color: string; opacity: number }
    }
    dragged: {
      container: { elevation: any }
      labelText: { color: string }
      leadingIcon: { icon: { color: string } }
      stateLayer: { color: string; opacity: number }
      trailingIcon: { icon: { color: string } }
    }
    focus: {
      labelText: { color: string }
      leadingIcon: { icon: { color: string } }
      stateLayer: { color: string; opacity: number }
      trailingIcon: { icon: { color: string } }
    }
    hover: {
      labelText: { color: string }
      leadingIcon: { icon: { color: string } }
      stateLayer: { color: string; opacity: number }
      trailingIcon: { icon: { color: string } }
    }
    labelText: { color: string; textStyle: Partial<RNTextStyle> }
    large: { leadingVideo: { height: number } }
    leadingAvatar: { color: string; shape: number; size: number }
    leadingAvatarLabel: { color: string; textStyle: Partial<RNTextStyle> }
    leadingIcon: { color: string; size: number }
    leadingImage: { height: number; shape: number; width: number }
    leadingVideo: { shape: number; width: number }
    oneLine: { container: { height: number } }
    overline: { color: string; textStyle: Partial<RNTextStyle> }
    pressed: {
      labelText: { color: string }
      leadingIcon: { icon: { color: string } }
      stateLayer: { color: string; opacity: number }
      trailingIcon: { icon: { color: string } }
    }
    selected: { trailingIcon: { color: string } }
    small: { leadingVideo: { height: number } }
    supportingText: { color: string; textStyle: Partial<RNTextStyle> }
    threeLine: { container: { height: number } }
    trailingIcon: { color: string; size: number }
    trailingSupportingText: { color: string; textStyle: Partial<RNTextStyle> }
    twoLine: { container: { height: number } }
    unselected: { trailingIcon: { color: string } }
  }
}

export const listTheme = (theme: Record<string, any>): Md3CompList => ({
  listItem: {
    container: {
      color: theme.sys.color.surface,
      elevation: theme.sys.elevation.level0,
      shape: theme.sys.shape.corner.none,
    },
    disabled: {
      labelText: {
        color: theme.sys.color.onSurface,
        opacity: 0.38,
      },
      leadingIcon: {
        color: theme.sys.color.onSurface,
        opacity: 0.38,
      },
      stateLayer: {
        color: theme.sys.color.onSurface,
        opacity: theme.sys.state.focus.stateLayerOpacity,
      },
      trailingIcon: {
        color: theme.sys.color.onSurface,
        opacity: 0.38,
      },
    },
    dragged: {
      container: {
        elevation: theme.sys.elevation.level4,
      },
      labelText: {
        color: theme.sys.color.onSurface,
      },
      leadingIcon: {
        icon: {
          color: theme.sys.color.onSurfaceVariant,
        },
      },
      stateLayer: {
        color: theme.sys.color.onSurface,
        opacity: theme.sys.state.pressed.stateLayerOpacity,
      },
      trailingIcon: {
        icon: {
          color: theme.sys.color.onSurfaceVariant,
        },
      },
    },
    focus: {
      labelText: {
        color: theme.sys.color.onSurface,
      },
      leadingIcon: {
        icon: {
          color: theme.sys.color.onSurfaceVariant,
        },
      },
      stateLayer: {
        color: theme.sys.color.onSurface,
        opacity: theme.sys.state.focus.stateLayerOpacity,
      },
      trailingIcon: {
        icon: {
          color: theme.sys.color.onSurfaceVariant,
        },
      },
    },
    hover: {
      labelText: {
        color: theme.sys.color.onSurface,
      },
      leadingIcon: {
        icon: {
          color: theme.sys.color.onSurfaceVariant,
        },
      },
      stateLayer: {
        color: theme.sys.color.onSurface,
        opacity: theme.sys.state.hover.stateLayerOpacity,
      },
      trailingIcon: {
        icon: {
          color: theme.sys.color.onSurfaceVariant,
        },
      },
    },
    labelText: {
      color: theme.sys.color.onSurface,
      textStyle: theme.sys.typescale.bodyLarge,
    },
    large: {
      leadingVideo: {
        height: 69,
      },
    },
    leadingAvatar: {
      color: theme.sys.color.primaryContainer,
      shape: theme.sys.shape.corner.full,
      size: 40,
    },
    leadingAvatarLabel: {
      color: theme.sys.color.onPrimaryContainer,
      textStyle: theme.sys.typescale.titleMedium,
    },
    leadingIcon: {
      color: theme.sys.color.onSurfaceVariant,
      size: 18,
    },
    leadingImage: {
      height: 56,
      shape: theme.sys.shape.corner.none,
      width: 56,
    },
    leadingVideo: {
      shape: theme.sys.shape.corner.none,
      width: 100,
    },
    oneLine: {
      container: {
        height: 56,
      },
    },
    overline: {
      color: theme.sys.color.onSurfaceVariant,
      textStyle: theme.sys.typescale.labelSmall,
    },
    pressed: {
      labelText: {
        color: theme.sys.color.onSurface,
      },
      leadingIcon: {
        icon: {
          color: theme.sys.color.onSurfaceVariant,
        },
      },
      stateLayer: {
        color: theme.sys.color.onSurface,
        opacity: theme.sys.state.pressed.stateLayerOpacity,
      },
      trailingIcon: {
        icon: {
          color: theme.sys.color.onSurfaceVariant,
        },
      },
    },
    selected: {
      trailingIcon: {
        color: theme.sys.color.primary,
      },
    },
    small: {
      leadingVideo: {
        height: 56,
      },
    },
    supportingText: {
      color: theme.sys.color.onSurfaceVariant,
      textStyle: theme.sys.typescale.bodyMedium,
    },
    threeLine: {
      container: {
        height: 88,
      },
    },
    trailingIcon: {
      color: theme.sys.color.onSurfaceVariant,
      size: 24,
    },
    trailingSupportingText: {
      color: theme.sys.color.onSurfaceVariant,
      textStyle: theme.sys.typescale.labelSmall,
    },
    twoLine: {
      container: {
        height: 72,
      },
    },
    unselected: {
      trailingIcon: {
        color: theme.sys.color.onSurface,
      },
    },
  },
})
