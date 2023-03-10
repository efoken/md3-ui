import {
  setRef,
  useEnhancedEffect,
  useForceUpdate,
  useForkRef,
} from "@md3-ui/hooks"
import { __DEV__ } from "@md3-ui/utils"
import * as React from "react"
import { findNodeHandle, Platform, RootTagContext } from "react-native"
import { createPortal } from "./create-portal"

export interface PortalProps {
  children?: React.ReactNode
  containerRef?: React.RefObject<any>
  disablePortal?: boolean
}

export const Portal = React.forwardRef<any, PortalProps>(
  ({ children, containerRef, disablePortal = false }, ref) => {
    const rootTag =
      // eslint-disable-next-line react-hooks/rules-of-hooks
      Platform.OS === "web" ? undefined : React.useContext(RootTagContext)

    const [mountNode, setMountNode] = React.useState<Element | number>()
    const handleRef = useForkRef(
      React.isValidElement(children) ? (children as any).ref : null,
      ref,
    )

    const forceUpdate = useForceUpdate()

    useEnhancedEffect(() => {
      forceUpdate()
    }, [])

    useEnhancedEffect(() => {
      if (!disablePortal) {
        setMountNode(
          findNodeHandle(containerRef?.current) ?? rootTag ?? document.body,
        )
      }
    }, [containerRef?.current, disablePortal])

    useEnhancedEffect(() => {
      if (mountNode && !disablePortal) {
        setRef(ref, mountNode)
        return () => {
          setRef(ref, null)
        }
      }
      return () => {}
    }, [ref, mountNode, disablePortal])

    if (disablePortal) {
      if (React.isValidElement<any>(children)) {
        return React.cloneElement(children, {
          ref: handleRef,
        })
      }
      return children
    }

    return mountNode ? createPortal(children, mountNode) : (null as any)
  },
)

if (__DEV__) {
  Portal.displayName = "Portal"
}
