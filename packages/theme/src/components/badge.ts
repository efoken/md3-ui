/**
 * Do not edit directly
 * Generated on Sat, 18 Mar 2023 23:31:03 GMT
 */

import { TextStyle as RNTextStyle } from "react-native"

export interface Md3CompBadge {
  color: string
  large: {
    color: string
    labelText: { color: string; textStyle: Partial<RNTextStyle> }
    shape: number
    size: number
  }
  shape: number
  size: number
}

export const badgeTheme = (theme: Record<string, any>): Md3CompBadge => ({
  color: theme.sys.color.error,
  large: {
    color: theme.sys.color.error,
    labelText: {
      color: theme.sys.color.onError,
      textStyle: theme.sys.typescale.labelSmall,
    },
    shape: theme.sys.shape.corner.full,
    size: 16,
  },
  shape: theme.sys.shape.corner.full,
  size: 6,
})
