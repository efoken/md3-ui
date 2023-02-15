import {
  MdRefPaletteBlack,
  MdRefPaletteError0,
  MdRefPaletteError10,
  MdRefPaletteError100,
  MdRefPaletteError20,
  MdRefPaletteError30,
  MdRefPaletteError40,
  MdRefPaletteError50,
  MdRefPaletteError60,
  MdRefPaletteError70,
  MdRefPaletteError80,
  MdRefPaletteError90,
  MdRefPaletteError95,
  MdRefPaletteError99,
  MdRefPaletteNeutral0,
  MdRefPaletteNeutral10,
  MdRefPaletteNeutral100,
  MdRefPaletteNeutral20,
  MdRefPaletteNeutral30,
  MdRefPaletteNeutral40,
  MdRefPaletteNeutral50,
  MdRefPaletteNeutral60,
  MdRefPaletteNeutral70,
  MdRefPaletteNeutral80,
  MdRefPaletteNeutral90,
  MdRefPaletteNeutral95,
  MdRefPaletteNeutral99,
  MdRefPaletteNeutralVariant0,
  MdRefPaletteNeutralVariant10,
  MdRefPaletteNeutralVariant100,
  MdRefPaletteNeutralVariant20,
  MdRefPaletteNeutralVariant30,
  MdRefPaletteNeutralVariant40,
  MdRefPaletteNeutralVariant50,
  MdRefPaletteNeutralVariant60,
  MdRefPaletteNeutralVariant70,
  MdRefPaletteNeutralVariant80,
  MdRefPaletteNeutralVariant90,
  MdRefPaletteNeutralVariant95,
  MdRefPaletteNeutralVariant99,
  MdRefPalettePrimary0,
  MdRefPalettePrimary10,
  MdRefPalettePrimary100,
  MdRefPalettePrimary20,
  MdRefPalettePrimary30,
  MdRefPalettePrimary40,
  MdRefPalettePrimary50,
  MdRefPalettePrimary60,
  MdRefPalettePrimary70,
  MdRefPalettePrimary80,
  MdRefPalettePrimary90,
  MdRefPalettePrimary95,
  MdRefPalettePrimary99,
  MdRefPaletteSecondary0,
  MdRefPaletteSecondary10,
  MdRefPaletteSecondary100,
  MdRefPaletteSecondary20,
  MdRefPaletteSecondary30,
  MdRefPaletteSecondary40,
  MdRefPaletteSecondary50,
  MdRefPaletteSecondary60,
  MdRefPaletteSecondary70,
  MdRefPaletteSecondary80,
  MdRefPaletteSecondary90,
  MdRefPaletteSecondary95,
  MdRefPaletteSecondary99,
  MdRefPaletteTertiary0,
  MdRefPaletteTertiary10,
  MdRefPaletteTertiary100,
  MdRefPaletteTertiary20,
  MdRefPaletteTertiary30,
  MdRefPaletteTertiary40,
  MdRefPaletteTertiary50,
  MdRefPaletteTertiary60,
  MdRefPaletteTertiary70,
  MdRefPaletteTertiary80,
  MdRefPaletteTertiary90,
  MdRefPaletteTertiary95,
  MdRefPaletteTertiary99,
  MdRefPaletteWhite,
} from "./tokens"

export interface Palette {
  error: {
    0: string
    10: string
    20: string
    30: string
    40: string
    50: string
    60: string
    70: string
    80: string
    90: string
    95: string
    99: string
    100: string
  }
  tertiary: {
    0: string
    10: string
    20: string
    30: string
    40: string
    50: string
    60: string
    70: string
    80: string
    90: string
    95: string
    99: string
    100: string
  }
  secondary: {
    0: string
    10: string
    20: string
    30: string
    40: string
    50: string
    60: string
    70: string
    80: string
    90: string
    95: string
    99: string
    100: string
  }
  primary: {
    0: string
    10: string
    20: string
    30: string
    40: string
    50: string
    60: string
    70: string
    80: string
    90: string
    95: string
    99: string
    100: string
  }
  neutralVariant: {
    0: string
    10: string
    20: string
    30: string
    40: string
    50: string
    60: string
    70: string
    80: string
    90: string
    95: string
    99: string
    100: string
  }
  neutral: {
    0: string
    10: string
    20: string
    30: string
    40: string
    50: string
    60: string
    70: string
    80: string
    90: string
    95: string
    99: string
    100: string
  }
  black: string
  white: string
}

