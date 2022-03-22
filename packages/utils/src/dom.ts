export function getOwnerDocument(node?: Element | null): Document {
  return node != null ? node.ownerDocument ?? document : document
}

export function getOwnerWindow(node?: Element | null): Window {
  return node != null ? getOwnerDocument(node)?.defaultView ?? window : window
}
