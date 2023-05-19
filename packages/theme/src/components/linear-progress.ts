/**
 * Do not edit directly
 * Generated on Sat, 06 May 2023 11:12:42 GMT
 */

export interface Md3CompLinearProgress {
  activeIndicator: { color: string; height: number; shape: number }
  fourColor: {
    activeIndicator: {
      four: { color: string }
      one: { color: string }
      three: { color: string }
      two: { color: string }
    }
  }
  track: { color: string; height: number; shape: number }
}

export const linearProgressTheme = (
  theme: Record<string, any>,
): Md3CompLinearProgress => ({
  activeIndicator: {
    color: theme.sys.color.primary,
    height: 4,
    shape: theme.sys.shape.corner.none,
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
  track: {
    color: theme.sys.color.surfaceVariant,
    height: 4,
    shape: theme.sys.shape.corner.none,
  },
})
