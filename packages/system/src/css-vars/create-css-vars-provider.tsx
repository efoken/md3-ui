import { useEnhancedEffect } from "@md3-ui/hooks"
import { createBreakpoints, createSpacing } from "@md3-ui/theme"
import { mergeDeep } from "@md3-ui/utils"
import * as React from "react"
import { ThemeProvider } from "../context"
import { Global } from "../global"
import createGetCssVar from "./create-get-css-var"
import { cssVarsParser } from "./css-vars-parser"
import {
  DEFAULT_ATTRIBUTE,
  DEFAULT_MODE_STORAGE_KEY,
  getInitColorSchemeScript,
} from "./get-init-color-scheme-script"
import { Mode, Result, useCurrentColorScheme } from "./use-current-color-scheme"

export const DISABLE_CSS_TRANSITION =
  "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"

export interface ColorSchemeContextValue<SupportedColorScheme extends string>
  extends Result<SupportedColorScheme> {
  allColorSchemes: SupportedColorScheme[]
}

export interface CssVarsProviderConfig<ColorScheme extends string> {
  /**
   * The initial color scheme used.
   */
  defaultColorScheme: ColorScheme | { light: ColorScheme; dark: ColorScheme }
  /**
   * The initial mode used.
   * @default "light"
   */
  defaultMode?: Mode
  /**
   * Disable CSS transitions when switching between modes or color schemes.
   * @default false
   */
  disableTransitionOnChange?: boolean
  /**
   * Indicate to the browser which color scheme is used (light or dark) for
   * rendering built-in UI.
   * @default true
   */
  enableColorScheme?: boolean
  /**
   * CSS variable prefix.
   * @default ""
   */
  prefix?: string
}

export function createCssVarsProvider<
  ColorScheme extends string,
  ThemeInput extends { colorSchemes?: Partial<Record<ColorScheme, any>> },
