import { mergeDeep } from "@md3-ui/utils"
import { badgeTheme, Md3CompBadge } from "./components/badge"
import {
  elevatedButtonTheme,
  Md3CompElevatedButton,
} from "./components/elevated-button"
import {
  filledButtonTheme,
  Md3CompFilledButton,
} from "./components/filled-button"
import {
  filledIconButtonTheme,
  Md3CompFilledIconButton,
} from "./components/filled-icon-button"
import { iconButtonTheme, Md3CompIconButton } from "./components/icon-button"
import {
  Md3CompOutlinedButton,
  outlinedButtonTheme,
} from "./components/outlined-button"
import {
  Md3CompOutlinedIconButton,
  outlinedIconButtonTheme,
} from "./components/outlined-icon-button"
import { Md3CompTextButton, textButtonTheme } from "./components/text-button"
import { Md3CompTonalButton, tonalButtonTheme } from "./components/tonal-button"
import {
  Md3CompTonalIconButton,
  tonalIconButtonTheme,
} from "./components/tonal-icon-button"

export interface Components {
  badge: Md3CompBadge
  elevatedButton: Md3CompElevatedButton
  filledButton: Md3CompFilledButton
  filledIconButton: Md3CompFilledIconButton
  iconButton: Md3CompIconButton
  outlinedButton: Md3CompOutlinedButton
  outlinedIconButton: Md3CompOutlinedIconButton
  textButton: Md3CompTextButton
  tonalButton: Md3CompTonalButton
  tonalIconButton: Md3CompTonalIconButton
  [name: string]: any
}

export function createComponents(theme: Record<string, any>): Components {
  return mergeDeep(
    {
      badge: badgeTheme(theme),
      elevatedButton: elevatedButtonTheme(theme),
      filledButton: filledButtonTheme(theme),
      filledIconButton: filledIconButtonTheme(theme),
      iconButton: iconButtonTheme(theme),
      outlinedButton: outlinedButtonTheme(theme),
      outlinedIconButton: outlinedIconButtonTheme(theme),
      textButton: textButtonTheme(theme),
      tonalButton: tonalButtonTheme(theme),
      tonalIconButton: tonalIconButtonTheme(theme),
    },
    theme.comp,
  )
}
