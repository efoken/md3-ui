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
   * The current application color scheme. It is always `undefined` on the
   * server.
   */
  colorScheme?: SupportedColorScheme
  /**
   * `mode` is saved to internal state and localStorage. If `mode` is null, it
   * will be reset to the defaultMode
   */
  setMode: (mode: Mode | null) => void
  /**
   * `colorScheme` is saved to internal state and localStorage. If `colorScheme`
   * is null, it will be reset to the defaultColorScheme (light | dark).
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
  })
}

function initializeValue(key: string, defaultValue?: string) {
  if (typeof window === "undefined") {
    return
  }
  let value
  try {
    value = localStorage.getItem(key) || undefined
  } catch {
    // Unsupported
  }
  return value || defaultValue
}

interface UseCurrentColoSchemeOptions<SupportedColorScheme extends string> {
  colorSchemeStorageKey?: string
  defaultDarkColorScheme: SupportedColorScheme
  defaultLightColorScheme: SupportedColorScheme
  defaultMode?: Mode
  modeStorageKey?: string
  storageWindow?: Window | null
  supportedColorSchemes: SupportedColorScheme[]
}

export function useCurrentColorScheme<SupportedColorScheme extends string>({
  colorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY,
  defaultDarkColorScheme,
  defaultLightColorScheme,
  defaultMode = "light",
  modeStorageKey = DEFAULT_MODE_STORAGE_KEY,
  storageWindow = typeof window === "undefined" ? undefined : window,
  supportedColorSchemes = [],
}: UseCurrentColoSchemeOptions<SupportedColorScheme>): Result<SupportedColorScheme> {
  const joinedColorSchemes = supportedColorSchemes.join(",")

  const [state, setState] = React.useState(() => {
    const initialMode = initializeValue(modeStorageKey, defaultMode)
    const lightColorScheme = initializeValue(
      `${colorSchemeStorageKey}-light`,
      defaultLightColorScheme,
    )
    const darkColorScheme = initializeValue(
      `${colorSchemeStorageKey}-dark`,
      defaultDarkColorScheme,
    )
    return {
      darkColorScheme,
      lightColorScheme,
      mode: initialMode,
      systemMode: getSystemMode(initialMode),
    } as State<SupportedColorScheme>
  })

  const colorScheme = getColorScheme(state)

  const setMode: Result<SupportedColorScheme>["setMode"] = React.useCallback(
    (mode) => {
      setState((currentState) => {
        if (mode === currentState.mode) {
          // Do nothing if mode does not change
          return currentState
        }
        const newMode = mode ?? defaultMode
        try {
          localStorage.setItem(modeStorageKey, newMode)
        } catch {
          // Unsupported
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
        if (!value) {
          setState((currentState) => {
            try {
              localStorage.setItem(
                `${colorSchemeStorageKey}-light`,
                defaultLightColorScheme,
              )
              localStorage.setItem(
                `${colorSchemeStorageKey}-dark`,
                defaultDarkColorScheme,
              )
            } catch {
              // Unsupported
            }
            return {
              ...currentState,
              lightColorScheme: defaultLightColorScheme,
              darkColorScheme: defaultDarkColorScheme,
            }
          })
        } else if (typeof value === "string") {
          if (value && !joinedColorSchemes.includes(value)) {
            console.error(
              `\`${value}\` does not exist in \`theme.colorSchemes\`.`,
            )
          } else {
            setState((currentState) => {
              const newState = { ...currentState }
              processState(currentState, (mode) => {
                try {
                  localStorage.setItem(
                    `${colorSchemeStorageKey}-${mode}`,
                    value,
                  )
                } catch {
                  // Unsupported
                }
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
        } else {
          setState((currentState) => {
            const newState = { ...currentState }
            const newLightColorScheme =
              value.light === null ? defaultLightColorScheme : value.light
            const newDarkColorScheme =
              value.dark === null ? defaultDarkColorScheme : value.dark

            if (newLightColorScheme) {
              if (!joinedColorSchemes.includes(newLightColorScheme)) {
                console.error(
                  `\`${newLightColorScheme}\` does not exist in \`theme.colorSchemes\`.`,
                )
              } else {
                newState.lightColorScheme = newLightColorScheme
                try {
                  localStorage.setItem(
                    `${colorSchemeStorageKey}-light`,
                    newLightColorScheme,
                  )
                } catch {
                  // Unsupported
                }
              }
            }

            if (newDarkColorScheme) {
              if (!joinedColorSchemes.includes(newDarkColorScheme)) {
                console.error(
                  `\`${newDarkColorScheme}\` does not exist in \`theme.colorSchemes\`.`,
                )
              } else {
                newState.darkColorScheme = newDarkColorScheme
                try {
                  localStorage.setItem(
                    `${colorSchemeStorageKey}-dark`,
                    newDarkColorScheme,
                  )
                } catch {
                  // Unsupported
                }
              }
            }

            return newState
          })
        }
      },
      [
        joinedColorSchemes,
        colorSchemeStorageKey,
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
        // If the key is deleted, value will be null then reset color scheme to
        // the default one.
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
    if (storageWindow) {
      // For syncing color-scheme changes between iframes
      storageWindow.addEventListener("storage", handleStorage)
      return () => storageWindow.removeEventListener("storage", handleStorage)
    }
  }, [
    setColorScheme,
    setMode,
    modeStorageKey,
    colorSchemeStorageKey,
    joinedColorSchemes,
    defaultMode,
    storageWindow,
  ])

  return {
    ...state,
    colorScheme,
    setMode,
    setColorScheme,
  }
}
