/**
 * Do not edit directly
 * Generated on Sat, 18 Mar 2023 23:31:03 GMT
 */

export interface Md3CompDivider {
  color: string
  thickness: number
}

export const dividerTheme = (theme: Record<string, any>): Md3CompDivider => ({
  color: theme.sys.color.outlineVariant,
  thickness: 1,
})
