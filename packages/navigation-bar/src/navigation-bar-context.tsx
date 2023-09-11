import { createContext } from "react"
import { GestureResponderEvent } from "react-native"

export const NavigationBarContext = createContext<{
  onChange?: (event: GestureResponderEvent, value: any) => void
  value?: any
}>(undefined as any)
