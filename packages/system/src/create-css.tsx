import { createCss as createEmotionCss } from "@emotion/primitives-core"
import { mapValues } from "@md3-ui/utils"
import { StyleSheet } from "./style-sheet"
import { CreateCSS, NamedStyles } from "./types"

export const css = createEmotionCss(
  class extends StyleSheet {
    static create<T extends NamedStyles<T> | NamedStyles<any>>(
      styles: T | NamedStyles<T>,
    ): T {
      return mapValues(styles, (style) => this.flatten(style)) as T
    }
  },
) as CreateCSS
