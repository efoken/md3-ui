import { CSSBaseline } from "@md3-ui/components"
import { MediaValuesProvider, ThemeProvider } from "@md3-ui/system"
import { Theme } from "@md3-ui/theme"

export interface Md3ProviderProps {
  children?: React.ReactNode
  theme?: Partial<Theme>
}

export const Md3Provider: React.FC<Md3ProviderProps> = ({
  children,
  theme,
}) => (
  <ThemeProvider theme={theme}>
    <MediaValuesProvider>
      <CSSBaseline />
      {children}
    </MediaValuesProvider>
  </ThemeProvider>
)
