import createReactDOMStyle from "react-native-web/dist/exports/StyleSheet/compiler/createReactDOMStyle"
import prefixStyles from "react-native-web/dist/modules/prefixStyles"
import { preprocess } from "./preprocess"

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
  const domStyle = prefixStyles(createReactDOMStyle(preprocess(style)))
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
