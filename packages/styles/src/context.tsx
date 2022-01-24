import {
  ThemeProvider as EmotionThemeProvider,
  ThemeContext,
} from "@emotion/react"
import { theme, Theme } from "@md3-ui/theme"
import * as React from "react"

export { Global } from "@emotion/react"

export interface ThemeProviderProps {
  theme?: Partial<Theme>
}

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => (
  <EmotionThemeProvider {...props} theme={theme} />
)

function useThemeWithoutDefault(defaultTheme?: Theme) {
  const contextTheme = React.useContext(ThemeContext) as Theme | undefined
  return contextTheme == null || Object.keys(contextTheme).length === 0
    ? (defaultTheme as Theme)
    : contextTheme
}

export function useTheme(defaultTheme: Theme = theme) {
  return useThemeWithoutDefault(defaultTheme)
}
