/* eslint-disable import/no-extraneous-dependencies */
import { get } from "@md3-ui/utils"
import prettier from "prettier"
import { Format, formatHelpers } from "style-dictionary"

function lowerCaseFirst(str: string) {
  return str.charAt(0).toLowerCase() + str.slice(1)
}

export const TypescriptFunction: Format = {
  name: "typescript/function",
  formatter: ({ dictionary, file, options }) => {
    const { prefix, typeName } = options

    const tokens = formatHelpers.minifyDictionary(
      prefix ? get(dictionary.tokens, prefix, {}) : dictionary.tokens,
    )

    const tpl = `${formatHelpers.fileHeader({
      file,
    })}import { mergeDeep } from "@md3-ui/utils"

    export interface ${typeName} ${formatHelpers.getTypeScriptType(tokens)}

    export function create${typeName}(${lowerCaseFirst(
      typeName,
    )}?: Partial<${typeName}>) {
      return mergeDeep(${JSON.stringify(tokens, null, 2)
        .replace(/"(\d{1,3})":/g, "$1:")
        // .replace(/palette\.(\w+)\.(\d{1,3})/g, "palette.$1[$2]")
        .replace(/"md\.(.+?)"/g, "theme.$1")}, ${lowerCaseFirst(typeName)})
    }`

    return prettier.format(tpl, {
      parser: "typescript",
      semi: false,
      trailingComma: "all",
    })
  },
}
