import {
  useAnimate,
  useBackHandler,
  useEventCallback,
  useForkRef,
} from "@md3-ui/hooks"
import { Portal } from "@md3-ui/portal"
import { OwnerStateProps, styled, SxProps, useThemeProps } from "@md3-ui/system"
import {
  getOwnerDocument,
  OverridableComponent,
  OverrideProps,
  __DEV__,
} from "@md3-ui/utils"
import * as React from "react"
import {
  Animated,
  Easing,
  Platform,
  TouchableWithoutFeedback,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"
import { FocusTrap, FocusTrapProps } from "./focus-trap"
import { ModalManager } from "./modal-manager"

export interface ModalTypeMap<
  P = {},
  C extends React.ElementType = typeof RNView,
> {
  props: P &
    Pick<
      FocusTrapProps,
      "disableAutoFocus" | "disableEnforceFocus" | "disableRestoreFocus"
    > & {
      /**
       * A single child content element.
       */
      children: React.ReactElement
      /**
       * The ref to the component that will have the portal children appended to
       * it. By default, it uses the body of the top-level document object.
       */
      containerRef?: React.RefObject<any>
      /**
       * If `true`, hitting escape will not fire the `onClose` callback.
       * @default false
       */
      disableEscapeKeyDown?: boolean
      /**
       * Disable the scroll lock behavior.
       * @default false
       */
      disableScrollLock?: boolean
      /**
       * Callback fired when the component requests to be closed.
       */
      onClose?: () => void
      /**
       * If `true`, the component is shown.
       */
      open: boolean
      /**
       * Override or extend the styles applied to the component.
       */
      styles?: {
        root?: RNViewStyle
      }
      sx?: SxProps
    }
  defaultAs: C
}

export type ModalProps<
  C extends React.ElementType = ModalTypeMap["defaultAs"],
  P = {},
> = OverrideProps<ModalTypeMap<P, C>, C>

export type ModalStyleKey = keyof NonNullable<ModalProps["styles"]>

const ModalRoot = styled(RNView, {
  name: "Modal",
  slot: "Root",
})<OwnerStateProps<Pick<ModalProps, "open"> & { exited: boolean }>>(
  ({ theme, ownerState }) => ({
    bottom: 0,
    left: 0,
    position: Platform.OS === "web" ? ("fixed" as any) : "absolute",
    right: 0,
    top: 0,
    zIndex: theme.zIndex.modal,
    ...(!ownerState.open &&
      ownerState.exited &&
      Platform.select({
        web: {
          visibility: "hidden",
        },
        default: {
          display: "none",
        },
      })),
  }),
)

const ModalBackdrop = styled(Animated.View, {
  name: "Modal",
  slot: "Backdrop",
})({
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  height: "100%",
  position: "absolute",
  width: "100%",
  zIndex: -1,
})

const ModalContent = styled(Animated.View, {
  name: "Modal",
  slot: "Content",
})({
  height: "100%",
  width: "100%",
})

export const Modal = React.forwardRef<RNView, ModalProps>((inProps, ref) => {
  const {
    children,
    containerRef,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown = false,
    disableRestoreFocus,
    disableScrollLock = false,
    onClose,
    onKeyDown,
    open,
    style,
    styles,
    ...props
  } = useThemeProps({
    name: "Modal",
    props: inProps,
  })

  const mountNodeRef = React.useRef<any>(null)
  const rootRef = React.useRef<RNView>(null)
  const handleRef = useForkRef(rootRef, ref)

  const modalRef = React.useRef({
    modalRef: rootRef.current as unknown as HTMLElement,
    mountNode: mountNodeRef.current,
  })

  const [exited, setExited] = React.useState(true)

  const [opacity, { start: animate }] = useAnimate({
    duration: 225,
    easing: Easing.bezier(0.4, 0, 0.2, 1),
    fromValue: open ? 0 : 1,
    shouldReset: false,
    toValue: open ? 1 : 0,
    useNativeDriver: true,
  })

  const getDocument = () => getOwnerDocument(mountNodeRef.current)

  const getModal = () => {
    modalRef.current.modalRef = rootRef.current as unknown as HTMLElement
    modalRef.current.mountNode = mountNodeRef.current
    return modalRef.current
  }

  const handlePortalRef = (node: any) => {
    mountNodeRef.current = node
  }

  const handleMounted = () => {
    ModalManager.mount(getModal(), { disableScrollLock })

    // Fix a bug on Chrome where the scroll isn't initially 0.
    ;(rootRef.current as unknown as HTMLElement).scrollTop = 0
  }

  const handleOpen = useEventCallback(() => {
    const container =
      (containerRef?.current as HTMLElement | null) ?? getDocument().body

    animate(() => setExited(true))
    ModalManager.add(getModal(), container)

    // The element was already mounted.
    if (rootRef.current != null) {
      handleMounted()
    }
  })

  const handleClose = useEventCallback(() => {
    animate()
    ModalManager.remove(getModal())
  })

  const isTopModal = () => ModalManager.isTopModal(getModal())

  React.useEffect(() => {
    if (open) {
      handleOpen()
    } else {
      handleClose()
    }
  }, [handleClose, handleOpen, open])

  useBackHandler(() => {
    onClose?.()
    return true
  })

  const handleKeyDown = (event: React.KeyboardEvent) => {
    onKeyDown?.(event)

    // The handler doesn't take `event.defaultPrevented` into account:
    //
    // `event.preventDefault()` is meant to stop default behaviors like pressing
    // a checkbox to check it, hitting a button to submit a form, and hitting
    // left arrow to move the cursor in a text input etc.
    // Only special HTML elements have these default behaviors.
    if (event.key !== "Escape" || !isTopModal()) {
      return
    }

    if (!disableEscapeKeyDown) {
      // Swallow the event, in case someone is listening for the escape key on
      // the body.
      event.stopPropagation()

      onClose?.()
    }
  }

  const ownerState = {
    exited,
    open,
  }

  return (
    <Portal ref={handlePortalRef} containerRef={containerRef}>
      <ModalRoot
        ref={handleRef}
        accessibilityViewIsModal
        accessibilityRole="none"
        ownerState={ownerState}
        pointerEvents={open ? "auto" : "none"}
        style={[style, styles?.root]}
        onAccessibilityEscape={onClose}
        onKeyDown={handleKeyDown}
        {...props}
      >
        <ModalContent>
          <TouchableWithoutFeedback
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
            onPress={onClose}
          >
            <ModalBackdrop
              accessibilityHidden
              focusable={false}
              style={{ opacity }}
            />
          </TouchableWithoutFeedback>
          <FocusTrap
            disableAutoFocus={disableAutoFocus}
            disableEnforceFocus={disableEnforceFocus}
            disableRestoreFocus={disableRestoreFocus}
            enabled={isTopModal}
            open={open}
          >
            {React.cloneElement(children, {
              focusable: children.props.focusable ?? true,
              tabIndex: children.props.tabIndex ?? -1,
            })}
          </FocusTrap>
        </ModalContent>
      </ModalRoot>
    </Portal>
  )
}) as OverridableComponent<ModalTypeMap>

if (__DEV__) {
  Modal.displayName = "Modal"
}
