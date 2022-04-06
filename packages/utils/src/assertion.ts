// Function assertions
export function isFunction<T extends Function = Function>(
  value: any,
): value is T {
  return typeof value === "function"
}

// Object assertions
export function isObject(value: any): value is Record<keyof any, any> {
  return (
    value != null &&
    (typeof value === "object" || typeof value === "function") &&
    !Array.isArray(value)
  )
}

export function isEmptyObject(value: any) {
  return isObject(value) && Object.keys(value).length === 0
}

// String assertions
export type Media =
  | `@media (${"min-width" | "max-width"}: ${
      | `${number | ""}${number | ""}${number}${"px" | "em" | "rem"}`
      | "0"})`
  | "@media print"

export function isMedia(value: string): value is Media {
  return value.startsWith("@media")
}

export type Pseudo =
  | "&:-webkit-autofill"
  | "&::placeholder"
  | "&:active"
  | "&:enabled"
  | "&:focus"
  | "&:hover"

export function isPseudo(value: string): value is Pseudo {
  return value.startsWith("&:")
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

// eslint-disable-next-line no-underscore-dangle, @typescript-eslint/naming-convention
export const __DEV__ = process.env.NODE_ENV !== "production"
