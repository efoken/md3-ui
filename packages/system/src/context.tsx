import {
  ThemeContext,
  ThemeProvider as EmotionThemeProvider,
} from "@emotion/react"
import { theme, Theme } from "@md3-ui/theme"
import { isEmptyObject, objectFilter } from "@md3-ui/utils"
import * as React from "react"
import {
  AccessibilityChangeEventName,
  AccessibilityInfo,
  Platform,
  StyleProp,
  TextStyle as RNTextStyle,
  ViewStyle as RNViewStyle,
} from "react-native"
import { StyleSheet } from "./style-sheet"

const TEXT_STYLE_KEYS = new Set<string>([
  "color",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "includeFontPadding",
  "letterSpacing",
  "lineHeight",
  "textAlign",
  "textAlignVertical",
  "textDecorationColor",
  "textDecorationLine",
  "textDecorationStyle",
  "textShadowColor",
  "textShadowOffset",
  "textShadowRadius",
  "textTransform",
  "verticalAlign",
  "writingDirection",
] satisfies Exclude<keyof RNTextStyle, keyof RNViewStyle>[])

export interface ThemeProviderProps {
  children: React.ReactNode
  theme?: Partial<Theme>
}

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => (
  <EmotionThemeProvider {...props} theme={theme} />
)

function useThemeWithoutDefault(defaultTheme?: Theme) {
  const contextTheme = React.useContext(ThemeContext) as Theme | undefined
  return contextTheme == null || isEmptyObject(contextTheme)
    ? (defaultTheme as Theme)
    : contextTheme
}

export function useTheme(defaultTheme: Theme = theme) {
  return useThemeWithoutDefault(defaultTheme)
}

const TextStyleContext = React.createContext<RNTextStyle>({})

export interface TextStyleProviderProps {
  children?: React.ReactNode
  style?: StyleProp<RNTextStyle>
}

export const TextStyleProvider: React.FC<TextStyleProviderProps> = ({
  children,
  style: styleProp = {},
}) => {
  const style = React.useMemo(
    () => StyleSheet.flatten([styleProp]),
    [styleProp],
  )

  return (
    <TextStyleContext.Provider value={style}>
      {Platform.OS === "web" ? (
        <div
          style={{
            ...objectFilter(style, (value, key) => TEXT_STYLE_KEYS.has(key)),
            display: "contents",
          }}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </TextStyleContext.Provider>
  )
}

export function useTextStyle() {
  return React.useContext(TextStyleContext)
}

const AccessibilityInfoContext = React.createContext({
  invertColorsEnabled: false,
  reduceMotionEnabled: false,
})

function useAccessibilityChangeEventHandler(
  eventName: AccessibilityChangeEventName,
  initializerName:
    | "isBoldTextEnabled"
    | "isGrayscaleEnabled"
    | "isInvertColorsEnabled"
    | "isReduceMotionEnabled"
    | "isReduceTransparencyEnabled"
    | "isScreenReaderEnabled",
) {
  const [enabled, setEnabled] = React.useState(false)

  React.useEffect(() => {
    if (!AccessibilityInfo[initializerName]) {
      return () => {}
    }

    AccessibilityInfo[initializerName]().then(setEnabled)

    const subscription = AccessibilityInfo.addEventListener(
      eventName,
      setEnabled,
    )

    return () => {
      subscription.remove()
    }
  }, [eventName, initializerName])

  return enabled
}

export interface AccessibilityInfoProviderProps {
  children?: React.ReactNode
}

export const AccessibilityInfoProvider: React.FC<
  AccessibilityInfoProviderProps
> = ({ children }) => {
  const invertColorsEnabled = useAccessibilityChangeEventHandler(
    "invertColorsChanged",
    "isInvertColorsEnabled",
  )
  const reduceMotionEnabled = useAccessibilityChangeEventHandler(
    "reduceMotionChanged",
    "isReduceMotionEnabled",
  )

  const context = React.useMemo(
    () => ({ invertColorsEnabled, reduceMotionEnabled }),
    [invertColorsEnabled, reduceMotionEnabled],
  )

  return (
    <AccessibilityInfoContext.Provider value={context}>
      {children}
    </AccessibilityInfoContext.Provider>
  )
}

export function useAccessibilityInfo() {
  return React.useContext(AccessibilityInfoContext)
}
