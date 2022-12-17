import {
  MdSysColorBackgroundDark,
  MdSysColorBackgroundLight,
  MdSysColorErrorContainerDark,
  MdSysColorErrorContainerLight,
  MdSysColorErrorDark,
  MdSysColorErrorLight,
  MdSysColorInverseOnSurfaceDark,
  MdSysColorInverseOnSurfaceLight,
  MdSysColorInverseSurfaceDark,
  MdSysColorInverseSurfaceLight,
  MdSysColorOnBackgroundDark,
  MdSysColorOnBackgroundLight,
  MdSysColorOnErrorContainerDark,
  MdSysColorOnErrorContainerLight,
  MdSysColorOnErrorDark,
  MdSysColorOnErrorLight,
  MdSysColorOnPrimaryContainerDark,
  MdSysColorOnPrimaryContainerLight,
  MdSysColorOnPrimaryDark,
  MdSysColorOnPrimaryLight,
  MdSysColorOnSecondaryContainerDark,
  MdSysColorOnSecondaryContainerLight,
  MdSysColorOnSecondaryDark,
  MdSysColorOnSecondaryLight,
  MdSysColorOnSurfaceDark,
  MdSysColorOnSurfaceLight,
  MdSysColorOnSurfaceVariantDark,
  MdSysColorOnSurfaceVariantLight,
  MdSysColorOnTertiaryContainerDark,
  MdSysColorOnTertiaryContainerLight,
  MdSysColorOnTertiaryDark,
  MdSysColorOnTertiaryLight,
  MdSysColorOutlineDark,
  MdSysColorOutlineLight,
  MdSysColorPrimaryContainerDark,
  MdSysColorPrimaryContainerLight,
  MdSysColorPrimaryDark,
  MdSysColorPrimaryLight,
  MdSysColorSecondaryContainerDark,
  MdSysColorSecondaryContainerLight,
  MdSysColorSecondaryDark,
  MdSysColorSecondaryLight,
  MdSysColorSurfaceDark,
  MdSysColorSurfaceLight,
  MdSysColorSurfaceVariantDark,
  MdSysColorSurfaceVariantLight,
  MdSysColorTertiaryContainerDark,
  MdSysColorTertiaryContainerLight,
  MdSysColorTertiaryDark,
  MdSysColorTertiaryLight,
} from "./tokens"

export interface Color {
  mode: "dark" | "light"
  primary: string
  onPrimary: string
  primaryContainer: string
  onPrimaryContainer: string
  secondary: string
  onSecondary: string
  secondaryContainer: string
  onSecondaryContainer: string
  tertiary: string
  onTertiary: string
  tertiaryContainer: string
  onTertiaryContainer: string
  error: string
  onError: string
  errorContainer: string
  onErrorContainer: string
  background: string
  onBackground: string
  surface: string
  onSurface: string
  surfaceVariant: string
  onSurfaceVariant: string
  outline: string
  inverseSurface: string
  inverseOnSurface: string
}

function getDefaultPrimary(mode = "light") {
  return mode === "dark"
    ? {
        primary: MdSysColorPrimaryDark,
        onPrimary: MdSysColorOnPrimaryDark,
        primaryContainer: MdSysColorPrimaryContainerDark,
        onPrimaryContainer: MdSysColorOnPrimaryContainerDark,
      }
    : {
        primary: MdSysColorPrimaryLight,
        onPrimary: MdSysColorOnPrimaryLight,
        primaryContainer: MdSysColorPrimaryContainerLight,
        onPrimaryContainer: MdSysColorOnPrimaryContainerLight,
      }
}

function getDefaultSecondary(mode = "light") {
  return mode === "dark"
    ? {
        secondary: MdSysColorSecondaryDark,
        onSecondary: MdSysColorOnSecondaryDark,
        secondaryContainer: MdSysColorSecondaryContainerDark,
        onSecondaryContainer: MdSysColorOnSecondaryContainerDark,
      }
    : {
        secondary: MdSysColorSecondaryLight,
        onSecondary: MdSysColorOnSecondaryLight,
        secondaryContainer: MdSysColorSecondaryContainerLight,
        onSecondaryContainer: MdSysColorOnSecondaryContainerLight,
      }
}

function getDefaultTertiary(mode = "light") {
  return mode === "dark"
    ? {
        tertiary: MdSysColorTertiaryDark,
        onTertiary: MdSysColorOnTertiaryDark,
        tertiaryContainer: MdSysColorTertiaryContainerDark,
        onTertiaryContainer: MdSysColorOnTertiaryContainerDark,
      }
    : {
        tertiary: MdSysColorTertiaryLight,
        onTertiary: MdSysColorOnTertiaryLight,
        tertiaryContainer: MdSysColorTertiaryContainerLight,
        onTertiaryContainer: MdSysColorOnTertiaryContainerLight,
      }
}

function getDefaultError(mode = "light") {
  return mode === "dark"
    ? {
        error: MdSysColorErrorDark,
        onError: MdSysColorOnErrorDark,
        errorContainer: MdSysColorErrorContainerDark,
        onErrorContainer: MdSysColorOnErrorContainerDark,
      }
    : {
        error: MdSysColorErrorLight,
        onError: MdSysColorOnErrorLight,
        errorContainer: MdSysColorErrorContainerLight,
        onErrorContainer: MdSysColorOnErrorContainerLight,
      }
}

function getDefaultBackground(mode = "light") {
  return mode === "dark"
    ? {
        background: MdSysColorBackgroundDark,
        onBackground: MdSysColorOnBackgroundDark,
      }
    : {
        background: MdSysColorBackgroundLight,
        onBackground: MdSysColorOnBackgroundLight,
      }
}

function getDefaultSurface(mode = "light") {
  return mode === "dark"
    ? {
        surface: MdSysColorSurfaceDark,
        onSurface: MdSysColorOnSurfaceDark,
        surfaceVariant: MdSysColorSurfaceVariantDark,
        onSurfaceVariant: MdSysColorOnSurfaceVariantDark,
      }
    : {
        surface: MdSysColorSurfaceLight,
        onSurface: MdSysColorOnSurfaceLight,
        surfaceVariant: MdSysColorSurfaceVariantLight,
        onSurfaceVariant: MdSysColorOnSurfaceVariantLight,
      }
}

function getDefaultOutline(mode = "light") {
  return mode === "dark"
    ? {
        outline: MdSysColorOutlineDark,
      }
    : {
        outline: MdSysColorOutlineLight,
      }
}

function getDefaultInverse(mode = "light") {
  return mode === "dark"
    ? {
        inverseSurface: MdSysColorInverseSurfaceDark,
        inverseOnSurface: MdSysColorInverseOnSurfaceDark,
      }
    : {
        inverseSurface: MdSysColorInverseSurfaceLight,
        inverseOnSurface: MdSysColorInverseOnSurfaceLight,
      }
}

export function createColor(color: Partial<Color> = {}): Color {
  const { mode = "light" } = color

  const primary = getDefaultPrimary(mode)
  const secondary = getDefaultSecondary(mode)
  const tertiary = getDefaultTertiary(mode)
  const error = getDefaultError(mode)
  const background = getDefaultBackground(mode)
  const surface = getDefaultSurface(mode)
  const outline = getDefaultOutline(mode)
  const inverse = getDefaultInverse(mode)

  return {
    mode,
    ...primary,
    ...secondary,
    ...tertiary,
    ...error,
    ...background,
    ...surface,
    ...outline,
    ...inverse,
    ...color,
  }
}
