import { isMedia, isMediaOrPseudo, mergeDeep } from "@md3-ui/utils"
import MediaQuery from "css-mediaquery"
import {
  Appearance,
  Dimensions,
  Platform,
  StyleProp,
  StyleSheet as RNStyleSheet,
} from "react-native"
import { addCSS } from "./inject"
import { NamedStyles } from "./types"
import { createCSSRule, createDeclarationBlock } from "./utils"

// eslint-disable-next-line global-require, import/no-extraneous-dependencies
const hash = require("react-native-web/dist/vendor/hash")
  .default as typeof import("react-native-web/dist/vendor/hash").default

function getDefaultMediaValues(): Partial<MediaQuery.MediaValues> {
  const { width, height } = Dimensions.get("window")
  return {
    orientation: width > height ? "landscape" : "portrait",
    width,
    height,
    "device-width": width,
    "device-height": height,
    "aspect-ratio": width / height,
    "device-aspect-ratio": width / height,
    "prefers-color-scheme": Appearance.getColorScheme(),
    // @ts-ignore: `type` if missing in type definitions
    type: Platform.OS,
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
    mediaValues: Partial<MediaQuery.MediaValues> = {},
  ): {
    styles: T
    fullStyles: T
    ids: Record<keyof T, string>
  } {
    let ids: Record<keyof T, string> = {} as any

    if (!stylesWithQuery) {
      return { ids, styles: {} as T, fullStyles: {} as T }
    }

    let cleanStyles = { ...stylesWithQuery }

    Object.entries(stylesWithQuery).forEach(([key, styleWithQuery]) => {
      if (!styleWithQuery) {
        return
      }

      Object.keys(styleWithQuery)
        .filter((query) => isMediaOrPseudo(query))
        .forEach((query) => {
          if (Platform.OS === "web") {
            const css = createDeclarationBlock(styleWithQuery[query])
            const stringHash = `md3-${hash(`${key}${query}${css}`)}`
            const rule = createCSSRule(query, stringHash, css)

            addCSS(stringHash, rule)
            delete cleanStyles[key][query]

            ids = {
              ...ids,
              [key]: `${ids[key] ? `${ids[key]} ` : ""}${stringHash}`,
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
        })
    })
    return {
      ids,
      styles: this.create(cleanStyles) as T,
      fullStyles: stylesWithQuery as T,
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
