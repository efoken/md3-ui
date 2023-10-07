import {
  ThemeProvider as EmotionThemeProvider,
  ThemeContext,
} from "@emotion/react"
import { Theme, theme } from "@md3-ui/theme"
import { isEmptyObject, mergeDeep, objectFilter } from "@md3-ui/utils"
import { createContext, useContext, useMemo } from "react"
import {
  Platform,
  TextStyle as RNTextStyle,
  ViewStyle as RNViewStyle,
  StyleProp,
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

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme: themeProp,
  ...props
}) => (
  <EmotionThemeProvider
    theme={mergeDeep(theme, themeProp, { clone: false })}
    {...props}
  />
)

function useThemeWithoutDefault(defaultTheme?: Theme) {
  const contextTheme = useContext(ThemeContext) as Theme | undefined
  return contextTheme == null || isEmptyObject(contextTheme)
    ? (defaultTheme as Theme)
    : contextTheme
}

export function useTheme(defaultTheme: Theme = theme) {
  return useThemeWithoutDefault(defaultTheme)
}

export const TextStyleContext = createContext<RNTextStyle>({})

export interface TextStyleProviderProps {
  children?: React.ReactNode
  style?: StyleProp<RNTextStyle>
  wrapChildren?: boolean
}

export const TextStyleProvider: React.FC<TextStyleProviderProps> = ({
  children,
  style: styleProp = {},
  wrapChildren = true,
}) => {
  const style = useMemo(
    () =>
      Platform.OS === "web"
        ? (styleProp as RNTextStyle)
        : StyleSheet.flatten([styleProp]),
    [styleProp],
  )

  return (
    <TextStyleContext.Provider value={style}>
      {Platform.OS === "web" && wrapChildren ? (
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
  return objectFilter(useContext(TextStyleContext), (value, key) =>
    TEXT_STYLE_KEYS.has(key),
  )
}
