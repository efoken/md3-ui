import * as React from "react"
import { AccessibilityChangeEventName, AccessibilityInfo } from "react-native"

const AccessibilityInfoContext = React.createContext({
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
  const [enabled, setEnabled] = React.useState(false)

  React.useEffect(() => {
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

  const context = React.useMemo(
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
  return React.useContext(AccessibilityInfoContext)
}
