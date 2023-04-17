/**
 * Do not edit directly
 * Generated on Wed, 12 Apr 2023 15:52:59 GMT
 */

import { mergeDeep } from "@md3-ui/utils"

export interface Palette {
  black: string
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
  neutral: {
    0: string
    4: string
    6: string
    10: string
    12: string
    17: string
    20: string
    22: string
    24: string
    30: string
    40: string
    50: string
    60: string
    70: string
    80: string
    87: string
    90: string
    92: string
    94: string
    95: string
    96: string
    98: string
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
  white: string
}

export function createPalette(palette?: Partial<Palette>) {
  return mergeDeep(
    {
      black: "#000000",
      error: {
        0: "#000000",
        10: "#410e0b",
        20: "#601410",
        30: "#8c1d18",
        40: "#b3261e",
        50: "#dc362e",
        60: "#e46962",
        70: "#ec928e",
        80: "#f2b8b5",
        90: "#f9dedc",
        95: "#fceeee",
        99: "#fffbf9",
        100: "#ffffff",
      },
      neutral: {
        0: "#000000",
        4: "#0e0e11",
        6: "#141317",
        10: "#1c1b1f",
        12: "#201f23",
        17: "#2b292d",
        20: "#313033",
        22: "#313033",
        24: "#313033",
        30: "#484649",
        40: "#605d62",
        50: "#787579",
        60: "#939094",
        70: "#aeaaae",
        80: "#c9c5ca",
        87: "#ddd8dd",
        90: "#e6e1e5",
        92: "#ece7ec",
        94: "#f1ecf1",
        95: "#f4eff4",
        96: "#f7f2f7",
        98: "#fdf8fd",
        99: "#fffbfe",
        100: "#ffffff",
      },
      neutralVariant: {
        0: "#000000",
        10: "#1d1a22",
        20: "#322f37",
        30: "#49454f",
        40: "#605d66",
        50: "#79747e",
        60: "#938f99",
        70: "#aea9b4",
        80: "#cac4d0",
        90: "#e7e0ec",
        95: "#f5eefa",
        99: "#fffbfe",
        100: "#ffffff",
      },
      primary: {
        0: "#000000",
        10: "#21005d",
        20: "#381e72",
        30: "#4f378b",
        40: "#6750a4",
        50: "#7f67be",
        60: "#9a82db",
        70: "#b69df8",
        80: "#d0bcff",
        90: "#eaddff",
        95: "#f6edff",
        99: "#fffbfe",
        100: "#ffffff",
      },
      secondary: {
        0: "#000000",
        10: "#1d192b",
        20: "#332d41",
        30: "#4a4458",
        40: "#625b71",
        50: "#7a7289",
        60: "#958da5",
        70: "#b0a7c0",
        80: "#ccc2dc",
        90: "#e8def8",
        95: "#f6edff",
        99: "#fffbfe",
        100: "#ffffff",
      },
      tertiary: {
        0: "#000000",
        10: "#31111d",
        20: "#492532",
        30: "#633b48",
        40: "#7d5260",
        50: "#986977",
        60: "#b58392",
        70: "#d29dac",
        80: "#efb8c8",
        90: "#ffd8e4",
        95: "#ffecf1",
        99: "#fffbfa",
        100: "#ffffff",
      },
      white: "#ffffff",
    },
    palette,
  )
}
