import * as React from "react"
import { RootTagContext } from "react-native"

export function useRootTag(): number | undefined {
  return React.useContext(RootTagContext)
}
