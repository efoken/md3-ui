/* eslint-disable import/no-extraneous-dependencies */
import { get } from "@md3-ui/utils"
import { lowerFirst } from "lodash"
import { Format, formatHelpers } from "style-dictionary"

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

    export function create${typeName}(${lowerFirst(
      typeName,
    )}?: Partial<${typeName}>) {
      return mergeDeep(${JSON.stringify(tokens, null, 2)
        .replaceAll(/"(\d{1,3})":/g, "$1:")
        // .replaceAll(/palette\.(\w+)\.(\d{1,3})/g, "palette.$1[$2]")
        .replaceAll(/"md\.(.+?)"/g, "theme.$1")}, ${lowerFirst(typeName)})
    }`

    return tpl
  },
}
