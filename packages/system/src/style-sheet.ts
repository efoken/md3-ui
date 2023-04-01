import { isMedia, isMediaOrPseudo, mergeDeep } from "@md3-ui/utils"
import MediaQuery, { MediaValues } from "css-mediaquery2"
import { Platform, StyleSheet as RNStyleSheet, StyleProp } from "react-native"
import hash from "react-native-web/dist/vendor/hash"
import { addCSS, createCSSRule } from "./inject"
import { NamedStyles } from "./types"
import { getDefaultMediaValues } from "./use-media-values"
import { createDeclarationBlock } from "./utils/create-declaration-block"

// eslint-disable-next-line unicorn/no-static-only-class
export class StyleSheet {
  static create<T extends NamedStyles<T> | NamedStyles<any>>(
    stylesWithQuery: T | NamedStyles<T>,
    mediaValues: Partial<MediaValues> = {},
  ): T {
    if (!stylesWithQuery) {
      return {} as T
    }

    let cleanStyles: Record<string, any> = { ...stylesWithQuery }
    const mediaStyles: Record<string, any> = {} as any

    for (const [key, styleWithQuery] of Object.entries<any>(stylesWithQuery)) {
      if (!styleWithQuery) {
        continue
      }

      // eslint-disable-next-line @typescript-eslint/no-shadow
      for (const query of Object.keys(styleWithQuery).filter((query) =>
        isMediaOrPseudo(query),
      )) {
        if (Platform.OS === "web") {
          const css = createDeclarationBlock(styleWithQuery[query])
          const stringHash = `md3-media-${hash(`${key}${query}${css}`)}`
          const rule = createCSSRule(query, stringHash, css)

          addCSS(stringHash, rule)
          delete cleanStyles[key][query]

          mediaStyles[key] = {
            ...mediaStyles[key],
            $$css: true,
            [query]: stringHash,
          }
        } else {
          if (isMedia(query)) {
            const isMatchingMediaQuery = MediaQuery.match(
              query.replace("@media", ""),
              { ...getDefaultMediaValues(), ...mediaValues },
            )

            if (isMatchingMediaQuery) {
              cleanStyles = {
                ...cleanStyles,
                [key]: { ...cleanStyles[key], ...styleWithQuery[query] },
              }
            }
          }

          delete cleanStyles[key][query]
        }
      }
    }

    const styles = Object.fromEntries(
      Object.entries(RNStyleSheet.create(cleanStyles)).map(([key, style]) =>
        mediaStyles[key] == null
          ? [key, style]
          : [key, [style, mediaStyles[key]]],
      ),
    ) as T

    return styles
  }

  static flatten<T>(style?: StyleProp<T>): T extends (infer U)[] ? U : T {
    return Array.isArray(style)
      ? style
          .flat()
          .filter(Boolean)
          .reduce(
            // For retrieving all styles in React Native Web, we need to call
            // the original `flatten` method here.
            // Note, that this behaviour may change in the future.
            (acc, newStyle) => mergeDeep(acc, RNStyleSheet.flatten(newStyle)),
            {} as any,
          )
      : style
  }
}
