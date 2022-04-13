import * as React from "react"
import { Header } from "../components/header"

export const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
  </>
)
