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

    const tpl = `${formatHelpers.fileHeader({
      file,
    })}import { mergeDeep } from "@md3-ui/utils"

    export function create${typeName}(${lowerCaseFirst(typeName)}: any) {
      return mergeDeep(${JSON.stringify(
        formatHelpers.minifyDictionary(
          prefix ? get(dictionary.tokens, prefix, {}) : dictionary.tokens,
        ),
        null,
        2,
      )
        .replace(/"(\d{1,3})":/g, "$1:")
        .replace(/"md\.(.+?)"/g, "theme.$1")}, ${lowerCaseFirst(typeName)})
      }

    export type ${typeName} = ReturnType<typeof create${typeName}>`

    return prettier.format(tpl, {
      parser: "typescript",
      semi: false,
      trailingComma: "all",
    })
  },
}
