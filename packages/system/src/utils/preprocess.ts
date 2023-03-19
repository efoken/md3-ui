export function preprocess(style: Record<string, any> = {}) {
  const nextStyle: any = {}
  for (const [originalProp, originalValue] of Object.entries(style)) {
    const prop = originalProp
    const value = originalValue

    if (prop === "elevation") {
      continue
    }

    nextStyle[prop] = value
  }

  return nextStyle
}
