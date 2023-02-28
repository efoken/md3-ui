/**
 * Do not edit directly
 * Generated on Tue, 28 Feb 2023 14:24:17 GMT
 */

export const badge = (theme: any) => ({
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

export type Md3CompBadge = ReturnType<typeof badge>
