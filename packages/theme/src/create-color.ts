/**
 * Do not edit directly
 * Generated on Sat, 06 May 2023 11:12:41 GMT
 */

import { mergeDeep } from "@md3-ui/utils"

export interface Color {
  background: string
  error: string
  errorContainer: string
  inverseOnSurface: string
  inversePrimary: string
  inverseSurface: string
  onBackground: string
  onError: string
  onErrorContainer: string
  onPrimary: string
  onPrimaryContainer: string
  onPrimaryFixed: string
  onPrimaryFixedVariant: string
  onSecondary: string
  onSecondaryContainer: string
  onSecondaryFixed: string
  onSecondaryFixedVariant: string
  onSurface: string
  onSurfaceVariant: string
  onTertiary: string
  onTertiaryContainer: string
  onTertiaryFixed: string
  onTertiaryFixedVariant: string
  outline: string
  outlineVariant: string
  primary: string
  primaryContainer: string
  primaryFixed: string
  primaryFixedDim: string
  scrim: string
  secondary: string
  secondaryContainer: string
  secondaryFixed: string
  secondaryFixedDim: string
  shadow: string
  surface: string
  surfaceBright: string
  surfaceContainer: string
  surfaceContainerHigh: string
  surfaceContainerHighest: string
  surfaceContainerLow: string
  surfaceContainerLowest: string
  surfaceDim: string
  surfaceTint: string
  surfaceVariant: string
  tertiary: string
  tertiaryContainer: string
  tertiaryFixed: string
  tertiaryFixedDim: string
  mode: string
}

export function createColor(palette: any, color: Partial<Color> = {}): Color {
  return mergeDeep(
    {
      background: palette.neutral[99],
      error: palette.error[40],
      errorContainer: palette.error[90],
      inverseOnSurface: palette.neutral[95],
      inversePrimary: palette.primary[80],
      inverseSurface: palette.neutral[20],
      onBackground: palette.neutral[10],
      onError: palette.error[100],
      onErrorContainer: palette.error[10],
      onPrimary: palette.primary[100],
      onPrimaryContainer: palette.primary[10],
      onPrimaryFixed: palette.primary[10],
      onPrimaryFixedVariant: palette.primary[30],
      onSecondary: palette.secondary[100],
      onSecondaryContainer: palette.secondary[10],
      onSecondaryFixed: palette.secondary[10],
      onSecondaryFixedVariant: palette.secondary[30],
      onSurface: palette.neutral[10],
      onSurfaceVariant: palette.neutralVariant[30],
      onTertiary: palette.tertiary[100],
      onTertiaryContainer: palette.tertiary[10],
      onTertiaryFixed: palette.tertiary[10],
      onTertiaryFixedVariant: palette.tertiary[30],
      outline: palette.neutralVariant[50],
      outlineVariant: palette.neutralVariant[80],
      primary: palette.primary[40],
      primaryContainer: palette.primary[90],
      primaryFixed: palette.primary[90],
      primaryFixedDim: palette.primary[80],
      scrim: palette.neutral[0],
      secondary: palette.secondary[40],
      secondaryContainer: palette.secondary[90],
      secondaryFixed: palette.secondary[90],
      secondaryFixedDim: palette.secondary[80],
      shadow: palette.neutral[0],
      surface: palette.neutral[99],
      surfaceBright: palette.neutral[98],
      surfaceContainer: palette.neutral[94],
      surfaceContainerHigh: palette.neutral[92],
      surfaceContainerHighest: palette.neutral[90],
      surfaceContainerLow: palette.neutral[96],
      surfaceContainerLowest: palette.neutral[100],
      surfaceDim: palette.neutral[87],
      surfaceTint: "primary",
      surfaceVariant: palette.neutralVariant[90],
      tertiary: palette.tertiary[40],
      tertiaryContainer: palette.tertiary[90],
      tertiaryFixed: palette.tertiary[90],
      tertiaryFixedDim: palette.tertiary[80],
      mode: "light",
    },
    color,
  )
}
