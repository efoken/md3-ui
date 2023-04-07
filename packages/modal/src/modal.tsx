import {
  useAnimate,
  useBackHandler,
  useEventCallback,
  useForkRef,
} from "@md3-ui/hooks"
import { Portal } from "@md3-ui/portal"
import {
  OwnerStateProps,
  StylesProp,
  SxProps,
  styled,
  useThemeProps,
} from "@md3-ui/system"
import { getOwnerDocument } from "@md3-ui/utils"
import * as React from "react"
import {
  Animated,
  Easing,
  Platform,
  Modal as RNModal,
  Pressable as RNPressable,
  View as RNView,
  ViewProps as RNViewProps,
  ViewStyle as RNViewStyle,
} from "react-native"
import { FocusTrap, FocusTrapProps } from "./focus-trap"
import { ModalManager } from "./modal-manager"

const Z_INDEX = 1400

export interface ModalProps
  extends RNViewProps,
    Pick<
      FocusTrapProps,
      "disableAutoFocus" | "disableEnforceFocus" | "disableRestoreFocus"
    > {
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
   * If `true`, the `children` will be under the DOM hierarchy of the parent
   * component.
   * @default false
   */
  disablePortal?: boolean
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock?: boolean
  /**
   * If `true`, the scrim is not rendered.
   * @default false
   */
  hideScrim?: boolean
  /**
   * Always keep the children in the DOM. This prop can be useful in SEO
   * situation or when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted?: boolean
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
  styles?: StylesProp<{
    root?: RNViewStyle
    scrim?: RNViewStyle
  }>
  /**
   * The system prop that allows defining system overrides as well as
   * additional styles.
   */
  sx?: SxProps
}

export type ModalStyleKey = keyof NonNullable<ModalProps["styles"]>

const ModalRoot = styled(RNModal, {
  name: "Modal",
  slot: "Root",
})<
  OwnerStateProps<
    Pick<ModalProps, "open"> & { exited: boolean; hidden: boolean }
  >
>(({ ownerState }) => ({
  bottom: 0,
  left: 0,
  pointerEvents: ownerState.hidden ? "none" : undefined,
  position: Platform.OS === "web" ? ("fixed" as any) : "absolute",
  right: 0,
  top: 0,
  zIndex: Z_INDEX,
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
}))

const ModalScrim = styled(Animated.createAnimatedComponent(RNPressable), {
  name: "Modal",
  slot: "Scrim",
  skipSx: true,
})(({ theme }) => ({
  backgroundColor: theme.utils.rgba(theme.sys.color.scrim, 0.32),
  height: "100%",
  position: "absolute",
  width: "100%",
  zIndex: -1,
}))

export const Modal = React.forwardRef<RNModal, ModalProps>((inProps, ref) => {
  const {
    children,
    containerRef,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown = false,
    disablePortal = false,
    disableRestoreFocus,
    disableScrollLock = false,
    hideScrim = false,
    keepMounted = false,
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
  const rootRef = React.useRef<RNModal>(null)
  const handleRef = useForkRef(rootRef, ref)

  const modalRef = React.useRef({
    modalRef: rootRef.current as unknown as HTMLElement,
    mountNode: mountNodeRef.current,
  })

  const [exited, setExited] = React.useState(true)
  const [hidden, setHidden] = React.useState(false)

  const [opacity, { start: animate }] = useAnimate({
    duration: 225,
    easing: Easing.bezier(0.4, 0, 0.2, 1),
    fromValue: open ? 0 : 1,
    shouldReset: false,
    toValue: open ? 1 : 0,
    useNativeDriver: true,
  })

  const getDocument = () =>
    Platform.OS === "web"
      ? getOwnerDocument(mountNodeRef.current)
      : { body: {} as HTMLElement }

  const getModal = () => {
    modalRef.current.modalRef = rootRef.current as unknown as HTMLElement
    modalRef.current.mountNode = mountNodeRef.current
    return modalRef.current
  }

  const isTopModal = () => ModalManager.isTopModal(getModal())

  const handleMounted = () => {
    ModalManager.mount(getModal(), { disableScrollLock })
    setHidden(false)

    // Fix a bug on Chrome where the scroll isn't initially 0.
    ;(rootRef.current as unknown as HTMLElement).scrollTop = 0
  }

  const handlePortalRef = (node: any) => {
    mountNodeRef.current = node

    if (node == null) {
      return
    }

    if (open && isTopModal()) {
      handleMounted()
    } else {
      setHidden(true)
    }
  }

  const handleOpen = useEventCallback(() => {
    const container =
      (containerRef?.current as HTMLElement | null) ?? getDocument().body

    animate((finished) => {
      if (finished) {
        setExited(false)
      }
    })
    ModalManager.add(getModal(), container)
    setHidden(false)

    // The element was already mounted.
    if (rootRef.current != null) {
      handleMounted()
    }
  })

  const handleClose = useEventCallback(() => {
    animate((finished) => {
      if (finished) {
        setExited(true)
      }
    })
    ModalManager.remove(getModal())
    setHidden(true)
  })

  React.useEffect(() => {
    if (open) {
      setExited(false)
      handleOpen()
    } else {
      handleClose()
    }
  }, [handleClose, handleOpen, open])

  // Close the modal on unmount
  React.useEffect(() => handleClose, [handleClose])

  useBackHandler(() => {
    onClose?.()
    return true
  })

  if (!keepMounted && !open && exited) {
    return null
  }

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
    hidden,
    open,
  }

  const modal = (
    <ModalRoot
      ref={handleRef}
      transparent
      accessibilityViewIsModal={Platform.OS === "ios"}
      animationType="fade"
      aria-hidden={hidden}
      as={Platform.OS === "web" ? RNView : RNModal}
      ownerState={ownerState}
      role="presentation"
      style={[style, styles?.root]}
      visible={open}
      onAccessibilityEscape={onClose}
      onKeyDown={handleKeyDown}
      onRequestClose={onClose}
      {...props}
    >
      {!hideScrim && (
        <ModalScrim
          aria-hidden
          style={[{ opacity }, styles?.scrim]}
          tabIndex={-1}
          onPress={onClose}
        />
      )}
      <FocusTrap
        disableAutoFocus={disableAutoFocus}
        disableEnforceFocus={disableEnforceFocus}
        disableRestoreFocus={disableRestoreFocus}
        enabled={isTopModal}
        open={open}
      >
        {React.cloneElement(children, {
          tabIndex: children.props.tabIndex ?? -1,
        })}
      </FocusTrap>
    </ModalRoot>
  )

  return Platform.OS === "web" ? (
    <Portal
      ref={handlePortalRef}
      containerRef={containerRef}
      disablePortal={disablePortal}
    >
      {modal}
    </Portal>
  ) : (
    modal
  )
})

Modal.displayName = "Modal"
