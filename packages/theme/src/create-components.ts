import type { Theme } from "."
import { badge, Md3CompBadge } from "./components/badge"

export interface Components {
  badge: Md3CompBadge
  [name: string]: any
}

export function createComponents(theme: Omit<Theme, "comp">): Components {
  return {
    badge: badge(theme),
  }
}
