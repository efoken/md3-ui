import * as React from "react"

export function useBoolean(initialState?: boolean | (() => boolean)) {
  const [state, setState] = React.useState(initialState ?? false)

  const handleOn = React.useCallback(() => {
    setState(true)
  }, [])

  const handleOff = React.useCallback(() => {
    setState(false)
  }, [])

  const handleToggle = React.useCallback(() => {
    setState((prevState) => !prevState)
  }, [])

  return [
    state,
    { on: handleOn, off: handleOff, toggle: handleToggle },
  ] as const
}
