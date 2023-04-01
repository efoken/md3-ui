import { isObject } from "@md3-ui/utils"
import { MDXComponents } from "../mdx-components"

function toInlineCode(input: string) {
  return input
    .split(/(`\w+`)/)
    .map((chunk) =>
      chunk.startsWith("`") && chunk.endsWith("`") ? (
        <MDXComponents.code key={chunk}>
          {chunk.slice(1, -1)}
        </MDXComponents.code>
      ) : (
        chunk
      ),
    )
}

export function convertBackticksToInlineCode(input?: string | JSX.Element) {
  if (!input) {
    return ""
  }
  return isObject(input) ? input : toInlineCode(input)
}
