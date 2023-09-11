import { useEffect } from "react"
import { BackHandler } from "react-native"

export function useBackHandler(fn: () => boolean) {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", fn)
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", fn)
    }
  }, [fn])
}
