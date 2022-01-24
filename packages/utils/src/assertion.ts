export function isPlainObject(
  item: unknown
): item is Record<keyof any, unknown> {
  return item != null && typeof item === "object" && item.constructor === Object
}

// String assertions
export function isMedia(value: string) {
  return value.startsWith("@media")
}

export function isPseudo(value: string) {
  return value.startsWith(":")
}

export function isMediaOrPseudo(value: string) {
  return isMedia(value) || isPseudo(value)
}

export function canUseDOM() {
  return !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  )
}

export const isBrowser = canUseDOM()

export const isNative =
  typeof navigator !== "undefined" && navigator.product === "ReactNative"
