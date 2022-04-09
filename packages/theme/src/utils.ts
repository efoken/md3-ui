import { TinyColor } from "@ctrl/tinycolor"

export function mix(weight: number, color: string, otherColor: string) {
  return new TinyColor(color).mix(otherColor, weight).toString()
}

export function rgba(color: string, alpha: number) {
  return new TinyColor(color).setAlpha(alpha).toString()
}

export function transition(...args: (string | string[])[]) {
  if (Array.isArray(args[0]) && args.length === 2) {
    const value = args[1]

    if (typeof value !== "string") {
      throw new TypeError("Property must be a string value.")
    }

    const transitions = args[0]
      .map((property) => `${property} ${value}`)
      .join(", ")
    return transitions
  }
  return args.join(", ")
}
