/* eslint-disable react-hooks/rules-of-hooks */
import { isMedia, memoize, objectFilter } from "@md3-ui/utils"
import MediaQuery, { MediaValues } from "css-mediaquery2"
import { useEffect, useMemo, useState } from "react"
import { Platform } from "react-native"
import { StyleSheet } from "./style-sheet"
import { RNStyle } from "./types"
import { useMediaValues } from "./use-media-values"

const findMediaFeatures = memoize((emotionStyles: RNStyle) =>
  Object.keys(emotionStyles)
    .filter((item) => isMedia(item))
    .reduce((acc, query) => {
      const ast = MediaQuery.parse(query.replace("@media", ""))
      for (const node of ast) {
        for (const expression of node.expressions) {
          acc.add(expression.feature)
        }
      }
      return acc
    }, new Set<keyof MediaValues>()),
)

export function useStyleSheet(styles: RNStyle) {
  let mediaValues: Partial<MediaValues> | undefined

  if (Platform.OS !== "web") {
    const rawMediaValues = useMediaValues()

    let setMediaValues: React.Dispatch<Partial<MediaValues>>
    ;[mediaValues, setMediaValues] =
      useState<Partial<MediaValues>>(rawMediaValues)

    useEffect(() => {
      const nextMediaValues = objectFilter(rawMediaValues, (value, key) =>
        findMediaFeatures(styles).has(key),
      )
      if (JSON.stringify(mediaValues) !== JSON.stringify(nextMediaValues)) {
        setMediaValues(nextMediaValues)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mediaValues, rawMediaValues, styles])
  }

  const createdStyles = useMemo(
    () =>
      StyleSheet.create(
        { style: objectFilter(styles, (style) => style != null) },
        mediaValues,
      ),
    [mediaValues, styles],
  )
  return { style: createdStyles.style }
}
