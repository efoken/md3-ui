/* eslint-disable import/no-extraneous-dependencies */
import { upperFirst } from "lodash"
import prettier from "prettier"
import { Format, formatHelpers } from "style-dictionary"

export const TypescriptComponent: Format = {
  name: "typescript/component",
  formatter: ({ dictionary, file, options }) => {
    const { component, typeName = component } = options

    const tokens = formatHelpers.minifyDictionary(
      dictionary.tokens.md.comp[component],
    )

    const tpl = `${formatHelpers.fileHeader({
      file,
    })}import { TextStyle as RNTextStyle } from "react-native"

    export interface Md3Comp${upperFirst(typeName)} ${formatHelpers
      .getTypeScriptType(tokens)
      .replace(/elevation: string/g, "elevation: any")
      .replace(/opacity: string/g, "opacity: number")
      .replace(/shape: string/g, "shape: number")
      .replace(/textStyle: string/g, "textStyle: Partial<RNTextStyle>")}

    export const ${typeName}Theme = (theme: Record<string, any>): Md3Comp${upperFirst(
      typeName,
    )} => (${JSON.stringify(tokens, null, 2).replace(
      /"md\.(.+?)"/g,
      "theme.$1",
    )})`

    return prettier.format(tpl, {
      parser: "typescript",
      semi: false,
      trailingComma: "all",
    })
  },
}
