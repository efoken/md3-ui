/**
 * Do not edit directly
 * Generated on Tue, 28 Feb 2023 12:57:19 GMT
 */

export const filledButton = (theme: any) => ({
  container: {
    color: theme.sys.color.primary,
    elevation: theme.sys.elevation.level0,
    height: 40,
    shadowColor: theme.sys.color.shadow,
    shape: theme.sys.shape.corner.full,
  },
  disabled: {
    container: {
      color: theme.sys.color.onSurface,
      elevation: theme.sys.elevation.level0,
      opacity: 0.12,
    },
    labelText: {
      color: theme.sys.color.onSurface,
      opacity: 0.38,
    },
  },
  focus: {
    container: {
      elevation: theme.sys.elevation.level0,
    },
    labelText: {
      color: theme.sys.color.onPrimary,
    },
    stateLayer: {
      color: theme.sys.color.onPrimary,
      opacity: theme.sys.state.focus.stateLayerOpacity,
    },
  },
  hover: {
    container: {
      elevation: theme.sys.elevation.level1,
    },
    labelText: {
      color: theme.sys.color.onPrimary,
    },
    stateLayer: {
      color: theme.sys.color.onPrimary,
      opacity: theme.sys.state.hover.stateLayerOpacity,
    },
  },
  labelText: {
    color: theme.sys.color.onPrimary,
    textStyle: theme.sys.typescale.labelLarge,
  },
  pressed: {
    container: {
      elevation: theme.sys.elevation.level0,
    },
    labelText: {
      color: theme.sys.color.onPrimary,
    },
    stateLayer: {
      color: theme.sys.color.onPrimary,
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
        color: theme.sys.color.onPrimary,
      },
    },
    hover: {
      icon: {
        color: theme.sys.color.onPrimary,
      },
    },
    icon: {
      color: theme.sys.color.onPrimary,
      size: 18,
    },
    pressed: {
      icon: {
        color: theme.sys.color.onPrimary,
      },
    },
  },
})

export type Md3CompFilledButton = ReturnType<typeof filledButton>
