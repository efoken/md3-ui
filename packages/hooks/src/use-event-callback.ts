import { useCallback, useRef } from "react"
import { useEnhancedEffect } from "./use-enhanced-effect"

/**
 * @see https://github.com/facebook/react/issues/14099#issuecomment-440013892
 */
export function useEventCallback<Args extends unknown[], Return>(
  fn: (...args: Args) => Return,
): (...args: Args) => Return {
  const ref = useRef(fn)
  useEnhancedEffect(() => {
    ref.current = fn
  })
  return useCallback(
    // Eval the callback in global scope
    // See: https://stackoverflow.com/questions/40967162/what-is-the-meaning-of-this-code-0-function-in-javascript
    (...args: Args) => (() => ref.current!)()(...args),
    [],
  )
}
