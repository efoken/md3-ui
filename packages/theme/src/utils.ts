import { TinyColor } from "@ctrl/tinycolor"

export function mix(weight: number, color: string, otherColor: string) {
  return new TinyColor(color).mix(otherColor, weight).toString()
}

export function rgba(color: string, alpha: number) {
  return new TinyColor(color).setAlpha(alpha).toString()
}
