import * as React from "react"
import { Appearance, ColorSchemeName } from "react-native"
import {
  DEFAULT_COLOR_SCHEME_STORAGE_KEY,
  DEFAULT_MODE_STORAGE_KEY,
} from "./get-init-color-scheme-script"

export type Mode = NonNullable<ColorSchemeName> | "system"
export type SystemMode = Exclude<Mode, "system">

export interface State<SupportedColorScheme extends string> {
  /**
   * User selected mode.
   * Note: on the server, mode is always undefined
   */
  mode?: Mode
  /**
   * Only valid if `mode: 'system'`, either 'light' | 'dark'.
   */
  systemMode?: SystemMode
  /**
   * The color scheme for the light mode.
   */
  lightColorScheme: SupportedColorScheme
  /**
   * The color scheme for the dark mode.
   */
  darkColorScheme: SupportedColorScheme
}

export interface Result<SupportedColorScheme extends string>
  extends State<SupportedColorScheme> {
  /**
   * The current application color scheme. It is always `undefined` on the server.
   */
  colorScheme?: SupportedColorScheme
  /**
   * `mode` is saved to internal state and localStorage
   * If `mode` is null, it will be reset to the defaultMode
   */
  setMode: (mode: Mode | null) => void
  /**
   * `colorScheme` is saved to internal state and localStorage
   * If `colorScheme` is null, it will be reset to the defaultColorScheme (light | dark)
   */
  setColorScheme: (
    colorScheme:
      | SupportedColorScheme
      | Partial<{
          light: SupportedColorScheme | null
          dark: SupportedColorScheme | null
        }>
      | null,
  ) => void
}

export function getSystemMode(
  mode: string | undefined,
): SystemMode | undefined {
  if (mode === "system") {
    return Appearance.getColorScheme() ?? undefined
  }
  return undefined
}

function processState<T>(
  state: { mode?: Mode; systemMode?: SystemMode },
  callback: (mode: SystemMode) => T,
) {
  if (
    state.mode === "light" ||
    (state.mode === "system" && state.systemMode === "light")
  ) {
    return callback("light")
  }
  if (
    state.mode === "dark" ||
    (state.mode === "system" && state.systemMode === "dark")
  ) {
    return callback("dark")
  }
  // eslint-disable-next-line unicorn/no-useless-undefined
  return undefined
}

export function getColorScheme<SupportedColorScheme extends string>(
  state: State<SupportedColorScheme>,
) {
  return processState(state, (mode) => {
    if (mode === "light") {
      return state.lightColorScheme
    }
    if (mode === "dark") {
      return state.darkColorScheme
    }
    // eslint-disable-next-line unicorn/no-useless-undefined
    return undefined
  })
}

function resolveValue(key: string, defaultValue?: string) {
  if (typeof window === "undefined") {
    // eslint-disable-next-line unicorn/no-useless-undefined
    return undefined
  }
  let value
  try {
    value = localStorage.getItem(key) || undefined
  } catch {
    // Unsupported
  }
  return value || defaultValue
}

export function useCurrentColorScheme<
  SupportedColorScheme extends string,
