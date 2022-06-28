import { isMedia, mergeDeep } from "@md3-ui/utils"
import MediaQuery from "css-mediaquery"
import { PixelRatio } from "react-native"
import createReactDOMStyle from "react-native-web/dist/exports/StyleSheet/compiler/createReactDOMStyle"
import prefixStyles from "react-native-web/dist/modules/prefixStyles"
import { RNStyle } from "./types"

export function findBreakpoints(emotionStyles: RNStyle) {
  const allMedia = Object.keys(emotionStyles).filter(
    (item) => isMedia(item) && item.includes("width"),
  )

  const mediaValues = allMedia.reduce((acc, query) => {
    const data = MediaQuery.parse(query.replace("@media", ""))
    data.forEach((item) => {
      item.expressions.forEach((exp) => {
        if (exp.value.includes("rem") || exp.value.includes("em")) {
          acc.add(
            Number.parseInt(exp.value, 10) * 16 * PixelRatio.getFontScale(),
          )
        } else {
          acc.add(Number.parseInt(exp.value, 10))
        }
      })
    })
    return acc
  }, new Set<number>())

  return [...mediaValues]
}

export function createCSSRule(query: string, stringHash: string, css: string) {
  const dataMediaSelector = `.${stringHash}`
  return isMedia(query)
    ? `${query} {${dataMediaSelector} ${css}}`
    : `${dataMediaSelector}${query.replace(/^&/, "")} ${css}`
}

const cache = new Map<string, string>()

function hyphenateStyleName(name: string) {
  if (cache.has(name)) {
    return cache.get(name)
  }
  const newName = name
    .replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)
    .replace(/^ms-/, "-ms-")
  cache.set(name, newName)
  return newName
}

export function createDeclarationBlock(style: Record<string, any>) {
  const domStyle = prefixStyles(createReactDOMStyle(style))
  const declarationsString = Object.keys(domStyle)
    .map((property) => {
      const value = domStyle[property]
      const prop = hyphenateStyleName(property)
      if (Array.isArray(value)) {
        return value.map((v) => `${prop}:${v}`).join(";")
      }
      return `${prop}:${value} !important`
    })
    .sort()
    .join(";")
  return `{${declarationsString};}`
}

export function merge<T>(acc: T, item: unknown) {
  if (!item) {
    return acc
  }
  return mergeDeep(acc, item, {
    clone: false, // No need to clone deep, it's way faster.
  })
}