export const palette: Palette = {
  error: {
    0: MdRefPaletteError0,
    10: MdRefPaletteError10,
    20: MdRefPaletteError20,
    30: MdRefPaletteError30,
    40: MdRefPaletteError40,
    50: MdRefPaletteError50,
    60: MdRefPaletteError60,
    70: MdRefPaletteError70,
    80: MdRefPaletteError80,
    90: MdRefPaletteError90,
    95: MdRefPaletteError95,
    99: MdRefPaletteError99,
    100: MdRefPaletteError100,
  },
  tertiary: {
    0: MdRefPaletteTertiary0,
    10: MdRefPaletteTertiary10,
    20: MdRefPaletteTertiary20,
    30: MdRefPaletteTertiary30,
    40: MdRefPaletteTertiary40,
    50: MdRefPaletteTertiary50,
    60: MdRefPaletteTertiary60,
    70: MdRefPaletteTertiary70,
    80: MdRefPaletteTertiary80,
    90: MdRefPaletteTertiary90,
    95: MdRefPaletteTertiary95,
    99: MdRefPaletteTertiary99,
    100: MdRefPaletteTertiary100,
  },
  secondary: {
    0: MdRefPaletteSecondary0,
    10: MdRefPaletteSecondary10,
    20: MdRefPaletteSecondary20,
    30: MdRefPaletteSecondary30,
    40: MdRefPaletteSecondary40,
    50: MdRefPaletteSecondary50,
    60: MdRefPaletteSecondary60,
    70: MdRefPaletteSecondary70,
    80: MdRefPaletteSecondary80,
    90: MdRefPaletteSecondary90,
    95: MdRefPaletteSecondary95,
    99: MdRefPaletteSecondary99,
    100: MdRefPaletteSecondary100,
  },
  primary: {
    0: MdRefPalettePrimary0,
    10: MdRefPalettePrimary10,
    20: MdRefPalettePrimary20,
    30: MdRefPalettePrimary30,
    40: MdRefPalettePrimary40,
    50: MdRefPalettePrimary50,
    60: MdRefPalettePrimary60,
    70: MdRefPalettePrimary70,
    80: MdRefPalettePrimary80,
    90: MdRefPalettePrimary90,
    95: MdRefPalettePrimary95,
    99: MdRefPalettePrimary99,
    100: MdRefPalettePrimary100,
  },
  neutralVariant: {
    0: MdRefPaletteNeutralVariant0,
    10: MdRefPaletteNeutralVariant10,
    20: MdRefPaletteNeutralVariant20,
    30: MdRefPaletteNeutralVariant30,
    40: MdRefPaletteNeutralVariant40,
    50: MdRefPaletteNeutralVariant50,
    60: MdRefPaletteNeutralVariant60,
    70: MdRefPaletteNeutralVariant70,
    80: MdRefPaletteNeutralVariant80,
    90: MdRefPaletteNeutralVariant90,
    95: MdRefPaletteNeutralVariant95,
    99: MdRefPaletteNeutralVariant99,
    100: MdRefPaletteNeutralVariant100,
  },
  neutral: {
    0: MdRefPaletteNeutral0,
    10: MdRefPaletteNeutral10,
    20: MdRefPaletteNeutral20,
    30: MdRefPaletteNeutral30,
    40: MdRefPaletteNeutral40,
    50: MdRefPaletteNeutral50,
    60: MdRefPaletteNeutral60,
    70: MdRefPaletteNeutral70,
    80: MdRefPaletteNeutral80,
    90: MdRefPaletteNeutral90,
    95: MdRefPaletteNeutral95,
    99: MdRefPaletteNeutral99,
    100: MdRefPaletteNeutral100,
  },
  black: MdRefPaletteBlack,
  white: MdRefPaletteWhite,
}
