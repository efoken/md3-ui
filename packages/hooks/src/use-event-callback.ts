import * as React from "react"
import { useEnhancedEffect } from "./use-enhanced-effect"

/**
 * @see https://github.com/facebook/react/issues/14099#issuecomment-440013892
 */
export function useEventCallback<Args extends unknown[], Return>(
  fn: (...args: Args) => Return,
): (...args: Args) => Return {
  const ref = React.useRef(fn)
  useEnhancedEffect(() => {
    ref.current = fn
  })
  return React.useCallback(
    // Eval the callback in global scope
    // See: https://stackoverflow.com/questions/40967162/what-is-the-meaning-of-this-code-0-function-in-javascript
    (...args: Args) => (() => ref.current!)()(...args),
    [],
  )
}
