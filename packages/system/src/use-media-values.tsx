import MediaQuery, { MediaValues } from "css-mediaquery2"
import * as React from "react"
import {
  Appearance,
  Dimensions,
  Platform,
  useWindowDimensions,
} from "react-native"
import { useAccessibilityInfo } from "./use-accessibility-info"

type DefaultMediaValues = Omit<
  Partial<MediaValues>,
  | "aspect-ratio"
  | "device-aspect-ratio"
  | "device-height"
  | "device-pixel-ratio"
  | "device-width"
  | "height"
  | "inverted-colors"
  | "prefers-color-scheme"
  | "prefers-reduced-motion"
  | "type"
  | "width"
> &
  Pick<
    MediaValues,
    | "inverted-colors"
    | "prefers-color-scheme"
    | "prefers-reduced-motion"
    | "type"
  > & {
    "aspect-ratio": number
    "device-aspect-ratio": number
    "device-height": number
    "device-pixel-ratio": number
    "device-width": number
    height: number
    width: number
  }

export function getDefaultMediaValues(): DefaultMediaValues {
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
    "prefers-color-scheme": Appearance.getColorScheme() ?? "light",
    "prefers-reduced-motion": "no-preference",
    "inverted-colors": "none",
    type: Platform.OS === "web" ? "screen" : Platform.OS,
  }
}

const MediaValuesContext = React.createContext(getDefaultMediaValues())

export interface MediaValuesProviderProps {
  children?: React.ReactNode
}

export const MediaValuesProvider: React.FC<MediaValuesProviderProps> = ({
  children,
}) => {
  const { invertColorsEnabled, reduceMotionEnabled } = useAccessibilityInfo()
  const { width, height, scale } = useWindowDimensions()

  const context = React.useMemo<DefaultMediaValues>(
    () => ({
      ...getDefaultMediaValues(),
      width,
      height,
      "device-pixel-ratio": scale,
      "prefers-reduced-motion": reduceMotionEnabled
        ? "reduce"
        : "no-preference",
      "inverted-colors": invertColorsEnabled ? "inverted" : "none",
    }),
    [height, invertColorsEnabled, reduceMotionEnabled, scale, width],
  )

  return (
    <MediaValuesContext.Provider value={context}>
      {children}
    </MediaValuesContext.Provider>
  )
}

export function useMediaValues() {
  return React.useContext(MediaValuesContext)
}
