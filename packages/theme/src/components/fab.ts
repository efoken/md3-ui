/**
 * Do not edit directly
 * Generated on Wed, 12 Apr 2023 15:53:00 GMT
 */

export interface Md3CompFab {
  primary: {
    large: {
      container: {
        color: string
        elevation: any
        height: number
        shadowColor: string
        shape: number
        width: number
      }
      focus: {
        container: { elevation: any }
        icon: { color: string }
        stateLayer: { color: string; opacity: number }
      }
      hover: {
        container: { elevation: any }
        icon: { color: string }
        stateLayer: { color: string; opacity: number }
      }
      icon: { color: string; size: number }
      lowered: {
        container: { elevation: any }
        focus: { container: { elevation: any } }
        hover: { container: { elevation: any } }
        pressed: { container: { elevation: any } }
      }
      pressed: {
        container: { elevation: any }
        icon: { color: string }
        stateLayer: { color: string; opacity: number }
      }
    }
    container: {
      color: string
      elevation: any
      height: number
      shadowColor: string
      shape: number
      width: number
    }
    focus: {
      container: { elevation: any }
      icon: { color: string }
      stateLayer: { color: string; opacity: number }
    }
    hover: {
      container: { elevation: any }
      icon: { color: string }
      stateLayer: { color: string; opacity: number }
    }
    icon: { color: string; size: number }
    lowered: {
      container: { elevation: any }
      focus: { container: { elevation: any } }
      hover: { container: { elevation: any } }
      pressed: { container: { elevation: any } }
    }
    pressed: {
      container: { elevation: any }
      icon: { color: string }
      stateLayer: { color: string; opacity: number }
    }
    small: {
      container: {
        color: string
        elevation: any
        height: number
        shadowColor: string
        shape: number
        width: number
      }
      focus: {
        container: { elevation: any }
        icon: { color: string }
        stateLayer: { color: string; opacity: number }
      }
      hover: {
        container: { elevation: any }
        icon: { color: string }
        stateLayer: { color: string; opacity: number }
      }
      icon: { color: string; size: number }
      lowered: {
        container: { elevation: any }
        focus: { container: { elevation: any } }
        hover: { container: { elevation: any } }
        pressed: { container: { elevation: any } }
      }
      pressed: {
        container: { elevation: any }
        icon: { color: string }
        stateLayer: { color: string; opacity: number }
      }
    }
  }
}

export const fabTheme = (theme: Record<string, any>): Md3CompFab => ({
  primary: {
    large: {
      container: {
        color: theme.sys.color.primaryContainer,
        elevation: theme.sys.elevation.level3,
        height: 96,
        shadowColor: theme.sys.color.shadow,
        shape: theme.sys.shape.corner.extraLarge,
        width: 96,
      },
      focus: {
        container: {
          elevation: theme.sys.elevation.level3,
        },
        icon: {
          color: theme.sys.color.onPrimaryContainer,
        },
        stateLayer: {
          color: theme.sys.color.onPrimaryContainer,
          opacity: theme.sys.state.focus.stateLayerOpacity,
        },
      },
      hover: {
        container: {
          elevation: theme.sys.elevation.level4,
        },
        icon: {
          color: theme.sys.color.onPrimaryContainer,
        },
        stateLayer: {
          color: theme.sys.color.onPrimaryContainer,
          opacity: theme.sys.state.hover.stateLayerOpacity,
        },
      },
      icon: {
        color: theme.sys.color.onPrimaryContainer,
        size: 36,
      },
      lowered: {
        container: {
          elevation: theme.sys.elevation.level1,
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
      },
      pressed: {
        container: {
          elevation: theme.sys.elevation.level3,
        },
        icon: {
          color: theme.sys.color.onPrimaryContainer,
        },
        stateLayer: {
          color: theme.sys.color.onPrimaryContainer,
          opacity: theme.sys.state.pressed.stateLayerOpacity,
        },
      },
    },
    container: {
      color: theme.sys.color.primaryContainer,
      elevation: theme.sys.elevation.level3,
      height: 56,
      shadowColor: theme.sys.color.shadow,
      shape: theme.sys.shape.corner.large,
      width: 56,
    },
    focus: {
      container: {
        elevation: theme.sys.elevation.level3,
      },
      icon: {
        color: theme.sys.color.onPrimaryContainer,
      },
      stateLayer: {
        color: theme.sys.color.onPrimaryContainer,
        opacity: theme.sys.state.focus.stateLayerOpacity,
      },
    },
    hover: {
      container: {
        elevation: theme.sys.elevation.level4,
      },
      icon: {
        color: theme.sys.color.onPrimaryContainer,
      },
      stateLayer: {
        color: theme.sys.color.onPrimaryContainer,
        opacity: theme.sys.state.hover.stateLayerOpacity,
      },
    },
    icon: {
      color: theme.sys.color.onPrimaryContainer,
      size: 24,
    },
    lowered: {
      container: {
        elevation: theme.sys.elevation.level1,
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
    },
    pressed: {
      container: {
        elevation: theme.sys.elevation.level3,
      },
      icon: {
        color: theme.sys.color.onPrimaryContainer,
      },
      stateLayer: {
        color: theme.sys.color.onPrimaryContainer,
        opacity: theme.sys.state.pressed.stateLayerOpacity,
      },
    },
    small: {
      container: {
        color: theme.sys.color.primaryContainer,
        elevation: theme.sys.elevation.level3,
        height: 40,
        shadowColor: theme.sys.color.shadow,
        shape: theme.sys.shape.corner.medium,
        width: 40,
      },
      focus: {
        container: {
          elevation: theme.sys.elevation.level3,
        },
        icon: {
          color: theme.sys.color.onPrimaryContainer,
        },
        stateLayer: {
          color: theme.sys.color.onPrimaryContainer,
          opacity: theme.sys.state.focus.stateLayerOpacity,
        },
      },
      hover: {
        container: {
          elevation: theme.sys.elevation.level4,
        },
        icon: {
          color: theme.sys.color.onPrimaryContainer,
        },
        stateLayer: {
          color: theme.sys.color.onPrimaryContainer,
          opacity: theme.sys.state.hover.stateLayerOpacity,
        },
      },
      icon: {
        color: theme.sys.color.onPrimaryContainer,
        size: 24,
      },
      lowered: {
        container: {
          elevation: theme.sys.elevation.level1,
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
      },
      pressed: {
        container: {
          elevation: theme.sys.elevation.level3,
        },
        icon: {
          color: theme.sys.color.onPrimaryContainer,
        },
        stateLayer: {
          color: theme.sys.color.onPrimaryContainer,
          opacity: theme.sys.state.pressed.stateLayerOpacity,
        },
      },
    },
  },
})
