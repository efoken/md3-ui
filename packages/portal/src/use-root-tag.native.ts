import { useContext } from "react"
import { RootTagContext } from "react-native"

export function useRootTag(): number | undefined {
  return useContext(RootTagContext)
}
