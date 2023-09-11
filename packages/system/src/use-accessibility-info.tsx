import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { AccessibilityChangeEventName, AccessibilityInfo } from "react-native"

const AccessibilityInfoContext = createContext({
  invertColorsEnabled: false,
  reduceMotionEnabled: false,
})

function useAccessibilityChangeEventHandler(
  eventName: AccessibilityChangeEventName,
  initializerName:
    | "isBoldTextEnabled"
    | "isGrayscaleEnabled"
    | "isInvertColorsEnabled"
    | "isReduceMotionEnabled"
    | "isReduceTransparencyEnabled"
    | "isScreenReaderEnabled",
) {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (!AccessibilityInfo[initializerName]) {
      return () => {}
    }

    AccessibilityInfo[initializerName]().then(setEnabled)

    const subscription = AccessibilityInfo.addEventListener(
      eventName,
      setEnabled,
    )

    return () => {
      subscription.remove()
    }
  }, [eventName, initializerName])

  return enabled
}

export interface AccessibilityInfoProviderProps {
  children?: React.ReactNode
}

export const AccessibilityInfoProvider: React.FC<
  AccessibilityInfoProviderProps
> = ({ children }) => {
  const invertColorsEnabled = useAccessibilityChangeEventHandler(
    "invertColorsChanged",
    "isInvertColorsEnabled",
  )
  const reduceMotionEnabled = useAccessibilityChangeEventHandler(
    "reduceMotionChanged",
    "isReduceMotionEnabled",
  )

  const context = useMemo(
    () => ({ invertColorsEnabled, reduceMotionEnabled }),
    [invertColorsEnabled, reduceMotionEnabled],
  )

  return (
    <AccessibilityInfoContext.Provider value={context}>
      {children}
    </AccessibilityInfoContext.Provider>
  )
}

export function useAccessibilityInfo() {
  return useContext(AccessibilityInfoContext)
}
