/**
 * Do not edit directly
 * Generated on Sat, 06 May 2023 11:12:41 GMT
 */

export interface Md3CompDivider {
  color: string
  thickness: number
}

export const dividerTheme = (theme: Record<string, any>): Md3CompDivider => ({
  color: theme.sys.color.outlineVariant,
  thickness: 1,
})
