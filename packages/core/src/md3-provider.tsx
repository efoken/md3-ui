import { PortalProvider } from "@md3-ui/portal"
import { ThemeProvider } from "@md3-ui/system"
import { Theme } from "@md3-ui/theme"
import * as React from "react"
import { CSSBaseline } from "./css-baseline"

export interface Md3ProviderProps {
  children?: React.ReactNode
  theme?: Partial<Theme>
}

export const Md3Provider: React.FC<Md3ProviderProps> = ({
  children,
  theme,
}) => (
  <ThemeProvider theme={theme}>
    <CSSBaseline />
    <PortalProvider>{children}</PortalProvider>
  </ThemeProvider>
)
