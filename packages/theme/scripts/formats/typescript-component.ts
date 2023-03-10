/* eslint-disable import/no-extraneous-dependencies */
import prettier from "prettier"
import { Format, formatHelpers } from "style-dictionary"

function upperCaseFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

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

    export interface Md3Comp${upperCaseFirst(typeName)} ${formatHelpers
      .getTypeScriptType(tokens)
      .replaceAll("elevation: string", "elevation: any")
      .replaceAll("opacity: string", "opacity: number")
      .replaceAll("shape: string", "shape: number")
      .replaceAll("textStyle: string", "textStyle: Partial<RNTextStyle>")}

    export const ${typeName}Theme = (theme: Record<string, any>): Md3Comp${upperCaseFirst(
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
