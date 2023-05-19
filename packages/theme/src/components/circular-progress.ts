/**
 * Do not edit directly
 * Generated on Sat, 06 May 2023 11:12:41 GMT
 */

export interface Md3CompCircularProgress {
  activeIndicator: { color: string; shape: number; width: number }
  fourColor: {
    activeIndicator: {
      four: { color: string }
      one: { color: string }
      three: { color: string }
      two: { color: string }
    }
  }
  size: number
}

export const circularProgressTheme = (
  theme: Record<string, any>,
): Md3CompCircularProgress => ({
  activeIndicator: {
    color: theme.sys.color.primary,
    shape: theme.sys.shape.corner.none,
    width: 4,
  },
  fourColor: {
    activeIndicator: {
      four: {
        color: theme.sys.color.tertiaryContainer,
      },
      one: {
        color: theme.sys.color.primary,
      },
      three: {
        color: theme.sys.color.tertiary,
      },
      two: {
        color: theme.sys.color.primaryContainer,
      },
    },
  },
  size: 48,
})
