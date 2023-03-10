import { Theme } from "@md3-ui/theme"
import { mergeDeep } from "@md3-ui/utils"
import * as React from "react"
import { ThemeProvider, useTheme } from "../context"
import { Global } from "../global"
import {
  DEFAULT_ATTRIBUTE,
  DEFAULT_COLOR_SCHEME_STORAGE_KEY,
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
   * DOM attribute for applying color scheme.
   * @default "data-md3-color-scheme"
   */
  attribute?: string
  /**
   * The localStorage key used to store `colorScheme`.
   * @default "md3-color-scheme"
   */
  colorSchemeStorageKey?: string
  /**
   * Design system default color scheme.
   */
  defaultColorScheme: ColorScheme | { light: ColorScheme; dark: ColorScheme }
  /**
   * Design system default mode.
   * @default "light"
   */
  defaultMode?: Mode
  /**
   * Disable CSS transitions when switching between modes or color schemes.
   * @default false
   */
  disableTransitionOnChange?: boolean
  /**
   * The localStorage key used to store application `mode`.
   * @default "md3-mode"
   */
  modeStorageKey?: string
}

export function createCssVarsProvider<ColorScheme extends string>({
  attribute: defaultAttribute = DEFAULT_ATTRIBUTE,
  colorSchemeStorageKey:
    defaultColorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY,
  defaultColorScheme: designSystemColorScheme,
  defaultMode: designSystemMode = "light",
  disableTransitionOnChange: designSystemTransitionOnChange = false,
  excludeVariablesFromRoot,
  modeStorageKey: defaultModeStorageKey = DEFAULT_MODE_STORAGE_KEY,
  resolveTheme,
  theme: defaultTheme = {},
}: CssVarsProviderConfig<ColorScheme> & {
  excludeVariablesFromRoot?: (cssVarPrefix: string) => string[]
  resolveTheme?: (theme: any) => any
  theme: any
}) {
  if (
    !defaultTheme.colorSchemes ||
    (typeof designSystemColorScheme === "string" &&
      !defaultTheme.colorSchemes[designSystemColorScheme]) ||
    (typeof designSystemColorScheme === "object" &&
      !defaultTheme.colorSchemes[designSystemColorScheme?.light]) ||
    (typeof designSystemColorScheme === "object" &&
      !defaultTheme.colorSchemes[designSystemColorScheme?.dark])
  ) {
    console.error(
      `MD3-UI: \`${designSystemColorScheme}\` does not exist in \`theme.colorSchemes\`.`,
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
         * The node used to attach the color-scheme attribute.
         * @default document
         */
        colorSchemeNode?: Element | null
        /**
         * The CSS selector for attaching the generated custom properties.
         * @default ":root"
         */
        colorSchemeSelector?: string
        /**
         * If `true`, the provider creates its own context and generate
         * stylesheet as if it is a root `CssVarsProvider`.
         * @default false
         */
        disableNestedContext?: boolean
        /**
         * If `true`, the style sheet won't be generated. This is useful for
         * controlling nested `CssVarsProvider` behavior.
         * @default false
         */
        disableStyleSheetGeneration?: boolean
        /**
         * The document used to perform `disableTransitionOnChange` feature.
         * @default document
         */
        documentNode?: Document | null
        /**
         * The window that attaches the storage event listener.
         * @default window
         */
        storageWindow?: Window | null
        theme?: {
          colorSchemes: Record<ColorScheme, Record<string, any>>
          cssVarPrefix?: string
        }
      }
    >
  > = ({
    attribute = defaultAttribute,
    children,
    colorSchemeNode = typeof document === "undefined"
      ? undefined
      : document.documentElement,
    colorSchemeSelector = ":root",
    colorSchemeStorageKey = defaultColorSchemeStorageKey,
    defaultColorScheme = designSystemColorScheme,
    defaultMode = designSystemMode,
    disableNestedContext = false,
    disableStyleSheetGeneration = false,
    disableTransitionOnChange = designSystemTransitionOnChange,
    documentNode = typeof document === "undefined" ? undefined : document,
    modeStorageKey = defaultModeStorageKey,
    storageWindow = typeof window === "undefined" ? undefined : window,
    theme: themeProp = defaultTheme,
  }) => {
    const mounted = React.useRef(false)
    const upperTheme: any = useTheme()
    const context = React.useContext(ColorSchemeContext)
    const nested = !!context && !disableNestedContext

    const {
      colorSchemes = {},
      components = {},
      cssVarPrefix,
      generateCssVars = () => ({ vars: {}, css: {} }),
      ...restThemeProp
    } = themeProp

    const allColorSchemes = Object.keys(colorSchemes) as ColorScheme[]

    const defaultLightColorScheme =
      typeof defaultColorScheme === "string"
        ? defaultColorScheme
        : defaultColorScheme.light
    const defaultDarkColorScheme =
      typeof defaultColorScheme === "string"
        ? defaultColorScheme
        : defaultColorScheme.dark

    // 1. Get the data about the `mode`, `colorScheme`, and setter functions.
    const {
      colorScheme: stateColorScheme,
      darkColorScheme,
      lightColorScheme,
      mode: stateMode,
      setColorScheme,
      setMode,
      systemMode,
    } = useCurrentColorScheme({
      colorSchemeStorageKey,
      defaultDarkColorScheme,
      defaultLightColorScheme,
      defaultMode,
      modeStorageKey,
      storageWindow,
      supportedColorSchemes: allColorSchemes,
    })

    let mode = stateMode
    let colorScheme = stateColorScheme

    if (nested) {
      mode = context.mode
      colorScheme = context.colorScheme
    }

    const calculatedMode = (() => {
      if (mode) {
        return mode
      }
      // This scope occurs on the server
      if (defaultMode === "system") {
        return designSystemMode
      }
      return defaultMode
    })()
    const calculatedColorScheme = (() => {
      if (!colorScheme) {
        // This scope occurs on the server
        if (calculatedMode === "dark") {
          return defaultDarkColorScheme
        }
        // use light color scheme, if default mode is 'light' | 'system'
        return defaultLightColorScheme
      }
      return colorScheme
    })()

    // 2. Create CSS variables and store them in objects (to be generated in
    //    stylesheets in the final step)
    const { css: rootCss, vars: rootVars } = generateCssVars()

    // 3. Start composing the theme object
    const theme: Theme = {
      ...restThemeProp,
      colorSchemes,
      components,
      cssVarPrefix,
      getColorSchemeSelector: (targetColorScheme: string) =>
        `[${attribute}="${targetColorScheme}"] &`,
      vars: rootVars,
    }

    // 4. Create color CSS variables and store them in objects (to be generated
    //    in stylesheets in the final step).
    //    The default color scheme stylesheet is constructed to have the least
    //    CSS specificity.
    //    The other color schemes uses selector, default as data attribute, to
    //    increase the CSS specificity so that they can override the default
    //    color scheme stylesheet.
    const defaultColorSchemeStyleSheet = {}
    const otherColorSchemesStyleSheet = {}
    for (const [key, scheme] of Object.entries<any>(colorSchemes)) {
      const { css, vars } = generateCssVars(key)
      theme.vars = mergeDeep(theme.vars, vars)
      if (key === calculatedColorScheme) {
        // 4.1 Merge the selected color scheme to the theme
        for (const schemeKey of Object.keys(scheme)) {
          theme[schemeKey] =
            // shallow merge the 1st level structure of the theme.
            scheme[schemeKey] && typeof scheme[schemeKey] === "object"
              ? {
                  ...theme[schemeKey],
                  ...scheme[schemeKey],
                }
              : scheme[schemeKey]
        }
        if (theme.sys.color) {
          theme.sys.color.mode = key
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
        if (excludeVariablesFromRoot) {
          const excludedVariables = {}
          for (const cssVar of excludeVariablesFromRoot(cssVarPrefix)) {
            excludedVariables[cssVar] = css[cssVar]
            delete css[cssVar]
          }
          defaultColorSchemeStyleSheet[`[${attribute}="${key}"]`] =
            excludedVariables
        }
        defaultColorSchemeStyleSheet[
          `${colorSchemeSelector}, [${attribute}="${key}"]`
        ] = css
      } else {
        otherColorSchemesStyleSheet[
          `${
            colorSchemeSelector === ":root" ? "" : colorSchemeSelector
          }[${attribute}="${key}"]`
        ] = css
      }
    }

    theme.vars = mergeDeep(theme.vars, rootVars)

    // 5. Declaring effects
    // 5.1 Updates the selector value to use the current color scheme which tells CSS to use the proper stylesheet.
    React.useEffect(() => {
      if (colorScheme && colorSchemeNode) {
        // attaches attribute to <html> because the css variables are attached to :root (html)
        colorSchemeNode.setAttribute(attribute, colorScheme)
      }
    }, [colorScheme, attribute, colorSchemeNode])

    // 5.2 Remove the CSS transition when color scheme changes to create instant experience.
    // credit: https://github.com/pacocoursey/next-themes/blob/b5c2bad50de2d61ad7b52a9c5cdc801a78507d7a/index.tsx#L313
    React.useEffect(() => {
      let timer: ReturnType<typeof setTimeout>
      if (disableTransitionOnChange && mounted.current && documentNode) {
        const css = documentNode.createElement("style")
        css.append(documentNode.createTextNode(DISABLE_CSS_TRANSITION))
        documentNode.head.append(css)

        // Force browser repaint
        ;(() => window.getComputedStyle(documentNode.body))()

        timer = setTimeout(() => {
          css.remove()
        }, 1)
      }
      return () => {
        clearTimeout(timer)
      }
    }, [colorScheme, disableTransitionOnChange, documentNode])
    React.useEffect(() => {
      mounted.current = true
      return () => {
        mounted.current = false
      }
    }, [])

    const contextValue = React.useMemo(
      () => ({
        mode,
        systemMode,
        setMode,
        lightColorScheme,
        darkColorScheme,
        colorScheme,
        setColorScheme,
        allColorSchemes,
      }),
      [
        allColorSchemes,
        colorScheme,
        darkColorScheme,
        lightColorScheme,
        mode,
        setColorScheme,
        setMode,
        systemMode,
      ],
    )

    let shouldGenerateStyleSheet = true
    if (
      disableStyleSheetGeneration ||
      (nested && upperTheme?.cssVarPrefix === cssVarPrefix)
    ) {
      shouldGenerateStyleSheet = false
    }

    const element = (
      <>
        {shouldGenerateStyleSheet && (
          <>
            <Global styles={{ ":root": rootCss }} />
            <Global styles={defaultColorSchemeStyleSheet} />
            <Global styles={otherColorSchemesStyleSheet} />
          </>
        )}
        <ThemeProvider theme={resolveTheme ? resolveTheme(theme) : theme}>
          {children}
        </ThemeProvider>
      </>
    )

    if (nested) {
      return element
    }

    return (
      <ColorSchemeContext.Provider value={contextValue}>
        {element}
      </ColorSchemeContext.Provider>
    )
  }

  return { CssVarsProvider, useColorScheme, getInitColorSchemeScript }
}
