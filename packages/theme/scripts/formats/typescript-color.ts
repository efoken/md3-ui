/* eslint-disable import/no-extraneous-dependencies */
import prettier from "prettier"
import { Format, formatHelpers } from "style-dictionary"

export const TypescriptColor: Format = {
  name: "typescript/color",
  formatter: ({ dictionary, file, options }) => {
    const { colorScheme = "light" } = options

    const tokens: any = formatHelpers.minifyDictionary(
      dictionary.tokens.md.sys.color,
    )
    tokens[colorScheme].mode = colorScheme

    const tpl = `${formatHelpers.fileHeader({
      file,
    })}import { mergeDeep } from "@md3-ui/utils"

    export interface Color ${formatHelpers.getTypeScriptType(
      tokens[colorScheme],
    )}

    export function createColor(palette: any, color: Partial<Color> = {}): Color {
      return mergeDeep(${JSON.stringify(tokens[colorScheme], null, 2)
        .replace(/"(\d{1,3})":/g, "$1:")
        .replace(
          /"md\.ref\.palette\.(.+?)\.(\d{1,3})"/g,
          "palette.$1[$2]",
        )}, color)
    }`

    return prettier.format(tpl, {
      parser: "typescript",
      semi: false,
      trailingComma: "all",
    })
  },
}
