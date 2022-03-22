import * as React from "react"
import { BackHandler } from "react-native"

export function useBackHandler(fn: () => boolean) {
  React.useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", fn)
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", fn)
    }
  }, [fn])
}
