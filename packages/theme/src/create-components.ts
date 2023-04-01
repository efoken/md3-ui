import { mergeDeep } from "@md3-ui/utils"
import { badgeTheme, Md3CompBadge } from "./components/badge"
import { dividerTheme, Md3CompDivider } from "./components/divider"
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
import { listTheme, Md3CompList } from "./components/list"
import {
  Md3CompOutlinedButton,
  outlinedButtonTheme,
} from "./components/outlined-button"
import {
  Md3CompOutlinedIconButton,
  outlinedIconButtonTheme,
} from "./components/outlined-icon-button"
import { Md3CompSnackbar, snackbarTheme } from "./components/snackbar"
import { Md3CompSwitch, switchTheme } from "./components/switch"
import { Md3CompTextButton, textButtonTheme } from "./components/text-button"
import { Md3CompTonalButton, tonalButtonTheme } from "./components/tonal-button"
import {
  Md3CompTonalIconButton,
  tonalIconButtonTheme,
} from "./components/tonal-icon-button"

export interface Components {
  badge: Md3CompBadge
  divider: Md3CompDivider
  elevatedButton: Md3CompElevatedButton
  filledButton: Md3CompFilledButton
  filledIconButton: Md3CompFilledIconButton
  iconButton: Md3CompIconButton
  list: Md3CompList
  outlinedButton: Md3CompOutlinedButton
  outlinedIconButton: Md3CompOutlinedIconButton
  snackbar: Md3CompSnackbar
  switch: Md3CompSwitch
  textButton: Md3CompTextButton
  tonalButton: Md3CompTonalButton
  tonalIconButton: Md3CompTonalIconButton
  [name: string]: any
}

export function createComponents(theme: Record<string, any>): Components {
  return mergeDeep(
    {
      badge: badgeTheme(theme),
      divider: dividerTheme(theme),
      elevatedButton: elevatedButtonTheme(theme),
      filledButton: filledButtonTheme(theme),
      filledIconButton: filledIconButtonTheme(theme),
      iconButton: iconButtonTheme(theme),
      list: listTheme(theme),
      outlinedButton: outlinedButtonTheme(theme),
      outlinedIconButton: outlinedIconButtonTheme(theme),
      snackbar: snackbarTheme(theme),
      switch: switchTheme(theme),
      textButton: textButtonTheme(theme),
      tonalButton: tonalButtonTheme(theme),
      tonalIconButton: tonalIconButtonTheme(theme),
    },
    theme.comp,
  )
}
