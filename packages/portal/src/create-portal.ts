import * as React from "react"
import * as ReactDOM from "react-dom"

export function createPortal(
  children: React.ReactNode,
  container: Element | DocumentFragment | number,
): React.ReactPortal {
  return ReactDOM.createPortal(children, container as Element)
}
