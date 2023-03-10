import * as React from "react"
import { useAccessibilityInfo } from "./context"
import { getDefaultMediaValues } from "./style-sheet"

export function useMediaValues() {
  const [mediaValues, setMediaValues] = React.useState(getDefaultMediaValues())

  const { invertColorsEnabled, reduceMotionEnabled } = useAccessibilityInfo()

  React.useEffect(() => {
    setMediaValues((prevMediaValues) => ({
      ...prevMediaValues,
      "inverted-colors": invertColorsEnabled ? "inverted" : "none",
      "prefers-reduced-motion": reduceMotionEnabled
        ? "reduce"
        : "no-preference",
    }))
  }, [invertColorsEnabled, reduceMotionEnabled])

  return mediaValues
}
