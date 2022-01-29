import { isBrowser } from "@md3-ui/utils"

const rules: Record<string, any> = {}
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
  return !!rules[id] && !!rules[id].text?.includes?.(text)
}

export function addCSS(id: string, text: string) {
  if (!hasCSS(id, text)) {
    rules[id] = rules?.[id] || {}
    rules[id].text = (rules[id]?.text || "") + text
    styleSheet?.insertRule(text, Object.keys(rules).length - 1)
  }
}

export const flush = () => (
  <style
    id="md3-server-css"
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{
      __html: Object.keys(rules)
        .map((key) => rules[key].text)
        .join("\n"),
    }}
  />
)
