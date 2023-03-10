import { useForkRef } from "@md3-ui/hooks"
import { getOwnerDocument, runIfFn, __DEV__ } from "@md3-ui/utils"
import * as React from "react"
import { Platform } from "react-native"

// Inspired by https://github.com/focus-trap/tabbable
const candidatesSelector = [
  "input",
  "select",
  "textarea",
  "a[href]",
  "button",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable="false"])',
].join(",")

export interface FocusTrapProps {
  /**
   * A single child content element.
   */
  children: React.ReactElement
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when
   * it opens, and replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the
   * `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap
   * less accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus?: boolean
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus
   * trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap
   * less accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus?: boolean
  /**
   * If `true`, the focus trap will not restore focus to previously focused
   * element once focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus?: boolean
  /**
   * This prop extends the `open` prop. It allows to toggle the open state
   * without having to wait for a rerender when changing the `open` prop. This
   * prop should be memoized. It can be used to support multiple focus trap
   * mounted at the same time.
   * @default true
   */
  enabled?: boolean | (() => boolean)
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the
   * root. For instance, you can provide the "tabbable" npm dependency.
   */
  getTabbable?: (root: HTMLElement) => HTMLElement[]
  /**
   * If `true`, focus is locked.
   */
  open: boolean
}

function getTabIndex(node: HTMLElement) {
  const tabindexAttr = Number.parseInt(node.getAttribute("tabindex") ?? "0", 10)

  if (!Number.isNaN(tabindexAttr)) {
    return tabindexAttr
  }

  // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // https://bugs.chromium.org/p/chromium/issues/detail?id=661108&q=contenteditable%20tabindex&can=2
  // so if they don't have a tabindex attribute specifically set, assume it's 0.
  // In Chrome, <details />, <audio controls /> and <video controls /> elements
  // get a default `tabIndex` of -1 when the 'tabindex' attribute isn't
  // specified in the DOM, yet they are still part of the regular tab order;
  // in FF, they get a default `tabIndex` of 0; since Chrome still puts those
  // elements in the regular tab order, consider their tab index to be 0.
  if (
    node.contentEditable === "true" ||
    ((node.nodeName === "AUDIO" ||
      node.nodeName === "VIDEO" ||
      node.nodeName === "DETAILS") &&
      node.getAttribute("tabindex") == null)
  ) {
    return 0
  }

  return node.tabIndex
}

function isNonTabbableRadio(node: HTMLElement): node is HTMLInputElement {
  if (node.tagName !== "INPUT" || (node as HTMLInputElement).type !== "radio") {
    return false
  }

  if (!(node as HTMLInputElement).name) {
    return false
  }

  const getRadio = (selector: string) =>
    node.ownerDocument.querySelector(`input[type="radio"]${selector}`)

  let roving = getRadio(`[name="${(node as HTMLInputElement).name}"]:checked`)

  if (!roving) {
    roving = getRadio(`[name="${(node as HTMLInputElement).name}"]`)
  }

  return roving !== node
}

function isNodeMatchingSelectorFocusable(node: HTMLElement) {
  if (
    (node as HTMLInputElement).disabled ||
    (node.tagName === "INPUT" &&
      (node as HTMLInputElement).type === "hidden") ||
    isNonTabbableRadio(node)
  ) {
    return false
  }
  return true
}

function defaultGetTabbable(root: HTMLElement) {
  const regularTabNodes: HTMLElement[] = []
  const orderedTabNodes: {
    documentOrder: number
    node: HTMLElement
    tabIndex: number
  }[] = []

  for (const [i, node] of root
    .querySelectorAll<HTMLElement>(candidatesSelector)
    .entries()) {
    const nodeTabIndex = getTabIndex(node)

    if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node)) {
      continue
    }

    if (nodeTabIndex === 0) {
      regularTabNodes.push(node)
    } else {
      orderedTabNodes.push({
        documentOrder: i,
        node,
        tabIndex: nodeTabIndex,
      })
    }
  }

  return [
    ...orderedTabNodes
      .sort((a, b) =>
        a.tabIndex === b.tabIndex
          ? a.documentOrder - b.documentOrder
          : a.tabIndex - b.tabIndex,
      )
      .map((a) => a.node),
    ...regularTabNodes,
  ]
}

/**
 * Utility component that locks focus inside the component.
 */
export const FocusTrap: React.FC<FocusTrapProps> = ({
  children,
  disableAutoFocus = false,
  disableEnforceFocus = false,
  disableRestoreFocus = false,
  enabled = true,
  getTabbable = defaultGetTabbable,
  open,
}) => {
  const ignoreNextEnforceFocus = React.useRef<boolean>()
  const sentinelStartRef = React.useRef<HTMLDivElement>(null)
  const sentinelEndRef = React.useRef<HTMLDivElement>(null)
  const restoreTarget = React.useRef<HTMLElement | null>(null)
  const focusEventTarget = React.useRef<HTMLElement | null>(null)
  // This variable is useful when `disableAutoFocus` is `true`.
  // It waits for the active element to move into the component to activate.
  const activated = React.useRef(false)

  const rootRef = React.useRef<HTMLElement>(null)
  const handleRef = useForkRef((children as any).ref, rootRef)

  const lastKeydown = React.useRef<KeyboardEvent>()

  React.useEffect(() => {
    // We might render an empty child.
    if (!open || rootRef.current == null) {
      return
    }
    activated.current = !disableAutoFocus
  }, [disableAutoFocus, open])

  React.useEffect(() => {
    // We might render an empty child.
    if (!open || rootRef.current == null) {
      return () => {}
    }

    const doc = getOwnerDocument(rootRef.current)

    if (!rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute("tabIndex")) {
        if (__DEV__) {
          console.error(
            [
              "MD3-UI: The modal content node does not accept focus.",
              "For the benefit of assistive technologies, " +
                'the tabIndex of the node is being set to "-1".',
            ].join("\n"),
          )
        }
        rootRef.current.setAttribute("tabIndex", "-1")
      }

      if (activated.current) {
        rootRef.current.focus()
      }
    }

    return () => {
      if (!disableRestoreFocus) {
        if (restoreTarget.current != null) {
          ignoreNextEnforceFocus.current = true
          restoreTarget.current.focus()
        }
        restoreTarget.current = null
      }
    }
    // Missing `disableRestoreFocus` which is fine.
    // We don't support changing that prop on an open FocusTrap
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  React.useEffect(() => {
    // We might render an empty child.
    if (!open || rootRef.current == null) {
      return () => {}
    }

    const doc = getOwnerDocument(rootRef.current)

    const contain = (nativeEvent?: FocusEvent) => {
      const { current: rootElement } = rootRef

      // Cleanup functions are executed lazily in React 17.
      // So `contain` can be called between the component being unmounted and
      // its cleanup function being run.
      if (rootElement == null) {
        return
      }

      if (
        !doc.hasFocus() ||
        disableEnforceFocus ||
        !runIfFn(enabled) ||
        ignoreNextEnforceFocus.current
      ) {
        ignoreNextEnforceFocus.current = false
        return
      }

      if (!rootElement.contains(doc.activeElement)) {
        // If the focus event is not coming from inside the children's React
        // tree, reset the refs.
        if (
          (nativeEvent && focusEventTarget.current !== nativeEvent.target) ||
          doc.activeElement !== focusEventTarget.current
        ) {
          focusEventTarget.current = null
        } else if (focusEventTarget.current !== null) {
          return
        }

        if (!activated.current) {
          return
        }

        let tabbable: HTMLElement[] = []
        if (
          doc.activeElement === sentinelStartRef.current ||
          doc.activeElement === sentinelEndRef.current
        ) {
          tabbable = getTabbable(rootElement)
        }

        if (tabbable.length > 0) {
          const isShiftTab = Boolean(
            lastKeydown.current?.shiftKey && lastKeydown.current?.key === "Tab",
          )

          const focusNext = tabbable[0]
          const focusPrevious = tabbable[tabbable.length - 1]

          if (isShiftTab) {
            focusPrevious.focus()
          } else {
            focusNext.focus()
          }
        } else {
          rootElement.focus()
        }
      }
    }

    const loopFocus = (nativeEvent: KeyboardEvent) => {
      lastKeydown.current = nativeEvent

      if (
        disableEnforceFocus ||
        !runIfFn(enabled) ||
        nativeEvent.key !== "Tab"
      ) {
        return
      }

      // Make sure the next tab starts from the right place.
      // `doc.activeElement` referes to the origin.
      if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
        // We need to ignore the next `contain`, as it will try to move the
        // focus back to the `rootRef` element.
        ignoreNextEnforceFocus.current = true
        sentinelEndRef.current?.focus()
      }
    }

    doc.addEventListener("focusin", contain)
    doc.addEventListener("keydown", loopFocus, true)

    // With Edge, Safari and Firefox, no focus related events are fired when the
    // focused area stops being a focused area
    // (e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=559561).
    // Instead, we can look if the active element was restored on the <body>
    // element.
    //
    // The WHATWG spec defines how the browser should behave but does not
    // explicitly mention any events:
    // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.
    const interval = setInterval(() => {
      if (doc.activeElement?.tagName === "BODY") {
        contain()
      }
    }, 50)

    return () => {
      clearInterval(interval)

      doc.removeEventListener("focusin", contain)
      doc.removeEventListener("keydown", loopFocus, true)
    }
  }, [
    disableAutoFocus,
    disableEnforceFocus,
    disableRestoreFocus,
    enabled,
    getTabbable,
    open,
  ])

  const handleFocus = (event: React.FocusEvent<HTMLDivElement>) => {
    if (restoreTarget.current == null) {
      restoreTarget.current = event.relatedTarget as HTMLElement
    }
    activated.current = true
    focusEventTarget.current = event.target as HTMLElement

    const childrenPropsHandler = children.props.onFocus
    if (childrenPropsHandler) {
      childrenPropsHandler(event)
    }
  }

  const handleFocusSentinel = (event: React.FocusEvent<HTMLDivElement>) => {
    if (restoreTarget.current == null) {
      restoreTarget.current = event.relatedTarget as HTMLElement
    }
    activated.current = true
  }

  return Platform.OS === "web" ? (
    <>
      <div
        ref={sentinelStartRef}
        data-testid="sentinel-start"
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        onFocus={handleFocusSentinel}
      />
      {React.cloneElement(children, { ref: handleRef, onFocus: handleFocus })}
      <div
        ref={sentinelEndRef}
        data-testid="sentinel-end"
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        onFocus={handleFocusSentinel}
      />
    </>
  ) : (
    children
  )
}

if (__DEV__) {
  FocusTrap.displayName = "FocusTrap"
}
