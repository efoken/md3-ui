import * as React from "react"

export function usePreviousProps<T>(value: T) {
  const ref = React.useRef<T | {}>({})
  React.useEffect(() => {
    ref.current = value
  })
  return ref.current as Partial<T>
}
