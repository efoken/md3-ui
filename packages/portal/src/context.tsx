import * as React from "react"
import { Platform, View as RNView } from "react-native"

interface PortalContextType {
  rootRef: React.RefObject<RNView>
}

export const PortalContext = React.createContext<PortalContextType>(
  undefined as any,
)

export interface PortalProviderProps {
  children?: React.ReactNode
}

export const PortalProvider: React.FC<PortalProviderProps> = ({ children }) => {
  const rootRef = React.useRef<RNView>(null)

  const [context, setContext] = React.useState<PortalContextType>(
    Platform.OS === "web" && typeof document !== "undefined"
      ? { rootRef: { current: document.body } }
      : ({} as any),
  )

  React.useEffect(() => {
    if (Platform.OS !== "web") {
      setContext({ rootRef })
    }
  }, [])

  return (
    <PortalContext.Provider value={context}>
      {Platform.OS === "web" ? (
        children
      ) : (
        <RNView ref={rootRef} collapsable={false}>
          {/* Get root ref first and then render children containing portals */}
          {rootRef.current != null && children}
        </RNView>
      )}
    </PortalContext.Provider>
  )
}
