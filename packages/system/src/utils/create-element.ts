import * as React from "react"
import { unstable_createElement } from "react-native-web"

export function createElement(type: string | React.ElementType, props: any) {
  return typeof type === "string"
    ? unstable_createElement(type, props)
    : React.createElement(type, props)
}
