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

export type Color = {
  mode: "dark" | "light"
  background: string
  outline: string
  primary: {
    main: string
    container: string
    "on-main": string
    "on-container": string
  }
  secondary: {
    main: string
    container: string
    "on-main": string
    "on-container": string
  }
  tertiary: {
    main: string
    container: string
    "on-main": string
    "on-container": string
  }
  error: {
    main: string
    container: string
    "on-main": string
    "on-container": string
  }
  surface: {
    main: string
    variant: string
    "on-main": string
    "on-variant": string
  }
  inverse: {
    surface: {
      main: string
      "on-main": string
    }
  }
}

function getDefaultPrimary(mode = "light") {
  return mode === "dark"
    ? {
        main: MdSysColorPrimaryDark,
        "on-main": MdSysColorOnPrimaryDark,
        container: MdSysColorPrimaryContainerDark,
        "on-container": MdSysColorOnPrimaryContainerDark,
      }
    : {
        main: MdSysColorPrimaryLight,
        "on-main": MdSysColorOnPrimaryLight,
        container: MdSysColorPrimaryContainerLight,
        "on-container": MdSysColorOnPrimaryContainerLight,
      }
}

function getDefaultSecondary(mode = "light") {
  return mode === "dark"
    ? {
        main: MdSysColorSecondaryDark,
        "on-main": MdSysColorOnSecondaryDark,
        container: MdSysColorSecondaryContainerDark,
        "on-container": MdSysColorOnSecondaryContainerDark,
      }
    : {
        main: MdSysColorSecondaryLight,
        "on-main": MdSysColorOnSecondaryLight,
        container: MdSysColorSecondaryContainerLight,
        "on-container": MdSysColorOnSecondaryContainerLight,
      }
}

function getDefaultTertiary(mode = "light") {
  return mode === "dark"
    ? {
        main: MdSysColorTertiaryDark,
        "on-main": MdSysColorOnTertiaryDark,
        container: MdSysColorTertiaryContainerDark,
        "on-container": MdSysColorOnTertiaryContainerDark,
      }
    : {
        main: MdSysColorTertiaryLight,
        "on-main": MdSysColorOnTertiaryLight,
        container: MdSysColorTertiaryContainerLight,
        "on-container": MdSysColorOnTertiaryContainerLight,
      }
}

function getDefaultError(mode = "light") {
  return mode === "dark"
    ? {
        main: MdSysColorErrorDark,
        "on-main": MdSysColorOnErrorDark,
        container: MdSysColorErrorContainerDark,
        "on-container": MdSysColorOnErrorContainerDark,
      }
    : {
        main: MdSysColorErrorLight,
        "on-main": MdSysColorOnErrorLight,
        container: MdSysColorErrorContainerLight,
        "on-container": MdSysColorOnErrorContainerLight,
      }
}

function getDefaultSurface(mode = "light") {
  return mode === "dark"
    ? {
        main: MdSysColorSurfaceDark,
        "on-main": MdSysColorOnSurfaceDark,
        variant: MdSysColorSurfaceVariantDark,
        "on-variant": MdSysColorOnSurfaceVariantDark,
      }
    : {
        main: MdSysColorSurfaceLight,
        "on-main": MdSysColorOnSurfaceLight,
        variant: MdSysColorSurfaceVariantLight,
        "on-variant": MdSysColorOnSurfaceVariantLight,
      }
}

function getDefaultInverse(mode = "light") {
  return mode === "dark"
    ? {
        surface: {
          main: MdSysColorInverseSurfaceDark,
          "on-main": MdSysColorInverseOnSurfaceDark,
        },
      }
    : {
        surface: {
          main: MdSysColorInverseSurfaceLight,
          "on-main": MdSysColorInverseOnSurfaceLight,
        },
      }
}

export function createColor(color: Partial<Color>): Color {
  const { mode = "light" } = color

  const background =
    color.background ?? mode === "dark"
      ? MdSysColorBackgroundDark
      : MdSysColorBackgroundLight

  const outline =
    color.outline ?? mode === "dark"
      ? MdSysColorOutlineDark
      : MdSysColorOutlineLight

  const primary = color.primary ?? getDefaultPrimary(mode)
  const secondary = color.secondary ?? getDefaultSecondary(mode)
  const tertiary = color.tertiary ?? getDefaultTertiary(mode)
  const error = color.error ?? getDefaultError(mode)
  const surface = color.surface ?? getDefaultSurface(mode)
  const inverse = color.inverse ?? getDefaultInverse(mode)

  return {
    mode,
    background,
    outline,
    primary,
    secondary,
    tertiary,
    error,
    surface,
    inverse,
  }
}
