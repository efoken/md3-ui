export function getOwnerDocument(node?: Element | null): Document {
  return node != null ? node.ownerDocument ?? document : document
}

export function getOwnerWindow(node?: Element | null): Window {
  return node != null ? getOwnerDocument(node)?.defaultView ?? window : window
}

export const cx = (...classNames: any[]) =>
  Array.from(new Set(classNames.flat().filter(Boolean))).join(" ")
