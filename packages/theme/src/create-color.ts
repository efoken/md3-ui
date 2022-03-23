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
  "on-primary": string
  "primary-container": string
  "on-primary-container": string
  secondary: string
  "on-secondary": string
  "secondary-container": string
  "on-secondary-container": string
  tertiary: string
  "on-tertiary": string
  "tertiary-container": string
  "on-tertiary-container": string
  error: string
  "on-error": string
  "error-container": string
  "on-error-container": string
  background: string
  "on-background": string
  surface: string
  "on-surface": string
  "surface-variant": string
  "on-surface-variant": string
  outline: string
  "inverse-surface": string
  "inverse-on-surface": string
}

function getDefaultPrimary(mode = "light") {
  return mode === "dark"
    ? {
        primary: MdSysColorPrimaryDark,
        "on-primary": MdSysColorOnPrimaryDark,
        "primary-container": MdSysColorPrimaryContainerDark,
        "on-primary-container": MdSysColorOnPrimaryContainerDark,
      }
    : {
        primary: MdSysColorPrimaryLight,
        "on-primary": MdSysColorOnPrimaryLight,
        "primary-container": MdSysColorPrimaryContainerLight,
        "on-primary-container": MdSysColorOnPrimaryContainerLight,
      }
}

function getDefaultSecondary(mode = "light") {
  return mode === "dark"
    ? {
        secondary: MdSysColorSecondaryDark,
        "on-secondary": MdSysColorOnSecondaryDark,
        "secondary-container": MdSysColorSecondaryContainerDark,
        "on-secondary-container": MdSysColorOnSecondaryContainerDark,
      }
    : {
        secondary: MdSysColorSecondaryLight,
        "on-secondary": MdSysColorOnSecondaryLight,
        "secondary-container": MdSysColorSecondaryContainerLight,
        "on-secondary-container": MdSysColorOnSecondaryContainerLight,
      }
}

function getDefaultTertiary(mode = "light") {
  return mode === "dark"
    ? {
        tertiary: MdSysColorTertiaryDark,
        "on-tertiary": MdSysColorOnTertiaryDark,
        "tertiary-container": MdSysColorTertiaryContainerDark,
        "on-tertiary-container": MdSysColorOnTertiaryContainerDark,
      }
    : {
        tertiary: MdSysColorTertiaryLight,
        "on-tertiary": MdSysColorOnTertiaryLight,
        "tertiary-container": MdSysColorTertiaryContainerLight,
        "on-tertiary-container": MdSysColorOnTertiaryContainerLight,
      }
}

function getDefaultError(mode = "light") {
  return mode === "dark"
    ? {
        error: MdSysColorErrorDark,
        "on-error": MdSysColorOnErrorDark,
        "error-container": MdSysColorErrorContainerDark,
        "on-error-container": MdSysColorOnErrorContainerDark,
      }
    : {
        error: MdSysColorErrorLight,
        "on-error": MdSysColorOnErrorLight,
        "error-container": MdSysColorErrorContainerLight,
        "on-error-container": MdSysColorOnErrorContainerLight,
      }
}

function getDefaultBackground(mode = "light") {
  return mode === "dark"
    ? {
        background: MdSysColorBackgroundDark,
        "on-background": MdSysColorOnBackgroundDark,
      }
    : {
        background: MdSysColorBackgroundLight,
        "on-background": MdSysColorOnBackgroundLight,
      }
}

function getDefaultSurface(mode = "light") {
  return mode === "dark"
    ? {
        surface: MdSysColorSurfaceDark,
        "on-surface": MdSysColorOnSurfaceDark,
        "surface-variant": MdSysColorSurfaceVariantDark,
        "on-surface-variant": MdSysColorOnSurfaceVariantDark,
      }
    : {
        surface: MdSysColorSurfaceLight,
        "on-surface": MdSysColorOnSurfaceLight,
        "surface-variant": MdSysColorSurfaceVariantLight,
        "on-surface-variant": MdSysColorOnSurfaceVariantLight,
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
        "inverse-surface": MdSysColorInverseSurfaceDark,
        "inverse-on-surface": MdSysColorInverseOnSurfaceDark,
      }
    : {
        "inverse-surface": MdSysColorInverseSurfaceLight,
        "inverse-on-surface": MdSysColorInverseOnSurfaceLight,
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
