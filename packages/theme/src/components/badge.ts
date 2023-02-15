import type { Theme } from ".."

export interface Md3CompBadge {
  color: string
  large: {
    color: string
    labelText: {
      color: string
      fontFamily: string
      lineHeight: number
      fontSize: number
      letterSpacing: number
      fontWeight: string
    }
    shape: number
    size: number
  }
  shape: number
  size: number
}

export const badge = (theme: Omit<Theme, "comp">): Md3CompBadge => ({
  color: theme.sys.color.error,
  large: {
    color: theme.sys.color.error,
    labelText: {
      color: theme.sys.color.onError,
      fontFamily: theme.sys.typescale["label-small"].fontFamily,
      lineHeight: theme.sys.typescale["label-small"].lineHeight,
      fontSize: theme.sys.typescale["label-small"].fontSize,
      letterSpacing: theme.sys.typescale["label-small"].letterSpacing,
      fontWeight: theme.sys.typescale["label-small"].fontWeight,
    },
    shape: theme.sys.shape.corner.full,
    size: 16,
  },
  shape: theme.sys.shape.corner.full,
  size: 6,
})
