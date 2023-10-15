interface ManagedModalProps {
  disableScrollLock?: boolean
}

interface Modal {
  modalRef: Element
  mountNode: Element
}

export const ModalManager: {
  add: (modal: Modal, container: HTMLElement) => number
  mount: (modal: Modal, props: ManagedModalProps) => void
  remove: (modal: Modal) => number
  isTopModal: (modal: Modal) => boolean
} = {
  add: () => 0,
  mount: () => {},
  remove: () => 0,
  isTopModal: () => true,
}
