/**
 * Do not edit directly
 * Generated on Wed, 12 Apr 2023 15:53:00 GMT
 */

export interface Md3CompDivider {
  color: string
  thickness: number
}

export const dividerTheme = (theme: Record<string, any>): Md3CompDivider => ({
  color: theme.sys.color.outlineVariant,
  thickness: 1,
})