>({
  defaultColorScheme: designSystemColorScheme,
  defaultMode: desisgnSystemMode = "light",
  disableTransitionOnChange: designSystemTransitionOnChange = false,
  enableColorScheme: designSystemEnableColorScheme = true,
  prefix: designSystemPrefix = "",
  resolveTheme,
  shouldSkipGeneratingVar,
  theme: baseTheme = {},
}: CssVarsProviderConfig<ColorScheme> & {
  resolveTheme?: (theme: any) => any
  shouldSkipGeneratingVar?: (keys: string[], value: string | number) => boolean
  /**
   * The calculated theme object that will be passed through context.
   */
  theme: any
}) {
  const systemSpacing = createSpacing(baseTheme.spacing)
  const systemBreakpoints = createBreakpoints(baseTheme.breakpoints ?? {})

  if (
    !baseTheme.colorSchemes ||
    (typeof designSystemColorScheme === "string" &&
      !baseTheme.colorSchemes[designSystemColorScheme]) ||
    (typeof designSystemColorScheme === "object" &&
      !baseTheme.colorSchemes[designSystemColorScheme?.light]) ||
    (typeof designSystemColorScheme === "object" &&
      !baseTheme.colorSchemes[designSystemColorScheme?.dark])
  ) {
    console.error(
      `MUI: \`${designSystemColorScheme}\` does not exist in \`theme.colorSchemes\`.`,
    )
  }
  const ColorSchemeContext = React.createContext<
    ColorSchemeContextValue<ColorScheme>
  >(undefined as any)

  const useColorScheme = () => {
    const value = React.useContext(ColorSchemeContext)
    if (!value) {
      throw new Error(
        "MD3-UI: `useColorScheme` must be called under <CssVarsProvider />",
      )
    }
    return value
  }

  const CssVarsProvider: React.FC<
    React.PropsWithChildren<
      Partial<CssVarsProviderConfig<ColorScheme>> & {
        /**
         * The body attribute name to attach color scheme.
         * @default "data-md3-color-scheme"
         */
        attribute?: string
        /**
         * The key in the local storage used to store current color scheme.
         * @default "md3-mode"
         */
        modeStorageKey?: string
        theme?: ThemeInput
      }
    >
  > = ({
    children,
    theme: themeProp = {} as any,
    prefix = designSystemPrefix,
    modeStorageKey = DEFAULT_MODE_STORAGE_KEY,
    attribute = DEFAULT_ATTRIBUTE,
    defaultMode = desisgnSystemMode,
    defaultColorScheme = designSystemColorScheme,
    disableTransitionOnChange = designSystemTransitionOnChange,
    enableColorScheme = designSystemEnableColorScheme,
  }) => {
    const { colorSchemes: baseColorSchemes = {}, ...restBaseTheme } = baseTheme
    const { colorSchemes: colorSchemesProp = {}, ...restThemeProp } = themeProp
    const hasMounted = React.useRef(false)

    // eslint-disable-next-line prefer-const
    let { components = {}, ...mergedTheme } = mergeDeep(
      restBaseTheme,
      restThemeProp,
    )
    const colorSchemes = mergeDeep(baseColorSchemes, colorSchemesProp)

    const allColorSchemes = Object.keys(colorSchemes) as ColorScheme[]

    const defaultLightColorScheme =
      typeof defaultColorScheme === "string"
        ? defaultColorScheme
        : defaultColorScheme.light
    const defaultDarkColorScheme =
      typeof defaultColorScheme === "string"
        ? defaultColorScheme
        : defaultColorScheme.dark
    const {
      mode,
      setMode,
      systemMode,
      lightColorScheme,
      darkColorScheme,
      colorScheme,
      setColorScheme,
    } = useCurrentColorScheme({
      supportedColorSchemes: allColorSchemes,
      defaultLightColorScheme,
      defaultDarkColorScheme,
      modeStorageKey,
      defaultMode,
    })
    const resolvedColorScheme = (() => {
      if (!colorScheme) {
        // This scope occurs on the server
        if (defaultMode === "dark") {
          return defaultDarkColorScheme
        }
        // use light color scheme, if default mode is 'light' | 'auto'
        return defaultLightColorScheme
      }
      return colorScheme
    })()

    const {
      css: rootCss,
      vars: rootVars,
      parsedTheme,
    } = cssVarsParser(mergedTheme, {
      prefix,
      basePrefix: designSystemPrefix,
      shouldSkipGeneratingVar,
    })

    mergedTheme = {
      ...parsedTheme,
      components,
      colorSchemes,
      prefix,
      vars: rootVars,
      spacing: themeProp.spacing
        ? createSpacing(themeProp.spacing)
        : systemSpacing,
      breakpoints: themeProp.breakpoints
        ? createBreakpoints(themeProp.breakpoints)
        : systemBreakpoints,
      getCssVar: createGetCssVar(prefix),
    }

    const styleSheet = {}

    Object.entries(colorSchemes).forEach(([key, scheme]) => {
      const {
        css,
        vars,
        parsedTheme: parsedScheme,
      } = cssVarsParser(scheme as any, {
        prefix,
        basePrefix: designSystemPrefix,
        shouldSkipGeneratingVar,
      })
      mergedTheme.vars = mergeDeep(mergedTheme.vars, vars)
      if (key === resolvedColorScheme) {
        mergedTheme = {
          ...mergedTheme,
          ...parsedScheme,
        }
      }
      const resolvedDefaultColorScheme = (() => {
        if (typeof defaultColorScheme === "string") {
          return defaultColorScheme
        }
        if (defaultMode === "dark") {
          return defaultColorScheme.dark
        }
        return defaultColorScheme.light
      })()
      if (key === resolvedDefaultColorScheme) {
        styleSheet[":root"] = css
      } else {
        styleSheet[`[${attribute}="${key}"]`] = css
      }
    })

    React.useEffect(() => {
      if (colorScheme) {
        // attaches attribute to <html> because the css variables are attached to :root (html)
        document.documentElement.setAttribute(attribute, colorScheme)
      }
    }, [colorScheme, attribute])

    useEnhancedEffect(() => {
      if (!mode || !enableColorScheme) {
        return () => {}
      }
      const priorColorScheme =
        document.documentElement.style.getPropertyValue("color-scheme")
      // `color-scheme` tells browser to render built-in elements according to its value: `light` or `dark`
      if (mode === "system") {
        document.documentElement.style.setProperty(
          "color-scheme",
          systemMode ?? null,
        )
      } else {
        document.documentElement.style.setProperty("color-scheme", mode)
      }

      return () => {
        document.documentElement.style.setProperty(
          "color-scheme",
          priorColorScheme,
        )
      }
    }, [mode, systemMode, enableColorScheme])

    React.useEffect(() => {
      let timer: ReturnType<typeof setTimeout>
      if (disableTransitionOnChange && hasMounted.current) {
        // credit: https://github.com/pacocoursey/next-themes/blob/b5c2bad50de2d61ad7b52a9c5cdc801a78507d7a/index.tsx#L313
        const css = document.createElement("style")
        css.append(document.createTextNode(DISABLE_CSS_TRANSITION))
        document.head.append(css)

        // Force browser repaint
        ;(() => window.getComputedStyle(document.body))()

        timer = setTimeout(() => {
          css.remove()
        }, 1)
      }
      return () => {
        clearTimeout(timer)
      }
    }, [colorScheme, disableTransitionOnChange])

    React.useEffect(() => {
      hasMounted.current = true
      return () => {
        hasMounted.current = false
      }
    }, [])

    return (
      <ColorSchemeContext.Provider
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        value={{
          mode,
          setMode,
          lightColorScheme,
          darkColorScheme,
          colorScheme,
          setColorScheme,
          allColorSchemes,
        }}
      >
        <Global styles={{ ":root": rootCss }} />
        <Global styles={styleSheet} />
        <ThemeProvider
          theme={resolveTheme != null ? resolveTheme(mergedTheme) : mergedTheme}
        >
          {children}
        </ThemeProvider>
      </ColorSchemeContext.Provider>
    )
  }

  return { CssVarsProvider, useColorScheme, getInitColorSchemeScript }
}
