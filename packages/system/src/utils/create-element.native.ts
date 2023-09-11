import { createElement as createReactElement } from "react"

export function createElement(type: string | React.ElementType, props: any) {
  return createReactElement(type, props)
}
