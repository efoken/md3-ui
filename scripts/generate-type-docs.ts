import fs from "node:fs"
import path from "node:path"
import prettier from "prettier"
import ts from "typescript"

interface ComponentTypeInfo {
  type: string
  defaultValue?: string | boolean | null
  required: boolean
  description?: string
}

interface ComponentTypeProps {
  [component: string]: ComponentTypeInfo
}

interface TypeSearchOptions {
  shouldIgnoreProp?: (prop: ts.Symbol) => boolean | undefined
}

function tryPrettier(typeName: string) {
  try {
    const prefix = "type ONLY_FOR_FORMAT ="
    const prettyType = prettier.format(prefix + typeName, {
      parser: "typescript",
      semi: false,
    })
    return prettyType.replace(prefix, "").trim()
  } catch {
    return typeName
  }
}

function formatValue(value: string | undefined) {
  if (!value) {
    return
  }
  // convert "\"column\"", to "column"
  const x = value.replace(/^"(.*)"$/, "$1")
  return x === "true" ? true : x === "false" ? false : x
}

function sortByRequiredProps(props: ComponentTypeProps) {
  return Object.fromEntries(
    Object.entries(props)
      .sort(([a], [b]) => a.localeCompare(b))
      .sort(([, a], [, b]) =>
        a.required === b.required ? 0 : a.required ? -1 : 1,
      ),
  )
}

function extractPropsOfTypeName(
  searchTerm: string | RegExp,
  sourceFile: ts.SourceFile,
  typeChecker: ts.TypeChecker,
  { shouldIgnoreProp = () => false }: TypeSearchOptions = {},
) {
  const regexSearchTerm =
    typeof searchTerm === "string" ? `^${searchTerm}$` : searchTerm

  const typeStatements = sourceFile.statements.filter(
    (statement) =>
      (ts.isInterfaceDeclaration(statement) ||
        ts.isTypeAliasDeclaration(statement)) &&
      new RegExp(regexSearchTerm).test(statement.name.getText()),
  )

  const results: Record<string, ComponentTypeProps> = {}

  for (const typeStatement of typeStatements) {
    const props: ComponentTypeProps = {}

    for (const prop of typeChecker
      .getTypeAtLocation(typeStatement)
      .getProperties()) {
      if (shouldIgnoreProp(prop)) {
        continue
      }

      const propName = prop.getName()
      const type = typeChecker.getTypeOfSymbolAtLocation(prop, sourceFile)

      const defaultValue =
        prop
          .getJsDocTags()
          .find((tag) => tag.name === "default")
          ?.text?.map((doc) => doc.text)
          ?.join("\n") || undefined

      const nonNullableType = type.getNonNullableType()

      const typeName = typeChecker.typeToString(nonNullableType)
      const required = nonNullableType === type && typeName !== "any"

      const prettyType = tryPrettier(typeName)

      props[propName] = {
        type: prettyType,
        defaultValue: formatValue(defaultValue),
        required,
        description:
          prop
            .getDocumentationComment(typeChecker)
            .map((comment) => comment.text)
            .join("\n") || undefined,
      }
    }

    let typeName = (typeStatement as any).name.getText() as string

    if (typeName.endsWith("Props")) {
      typeName = typeName.replace(/Props$/, "")
      results[typeName] = sortByRequiredProps(props)
    } else {
      // eslint-disable-next-line no-console
      console.log("Omitting type", `\`${typeName}\``)
    }
  }

  return Object.keys(results).length > 0 ? results : null
}

function createTypeSearch(
  tsConfigPath: string,
  { shouldIgnoreProp }: TypeSearchOptions = {},
) {
  const configFile = ts.readConfigFile(tsConfigPath, ts.sys.readFile)
  const basePath = path.dirname(tsConfigPath)
  const { fileNames, options } = ts.parseJsonConfigFileContent(
    configFile.config,
    ts.sys,
    basePath,
  )

  const program = ts.createProgram(fileNames, options)
  const sourceFiles = program.getSourceFiles()

  return (searchTerm: Parameters<typeof extractPropsOfTypeName>[0]) => {
    const results: Record<string, ComponentTypeProps> = {}
    for (const sourceFile of sourceFiles) {
      const typeInfo = extractPropsOfTypeName(
        searchTerm,
        sourceFile,
        program.getTypeChecker(),
        { shouldIgnoreProp },
      )
      Object.assign(results, typeInfo)
    }
    return results
  }
}

function getSourceFileName(symbol: ts.Symbol): string | undefined {
  const declarations = symbol.getDeclarations()
  if (!declarations || declarations.length === 0) {
    return undefined
  }
  const sourceFile = declarations[0].getSourceFile()
  return sourceFile ? sourceFile.fileName : undefined
}

/**
 * ASSUMPTION: All files use a type-only export (and it can't be inline).
 *
 * @example
 * export type { ElevatedButtonProps } from '@md3-ui/button'
 * // NOT
 * export { type ElevatedButtonProps } from '@md3-ui/button'
 */
function extractTypeExports(code: string) {
  const exported: Record<string, any> = {}

  const exportedTypeRegex = /export type\s*{([^}]+)}/g

  for (const match of code.matchAll(exportedTypeRegex)) {
    const types = match[1].split(",").map((s) => s.trim())
    for (const type of types) {
      const [typeName] = type.split(" ") ?? []
      exported[typeName] = true
    }
  }

  const exportedTypes = Object.keys(exported).filter(Boolean)

  // eslint-disable-next-line no-console
  console.log({ exportedTypes })

  return exportedTypes
}

function defaultShouldIgnoreProp(prop: ts.Symbol) {
  const external = getSourceFileName(prop)?.includes("node_modules")
  const excludedByName = ["as", "children", "style", "styles", "sx"].includes(
    prop.getName(),
  )
  return external || excludedByName
}

export default async function main() {
  const code = fs.readFileSync(path.join("src", "index.ts"), "utf8")

  const searchType = createTypeSearch("tsconfig.json", {
    shouldIgnoreProp: defaultShouldIgnoreProp,
  })

  const typeExports = extractTypeExports(code)
    .map((type) => searchType(type))
    .filter((value) => Object.keys(value).length > 0)
    .reduce((acc, value) => ({ ...acc, ...value }), {})

  const typeExportsWithThemeProps: Record<string, any> = {}

  for (const [name, values] of Object.entries(typeExports)) {
    typeExportsWithThemeProps[name] = sortByRequiredProps(values)
  }

  if (Object.keys(typeExportsWithThemeProps).length > 0) {
    fs.writeFileSync(
      "docs.json",
      prettier.format(JSON.stringify(typeExportsWithThemeProps), {
        parser: "json",
      }),
    )
  }
}

if (require.main === module) {
  // Run main function if called via CLI
  main().catch(console.error)
}
