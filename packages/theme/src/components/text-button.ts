/**
 * Do not edit directly
 * Generated on Tue, 28 Feb 2023 12:57:20 GMT
 */

export const textButton = (theme: any) => ({
  container: {
    height: 40,
    shape: theme.sys.shape.corner.full,
  },
  disabled: {
    labelText: {
      color: theme.sys.color.onSurface,
      opacity: 0.38,
    },
  },
  focus: {
    labelText: {
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
    stateLayer: {
      color: theme.sys.color.primary,
      opacity: theme.sys.state.hover.stateLayerOpacity,
    },
  },
  labelText: {
    color: theme.sys.color.primary,
    textStyle: theme.sys.typescale.labelLarge,
  },
  pressed: {
    labelText: {
      color: theme.sys.color.primary,
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

export type Md3CompTextButton = ReturnType<typeof textButton>
