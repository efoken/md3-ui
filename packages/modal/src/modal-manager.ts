import { getOwnerDocument, getOwnerWindow } from "@md3-ui/utils"

interface ManagedModalProps {
  disableScrollLock?: boolean
}

function getScrollbarSize(doc: Document) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
  return Math.abs(window.innerWidth - doc.documentElement.clientWidth)
}

// Is a vertical scrollbar displayed?
function isOverflowing(container: Element) {
  const doc = getOwnerDocument(container)

  if (doc.body === container) {
    return (
      getOwnerWindow(container).innerWidth > doc.documentElement.clientWidth
    )
  }

  return container.scrollHeight > container.clientHeight
}

function ariaHidden(element: Element, show: boolean) {
  if (show) {
    element.setAttribute("aria-hidden", "true")
  } else {
    element.removeAttribute("aria-hidden")
  }
}

function getPaddingRight(element: Element) {
  return Number.parseInt(
    getOwnerWindow(element).getComputedStyle(element).paddingRight ?? "0",
    10,
  )
}

function ariaHiddenSiblings(
  container: Element,
  mountElement: Element,
  currentElement: Element,
  elementsToExclude: readonly Element[] = [],
  show = false,
): void {
  const blacklist = new Set([
    mountElement,
    currentElement,
    ...elementsToExclude,
  ])
  const blacklistTagNames = new Set(["TEMPLATE", "SCRIPT", "STYLE"])

  for (const element of Array.from(container.children)) {
    if (!blacklist.has(element) && !blacklistTagNames.has(element.tagName)) {
      ariaHidden(element, show)
    }
  }
}

function handleContainer(containerInfo: Container, props: ManagedModalProps) {
  const restoreStyle: {
    el: HTMLElement | SVGElement
    property: string
    value: string
  }[] = []
  const { container } = containerInfo

  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      // Compute the size before applying `overflow: hidden` to avoid any
      // scroll jumps.
      const scrollbarSize = getScrollbarSize(getOwnerDocument(container))

      restoreStyle.push({
        el: container,
        property: "padding-right",
        value: container.style.paddingRight,
      })
      // Use computed style here, to get the real padding to add our scrollbar
      // width to.
      container.style.paddingRight = `${
        getPaddingRight(container) + scrollbarSize
      }px`

      // `.md3-fixed` is a global helper.
      const fixedElements = getOwnerDocument(container).querySelectorAll<
        HTMLElement | SVGElement
      >(".md3-fixed")

      for (const element of fixedElements) {
        restoreStyle.push({
          el: element,
          property: "padding-right",
          value: element.style.paddingRight,
        })
        element.style.paddingRight = `${
          getPaddingRight(element) + scrollbarSize
        }px`
      }
    }

    // Improve Gatsby support
    // https://css-tricks.com/snippets/css/force-vertical-scrollbar/
    const parent = container.parentElement
    const containerWindow = getOwnerWindow(container)
    const scrollContainer =
      parent?.nodeName === "HTML" &&
      containerWindow.getComputedStyle(parent).overflowY === "scroll"
        ? parent
        : container

    // Block the scroll even if no scrollbar is visible to account for mobile
    // keyboard screensize shrink.
    restoreStyle.push(
      {
        el: scrollContainer,
        property: "overflow",
        value: scrollContainer.style.overflow,
      },
      {
        el: scrollContainer,
        property: "overflow-x",
        value: scrollContainer.style.overflowX,
      },
      {
        el: scrollContainer,
        property: "overflow-y",
        value: scrollContainer.style.overflowY,
      },
    )

    scrollContainer.style.overflow = "hidden"
  }

  const restore = () => {
    for (const { value, el, property } of restoreStyle) {
      if (value) {
        el.style.setProperty(property, value)
      } else {
        el.style.removeProperty(property)
      }
    }
  }

  return restore
}

function getHiddenSiblings(container: Element) {
  return Array.from(container.children).filter(
    (element) => element.getAttribute("aria-hidden") === "true",
  )
}

interface Modal {
  modalRef: Element
  mountNode: Element
}

interface Container {
  container: HTMLElement
  hiddenSiblings: Element[]
  modals: Modal[]
  restore: null | (() => void)
}

/**
 * Proper state management for containers and the modals in those containers.
 * Simplified, but inspired by react-overlay's ModalManager class. Used by the
 * Modal to ensure proper styling of containers.
 */
export const ModalManager = new (class ModalManager {
  containers: Container[]

  modals: Modal[]

  constructor() {
    this.modals = []
    this.containers = []
  }

  add(modal: Modal, container: HTMLElement) {
    let modalIndex = this.modals.indexOf(modal)
    if (modalIndex !== -1) {
      return modalIndex
    }

    modalIndex = this.modals.length
    this.modals.push(modal)

    // If the modal we are adding is already in the DOM.
    if (modal.modalRef) {
      ariaHidden(modal.modalRef, false)
    }

    const hiddenSiblings = getHiddenSiblings(container)
    ariaHiddenSiblings(
      container,
      modal.mountNode,
      modal.modalRef,
      hiddenSiblings,
      true,
    )

    const containerIndex = this.containers.findIndex(
      (item) => item.container === container,
    )
    if (containerIndex !== -1) {
      this.containers[containerIndex].modals.push(modal)
      return modalIndex
    }

    this.containers.push({
      modals: [modal],
      container,
      restore: null,
      hiddenSiblings,
    })

    return modalIndex
  }

  mount(modal: Modal, props: ManagedModalProps) {
    const containerInfo = this.containers.find((item) =>
      item.modals.includes(modal),
    )

    if (containerInfo != null && containerInfo.restore == null) {
      containerInfo.restore = handleContainer(containerInfo, props)
    }
  }

  remove(modal: Modal) {
    const modalIndex = this.modals.indexOf(modal)

    if (modalIndex === -1) {
      return modalIndex
    }

    const containerIndex = this.containers.findIndex((item) =>
      item.modals.includes(modal),
    )
    const containerInfo = this.containers[containerIndex]

    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1)
    this.modals.splice(modalIndex, 1)

    // If that was the last modal in a container, clean up the container.
    if (containerInfo.modals.length === 0) {
      // The modal might be closed before it had the chance to be mounted in the DOM.
      containerInfo.restore?.()

      if (modal.modalRef) {
        // In case the modal wasn't in the DOM yet.
        ariaHidden(modal.modalRef, true)
      }

      ariaHiddenSiblings(
        containerInfo.container,
        modal.mountNode,
        modal.modalRef,
        containerInfo.hiddenSiblings,
        false,
      )
      this.containers.splice(containerIndex, 1)
    } else {
      // Otherwise make sure the next top modal is visible to a screen reader.
      const nextTop = containerInfo.modals[containerInfo.modals.length - 1]
      // As soon as a modal is adding its modalRef is undefined. it can't set
      // aria-hidden because the dom element doesn't exist either
      // when modal was unmounted before modalRef gets null
      if (nextTop.modalRef) {
        ariaHidden(nextTop.modalRef, false)
      }
    }

    return modalIndex
  }

  isTopModal(modal: Modal) {
    return (
      this.modals.length > 0 && this.modals[this.modals.length - 1] === modal
    )
  }
})()
