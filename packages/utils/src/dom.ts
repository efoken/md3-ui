export function isElement(el: any): el is Element {
  return (
    el != null &&
    typeof el === "object" &&
    "nodeType" in el &&
    el.nodeType === Node.ELEMENT_NODE
  )
}

export function isHTMLElement<T extends HTMLElement = HTMLElement>(
  el: any,
): el is T {
  if (!isElement(el)) {
    return false
  }
  return el instanceof (el.ownerDocument.defaultView ?? window).HTMLElement
}

export function getOwnerDocument(node?: Element | null): Document {
  return isElement(node) ? node.ownerDocument : document
}

export function getOwnerWindow(node?: Element | null): Window {
  return getOwnerDocument(node)?.defaultView ?? window
}

export const cx = (...classNames: any[]) =>
  [...new Set(classNames.flat().filter(Boolean))].join(" ")
