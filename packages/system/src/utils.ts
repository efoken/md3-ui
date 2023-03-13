import { isMedia, mergeDeep } from "@md3-ui/utils"
import MediaQuery from "css-mediaquery2"
import { PixelRatio } from "react-native"
import { RNStyle } from "./types"

export function findBreakpoints(emotionStyles: RNStyle) {
  const allMedia = Object.keys(emotionStyles).filter(
    (item) => isMedia(item) && item.includes("width"),
  )

  const mediaValues = allMedia.reduce((acc, query) => {
    const data = MediaQuery.parse(query.replace("@media", ""))
    for (const item of data) {
      for (const exp of item.expressions) {
        if (exp.value.includes("rem") || exp.value.includes("em")) {
          acc.add(
            Number.parseInt(exp.value, 10) *
              MediaQuery.remBase *
              PixelRatio.getFontScale(),
          )
        } else {
          acc.add(Number.parseInt(exp.value, 10))
        }
      }
    }
    return acc
  }, new Set<number>())

  return [...mediaValues]
}

export function merge<T>(acc: T, item: unknown) {
  if (!item) {
    return acc
  }
  return mergeDeep(acc, item, {
    clone: false, // No need to clone deep, it's way faster.
  })
}
