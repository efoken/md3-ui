import {
  ThemeContext,
  ThemeProvider as EmotionThemeProvider,
} from "@emotion/react"
import { theme, Theme } from "@md3-ui/theme"
import { isEmptyObject, objectFilter } from "@md3-ui/utils"
import * as React from "react"
import { Platform, StyleProp, TextStyle as RNTextStyle } from "react-native"
import { StyleSheet } from "./style-sheet"

const TEXT_STYLE_KEYS = new Set([
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
  "writingDirection",
])

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
