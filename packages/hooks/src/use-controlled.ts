import { useCallback, useEffect, useRef, useState } from "react"

export interface UseControlledProps<T = unknown> {
  /**
   * Holds the component value when it's controlled.
   */
  controlled?: T
  /**
   * The default value when uncontrolled.
   */
  default?: T
  /**
   * The component name displayed in warnings.
   */
  name: string
  /**
   * The name of the state variable displayed in warnings.
   */
  state?: string
}

export function useControlled<T = unknown>({
  controlled: controlledProp,
  default: defaultProp,
  name,
  state = "value",
}: UseControlledProps<T>) {
  // The `controlled` variable is ignored in the hook dependency lists as it
  // should never change.
  const { current: controlled } = useRef(controlledProp !== undefined)
  const [valueState, setValue] = useState(defaultProp)
  const value = controlled ? controlledProp : valueState

  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (controlled !== (controlledProp !== undefined)) {
        console.error(
          [
            `MD3-UI: A component is changing the ${
              controlled ? "" : "un"
            }controlled ${state} state of ${name} to be ${
              controlled ? "un" : ""
            }controlled.`,
            "Elements should not switch from uncontrolled to controlled (or vice versa).",
            `Decide between using a controlled or uncontrolled ${name} ` +
              "element for the lifetime of the component.",
            "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.",
            "More info: https://fb.me/react-controlled-components",
          ].join("\n"),
        )
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [controlledProp, name, state])

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { current: defaultValue } = useRef(defaultProp)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!controlled && defaultValue !== defaultProp) {
        console.error(
          [
            `MD3-UI: A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. ` +
              `To suppress this warning opt to use a controlled ${name}.`,
          ].join("\n"),
        )
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(defaultProp)])
  }

  const setValueIfUncontrolled = useCallback((newValue: T) => {
    if (!controlled) {
      setValue(newValue)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [value, setValueIfUncontrolled] as const
}