>(options: {
  defaultLightColorScheme: SupportedColorScheme
  defaultDarkColorScheme: SupportedColorScheme
  supportedColorSchemes: Array<SupportedColorScheme>
  defaultMode?: Mode
  modeStorageKey?: string
  colorSchemeStorageKey?: string
}): Result<SupportedColorScheme> {
  const {
    defaultMode = "light",
    defaultLightColorScheme,
    defaultDarkColorScheme,
    supportedColorSchemes = [],
    modeStorageKey = DEFAULT_MODE_STORAGE_KEY,
    colorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY,
  } = options

  const joinedColorSchemes = supportedColorSchemes.join(",")

  const [state, setState] = React.useState(() => {
    const initialMode = resolveValue(modeStorageKey, defaultMode)
    return {
      mode: initialMode,
      systemMode: getSystemMode(initialMode),
      lightColorScheme:
        resolveValue(`${colorSchemeStorageKey}-light`) ||
        defaultLightColorScheme,
      darkColorScheme:
        resolveValue(`${colorSchemeStorageKey}-dark`) || defaultDarkColorScheme,
    } as State<SupportedColorScheme>
  })

  const colorScheme = getColorScheme(state)

  const setMode: Result<SupportedColorScheme>["setMode"] = React.useCallback(
    (mode) => {
      setState((currentState) => {
        const newMode = mode ?? defaultMode
        if (typeof localStorage !== "undefined") {
          localStorage.setItem(modeStorageKey, newMode)
        }
        return {
          ...currentState,
          mode: newMode,
          systemMode: getSystemMode(newMode),
        }
      })
    },
    [modeStorageKey, defaultMode],
  )

  const setColorScheme: Result<SupportedColorScheme>["setColorScheme"] =
    React.useCallback(
      (value) => {
        if (!value || typeof value === "string") {
          if (value && !supportedColorSchemes.includes(value)) {
            console.error(
              `\`${value}\` does not exist in \`theme.colorSchemes\`.`,
            )
          } else {
            setState((currentState) => {
              const newState = { ...currentState }
              if (!value) {
                // reset to default color scheme
                newState.lightColorScheme = defaultLightColorScheme
                newState.darkColorScheme = defaultDarkColorScheme
                return newState
              }
              processState(currentState, (mode) => {
                localStorage.setItem(`${colorSchemeStorageKey}-${mode}`, value)
                if (mode === "light") {
                  newState.lightColorScheme = value
                }
                if (mode === "dark") {
                  newState.darkColorScheme = value
                }
              })
              return newState
            })
          }
        } else if (
          (value.light && !supportedColorSchemes.includes(value.light)) ||
          (value.dark && !supportedColorSchemes.includes(value.dark))
        ) {
          console.error(
            `\`${value}\` does not exist in \`theme.colorSchemes\`.`,
          )
        } else {
          setState((currentState) => {
            const newState = { ...currentState }
            if (value.light || value.light === null) {
              newState.lightColorScheme =
                value.light === null ? defaultLightColorScheme : value.light
            }
            if (value.dark || value.dark === null) {
              newState.darkColorScheme =
                value.dark === null ? defaultDarkColorScheme : value.dark
            }
            return newState
          })
          if (value.light) {
            localStorage.setItem(`${colorSchemeStorageKey}-light`, value.light)
          }
          if (value.dark) {
            localStorage.setItem(`${colorSchemeStorageKey}-dark`, value.dark)
          }
        }
      },
      [
        colorSchemeStorageKey,
        supportedColorSchemes,
        defaultLightColorScheme,
        defaultDarkColorScheme,
      ],
    )

  const handleMediaQuery = React.useCallback(
    (e?: Appearance.AppearancePreferences) => {
      if (state.mode === "system") {
        setState((currentState) => ({
          ...currentState,
          systemMode: e?.colorScheme ?? "light",
        }))
      }
    },
    [state.mode],
  )

  // Ref hack to avoid adding handleMediaQuery as a dep
  const mediaListener = React.useRef(handleMediaQuery)
  mediaListener.current = handleMediaQuery

  React.useEffect(() => {
    const handler = (...args: any) => mediaListener.current(...args)

    // Always listen to System preference
    const subscription = Appearance.addChangeListener(handler)

    return () => subscription.remove()
  }, [])

  // Save mode, lightColorScheme & darkColorScheme to localStorage
  React.useEffect(() => {
    if (state.mode) {
      localStorage.setItem(modeStorageKey, state.mode)
    }
    processState(state, (mode) => {
      if (mode === "light") {
        localStorage.setItem(
          `${colorSchemeStorageKey}-light`,
          state.lightColorScheme,
        )
      }
      if (mode === "dark") {
        localStorage.setItem(
          `${colorSchemeStorageKey}-dark`,
          state.darkColorScheme,
        )
      }
    })
  }, [state, colorSchemeStorageKey, modeStorageKey])

  // Handle when localStorage has changed
  React.useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      const value = event.newValue
      if (
        typeof event.key === "string" &&
        event.key.startsWith(colorSchemeStorageKey) &&
        // eslint-disable-next-line unicorn/prefer-regexp-test
        (!value || joinedColorSchemes.match(value))
      ) {
        // If the key is deleted, value will be null then reset color scheme to the default one.
        if (event.key.endsWith("light")) {
          setColorScheme({ light: value as SupportedColorScheme | null })
        }
        if (event.key.endsWith("dark")) {
          setColorScheme({ dark: value as SupportedColorScheme | null })
        }
      }
      if (
        event.key === modeStorageKey &&
        (!value || ["light", "dark", "system"].includes(value))
      ) {
        setMode((value as Mode) || defaultMode)
      }
    }
    window.addEventListener("storage", handleStorage)
    return () => window.removeEventListener("storage", handleStorage)
  }, [
    setColorScheme,
    setMode,
    modeStorageKey,
    colorSchemeStorageKey,
    joinedColorSchemes,
    defaultMode,
  ])

  return {
    ...state,
    colorScheme,
    setMode,
    setColorScheme,
  }
}
