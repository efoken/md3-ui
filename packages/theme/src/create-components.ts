import { badge, Md3CompBadge } from "./components/badge"
import {
  elevatedButton,
  Md3CompElevatedButton,
} from "./components/elevated-button"
import { filledButton, Md3CompFilledButton } from "./components/filled-button"
import {
  Md3CompOutlinedButton,
  outlinedButton,
} from "./components/outlined-button"
import { Md3CompTextButton, textButton } from "./components/text-button"

export interface Components {
  badge: Md3CompBadge
  elevatedButton: Md3CompElevatedButton
  filledButton: Md3CompFilledButton
  outlinedButton: Md3CompOutlinedButton
  textButton: Md3CompTextButton
  [name: string]: any
}

export function createComponents(theme: any): Components {
  return {
    badge: badge(theme),
    elevatedButton: elevatedButton(theme),
    filledButton: filledButton(theme),
    outlinedButton: outlinedButton(theme),
    textButton: textButton(theme),
  }
}
