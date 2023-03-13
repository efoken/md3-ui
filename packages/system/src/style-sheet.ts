import { isMedia, isMediaOrPseudo, mergeDeep } from "@md3-ui/utils"
import MediaQuery, { MediaValues } from "css-mediaquery2"
import {
  Appearance,
  Dimensions,
  Platform,
  StyleProp,
  StyleSheet as RNStyleSheet,
} from "react-native"
import hash from "react-native-web/dist/vendor/hash"
import { createDeclarationBlock } from "./create-declaration-block"
import { addCSS, createCSSRule } from "./inject"
import { NamedStyles } from "./types"

export function getDefaultMediaValues(): Partial<MediaValues> {
  const { width, height, scale, fontScale } = Dimensions.get("window")

  MediaQuery.remBase = 16 * fontScale

  return {
    orientation: width > height ? "landscape" : "portrait",
    width,
    height,
    "device-width": width,
    "device-height": height,
    "aspect-ratio": width / height,
    "device-aspect-ratio": width / height,
    "device-pixel-ratio": scale,
    "prefers-color-scheme": Appearance.getColorScheme() ?? undefined,
    "prefers-reduced-motion": "no-preference",
    "inverted-colors": "none",
    type: Platform.OS === "web" ? "screen" : Platform.OS,
  }
}

// eslint-disable-next-line unicorn/no-static-only-class
export class StyleSheet {
  static create<T extends NamedStyles<T> | NamedStyles<any>>(
    styles: T | NamedStyles<T>,
  ): T {
    return RNStyleSheet.create(styles)
  }

  static createWithMedia<T extends NamedStyles<T> | NamedStyles<any>>(
    stylesWithQuery: T | NamedStyles<T>,
    mediaValues: Partial<MediaValues> = {},
  ): {
    fullStyles: T
    styles: T
  } {
    if (!stylesWithQuery) {
      return { fullStyles: {} as T, styles: {} as T }
    }

    let cleanStyles = { ...stylesWithQuery }
    const mediaStyles: Record<keyof T, any> = {} as any

    for (const [key, styleWithQuery] of Object.entries(stylesWithQuery)) {
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

    const styles: T = Object.fromEntries(
      Object.entries(this.create(cleanStyles)).map(([key, style]) =>
        mediaStyles[key] == null
          ? [key, style]
          : [key, [style, mediaStyles[key]]],
      ),
    )

    return {
      fullStyles: stylesWithQuery as T,
      styles,
    }
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
