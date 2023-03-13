import { isBrowser, isMedia } from "@md3-ui/utils"

const cache = new Map<string, string>()
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
  return cache.has(id) && cache.get(id)?.includes(text)
}

export function createCSSRule(query: string, stringHash: string, css: string) {
  const dataMediaSelector = `.${stringHash}`
  return isMedia(query)
    ? `${query} {${dataMediaSelector} ${css}}`
    : `${dataMediaSelector}${query.replace(/^&/, "")} ${css}`
}

export function addCSS(id: string, rule: string) {
  if (!hasCSS(id, rule)) {
    cache.set(id, `${cache.get(id) ?? ""}${rule}`)
    styleSheet?.insertRule(rule, cache.size - 1)
  }
}

export const flush = () => (
  <style
    id="md3-server-css"
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{
      __html: Array.from(cache.values()).join("\n"),
    }}
  />
)
