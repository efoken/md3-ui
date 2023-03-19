import * as React from "react"

export function createElement(type: string | React.ElementType, props: any) {
  return React.createElement(type, props)
}
