import { isBrowser } from "@md3-ui/utils"

const cache = new Map<string, { text: string }>()
let styleSheet: CSSStyleSheet | undefined

if (isBrowser) {
  styleSheet = (() => {
    const style = document.createElement("style")
    style.id = "md3-css"
    style.append(document.createTextNode(""))
    document.head.append(style)
    return style.sheet ?? undefined
  })()
}

export function hasCSS(id: string, text: string) {
  return cache.has(id) && cache.get(id)?.text.includes(text)
}

export function addCSS(id: string, text: string) {
  if (!hasCSS(id, text)) {
    cache.set(id, {
      text: `${cache.get(id)?.text ?? ""}${text}`,
    })
    styleSheet?.insertRule(text, cache.size - 1)
  }
}

export const flush = () => (
  <style
    id="md3-server-css"
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{
      __html: Array.from(cache.values())
        .map((rule) => rule.text)
        .join("\n"),
    }}
  />
)
