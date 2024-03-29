import { resolveProps } from "@md3-ui/utils"
import { useTheme } from "./context"

interface ThemeWithProps<Components> {
  comp: {
    [K in keyof Components]: { defaultProps?: Partial<Components[K]> }
  }
}

type ThemedProps<Theme, Name extends keyof any> = Theme extends {
  comp: Record<Name, { defaultProps?: infer Props }>
}
  ? Props
  : {}

function getThemeProps<
  Theme extends ThemeWithProps<any>,
  Props extends Partial<any>,
  Name extends keyof any,
>({
  props,
  name,
  theme,
}: {
  props: Props
  name: Name
  theme: Theme
}): Props & ThemedProps<Theme, Name> {
  if (theme.comp?.[name]?.defaultProps == null) {
    return props as any
  }

  return resolveProps(theme.comp[name].defaultProps ?? {}, props) as Props &
    ThemedProps<Theme, Name>
}

export function useThemeProps<
  Theme extends ThemeWithProps<any>,
  Props extends Partial<any>,
  Name extends keyof any,
>({
  name,
  props,
  defaultTheme,
}: {
  name: Name
  props: Props
  defaultTheme?: Theme
}) {
  const theme = useTheme(defaultTheme as any)

  return getThemeProps({ name, props, theme }) as Props &
    ThemedProps<Theme, Name>
}
