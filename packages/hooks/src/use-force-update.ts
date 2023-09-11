import { useCallback, useEffect, useRef, useState } from "react"

function useUnmountEffect(fn: () => void, deps: any[] = []) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useEffect(() => () => fn(), deps)
}

export function useForceUpdate() {
  const unloadingRef = useRef(false)
  const [count, setCount] = useState(0)

  useUnmountEffect(() => {
    unloadingRef.current = true
  })

  return useCallback(() => {
    if (!unloadingRef.current) {
      setCount(count + 1)
    }
  }, [count])
}
