import {
  useAnimate,
  useBackHandler,
  useEventCallback,
  useForkRef,
} from "@md3-ui/hooks"
import { Portal } from "@md3-ui/portal"
import {
  OverridableComponent,
  OverrideProps,
  OwnerStateProps,
  styled,
  SxProps,
  useThemeProps,
} from "@md3-ui/system"
import { getOwnerDocument, __DEV__ } from "@md3-ui/utils"
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
      styles?: {
        root?: RNViewStyle
      }
      /**
       * The system prop that allows defining system overrides as well as
       * additional styles.
       */
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

const ModalScrim = styled(Animated.View, {
  name: "Modal",
  slot: "Scrim",
  skipSx: true,
})(({ theme }) => ({
  backgroundColor: theme.utils.rgba("#322f37", 0.4),
  height: "100%",
  position: "absolute",
  width: "100%",
  zIndex: -1,
}))

export const Modal = React.forwardRef<RNView, ModalProps>((inProps, ref) => {
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
  const rootRef = React.useRef<RNView>(null)
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

  const getDocument = () => getOwnerDocument(mountNodeRef.current)

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
    open,
  }

  return (
    <Portal
      ref={handlePortalRef}
      containerRef={containerRef}
      disablePortal={disablePortal}
    >
      <ModalRoot
        ref={handleRef}
        accessibilityViewIsModal
        accessibilityRole="none"
        ownerState={ownerState}
        {...(hidden && {
          accessibilityElementsHidden: true,
          accessibilityHidden: true,
          importantForAccessibility: "no-hide-descendants",
          pointerEvents: "none",
        })}
        style={[style, styles?.root]}
        onAccessibilityEscape={onClose}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {!hideScrim && (
          <TouchableWithoutFeedback
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
            onPress={onClose}
          >
            <ModalScrim
              accessibilityHidden
              focusable={false}
              style={{ opacity }}
            />
          </TouchableWithoutFeedback>
        )}
        <FocusTrap
          disableAutoFocus={disableAutoFocus}
          disableEnforceFocus={disableEnforceFocus}
          disableRestoreFocus={disableRestoreFocus}
          enabled={isTopModal}
          open={open}
        >
          {React.cloneElement(children, {
            focusable: children.props.focusable ?? false,
            tabIndex: children.props.tabIndex ?? -1,
          })}
        </FocusTrap>
      </ModalRoot>
    </Portal>
  )
}) as OverridableComponent<ModalTypeMap>

if (__DEV__) {
  Modal.displayName = "Modal"
}
