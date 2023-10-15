import {
  setRef,
  useEnhancedEffect,
  useForceUpdate,
  useForkRef,
} from "@md3-ui/hooks"
import { cloneElement, forwardRef, isValidElement, useState } from "react"
import { findNodeHandle } from "react-native"
import { createPortal } from "./create-portal"
import { useRootTag } from "./use-root-tag"

export interface PortalProps {
  children?: React.ReactNode
  containerRef?: React.RefObject<any>
  disablePortal?: boolean
}

export const Portal = forwardRef<any, PortalProps>(
  ({ children, containerRef, disablePortal = false }, ref) => {
    const rootTag = useRootTag()

    const [mountNode, setMountNode] = useState<Element | number>()
    const handleRef = useForkRef(
      isValidElement(children) ? (children as any).ref : null,
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
      if (isValidElement<any>(children)) {
        return cloneElement(children, {
          ref: handleRef,
        })
      }
      return children
    }

    return mountNode ? createPortal(children, mountNode) : (null as any)
  },
)

Portal.displayName = "Portal"
