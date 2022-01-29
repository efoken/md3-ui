import * as React from "react"
import { useEnhancedEffect } from "./use-enhanced-effect"

/**
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 */
export function useEventCallback<Args extends unknown[], Return>(
  fn: (...args: Args) => Return,
): (...args: Args) => Return {
  const ref = React.useRef(fn)
  useEnhancedEffect(() => {
    ref.current = fn
  })
  return React.useCallback(
    (...args: Args) =>
      // @ts-expect-error hide `this`
      (0, ref.current!)(...args),
    [],
  )
}
