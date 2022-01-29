import * as React from "react"

function useUnmountEffect(fn: () => void, deps: any[] = []) {
  return React.useEffect(
    () => () => fn(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps,
  )
}

export function useForceUpdate() {
  const unloadingRef = React.useRef(false)
  const [count, setCount] = React.useState(0)

  useUnmountEffect(() => {
    unloadingRef.current = true
  })

  return React.useCallback(() => {
    if (!unloadingRef.current) {
      setCount(count + 1)
    }
  }, [count])
}
