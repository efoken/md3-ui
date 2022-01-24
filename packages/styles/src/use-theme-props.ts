import { resolveProps } from "@md3-ui/utils"
import { useTheme } from "./context"

type ThemeWithProps<Components> = {
  components: {
    [K in keyof Components]: { defaultProps?: Partial<Components[K]> }
  }
}

type ThemedProps<Theme, Name extends keyof any> = Theme extends {
  components: Record<Name, { defaultProps?: infer Props }>
}
  ? Props
  : {}

function getThemeProps<
  Theme extends ThemeWithProps<any>,
  Props,
  Name extends keyof any
>({
  props,
  name,
  theme,
}: {
  props: Props
  name: Name
  theme: Theme
}): Props & ThemedProps<Theme, Name> {
  if (theme.components?.[name]?.defaultProps == null) {
    return props as any
  }

  return resolveProps(
    theme.components[name].defaultProps ?? {},
    props
  ) as Props & ThemedProps<Theme, Name>
}

export function useThemeProps<
  Theme extends ThemeWithProps<any>,
  Props,
  Name extends keyof any
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
