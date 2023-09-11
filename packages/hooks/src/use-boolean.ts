import { useCallback, useState } from "react"

export function useBoolean(initialState?: boolean | (() => boolean)) {
  const [state, setState] = useState(initialState ?? false)

  const handleOn = useCallback(() => {
    setState(true)
  }, [])

  const handleOff = useCallback(() => {
    setState(false)
  }, [])

  const handleToggle = useCallback(() => {
    setState((prevState) => !prevState)
  }, [])

  return [
    state,
    { on: handleOn, off: handleOff, toggle: handleToggle },
  ] as const
}
