/**
 * Do not edit directly
 * Generated on Wed, 29 Mar 2023 09:38:35 GMT
 */

export interface Md3CompDivider {
  color: string
  thickness: number
}

export const dividerTheme = (theme: Record<string, any>): Md3CompDivider => ({
  color: theme.sys.color.outlineVariant,
  thickness: 1,
})
