import * as ReactDOM from "react-dom"
import * as React from "react"
import { Platform } from "react-native"

let createNativePortal: (
  children: React.ReactNode,
  container: number,
) => React.ReactPortal = () => null as any

try {
  if (Platform.OS !== "web") {
    createNativePortal =
      // eslint-disable-next-line global-require
      require("react-native/Libraries/Renderer/shims/ReactNative").createPortal
  }
} catch {
  // Nothing here
}

export function createPortal(
  children: React.ReactNode,
  container: Element | number,
) {
  if (Platform.OS === "web") {
    return ReactDOM.createPortal(children, container as Element)
  }
  return createNativePortal(children, container as number)
}
