import * as React from "react"
import { GestureResponderEvent } from "react-native"

export const NavigationBarContext = React.createContext<{
  onChange?: (event: GestureResponderEvent, value: any) => void
  value?: any
}>(undefined as any)
