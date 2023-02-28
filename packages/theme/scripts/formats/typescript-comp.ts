/* eslint-disable import/no-extraneous-dependencies */
import prettier from "prettier"
import { Format, formatHelpers } from "style-dictionary"

function upperCaseFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const TypescriptComp: Format = {
  name: "typescript/comp",
  formatter: ({ dictionary, file, options }) => {
    const { component } = options

    const tpl = `${formatHelpers.fileHeader({
      file,
    })}export const ${component} = (theme: any) => (${JSON.stringify(
      formatHelpers.minifyDictionary(dictionary.tokens.md.comp[component]),
      null,
      2,
    ).replace(/"md\.(.+?)"/g, "theme.$1")})

    export type Md3Comp${upperCaseFirst(
      component,
    )} = ReturnType<typeof ${component}>`

    return prettier.format(tpl, {
      parser: "typescript",
      semi: false,
      trailingComma: "all",
    })
  },
}
