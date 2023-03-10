/* eslint-disable react-hooks/rules-of-hooks */
import { objectFilter } from "@md3-ui/utils"
import { MediaValues } from "css-mediaquery2"
import * as React from "react"
import { Platform, useWindowDimensions } from "react-native"
import { StyleSheet } from "./style-sheet"
import { RNStyle } from "./types"
import { useMediaValues } from "./use-media-values"
import { findBreakpoints } from "./utils"

export function useStyleSheet(styles: RNStyle) {
  let breakpoint: number | undefined
  let mediaValues: Partial<MediaValues> = {}

  if (Platform.OS !== "web") {
    const { width } = useWindowDimensions()
    const breakpoints = React.useMemo(() => findBreakpoints(styles), [styles])

    const getBreakpoint = React.useCallback(
      (newWidth: number) => breakpoints.find((item) => newWidth < item),
      [breakpoints],
    )

    let setBreakpoint: React.Dispatch<React.SetStateAction<number | undefined>>
    ;[breakpoint, setBreakpoint] = React.useState(getBreakpoint(width))

    React.useEffect(() => {
      setBreakpoint(getBreakpoint(width))
    }, [getBreakpoint, setBreakpoint, width])

    mediaValues = useMediaValues()
  }

  const { styles: createdStyles } = React.useMemo(
    () =>
      StyleSheet.createWithMedia(
        { styles: objectFilter(styles, (style) => style != null) },
        mediaValues,
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [breakpoint, mediaValues, styles],
  )
  return { style: createdStyles.styles }
}
