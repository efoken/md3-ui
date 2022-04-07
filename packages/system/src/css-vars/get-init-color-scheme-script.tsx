export const DEFAULT_MODE_STORAGE_KEY = "md3-mode"
export const DEFAULT_COLOR_SCHEME_STORAGE_KEY = "md3-color-scheme"
export const DEFAULT_ATTRIBUTE = "data-md3-color-scheme"

export function getInitColorSchemeScript({
  attribute = DEFAULT_ATTRIBUTE,
  colorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY,
  defaultDarkColorScheme = "dark",
  defaultLightColorScheme = "light",
  enableSystem,
  modeStorageKey = DEFAULT_MODE_STORAGE_KEY,
}: {
  attribute?: string
  colorSchemeStorageKey?: string
  defaultDarkColorScheme?: string
  defaultLightColorScheme?: string
  enableSystem?: boolean
  modeStorageKey?: string
} = {}) {
  return (
    <script
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: `(function() { try {
          var mode = localStorage.getItem('${modeStorageKey}');
          var colorScheme = '';
          if (mode === 'system' || (!mode && !!${enableSystem})) {
            // handle system mode
            var mql = window.matchMedia('(prefers-color-scheme: dark)');
            if (mql.matches) {
              colorScheme = localStorage.getItem('${colorSchemeStorageKey}-dark') || '${defaultDarkColorScheme}';
            } else {
              colorScheme = localStorage.getItem('${colorSchemeStorageKey}-light') || '${defaultLightColorScheme}';
            }
          }
          if (mode === 'light') {
            colorScheme = localStorage.getItem('${colorSchemeStorageKey}-light') || '${defaultLightColorScheme}';
          }
          if (mode === 'dark') {
            colorScheme = localStorage.getItem('${colorSchemeStorageKey}-dark') || '${defaultDarkColorScheme}';
          }
          if (colorScheme) {
            document.documentElement.setAttribute('${attribute}', colorScheme);
          }
        } catch (e) {} })();`,
      }}
    />
  )
}
