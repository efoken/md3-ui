import { PortalProvider } from "@md3-ui/portal"
import { ThemeProvider } from "@md3-ui/styles"
import { Theme } from "@md3-ui/theme"
import * as React from "react"

export interface Md3ProviderProps {
  children?: React.ReactNode
  theme?: Partial<Theme>
}

export const Md3Provider: React.FC<Md3ProviderProps> = ({
  children,
  theme,
}) => (
  <ThemeProvider theme={theme}>
    <PortalProvider>{children}</PortalProvider>
  </ThemeProvider>
)
