/* eslint-disable import/no-extraneous-dependencies */
import glob from "glob"
import mkdirp from "mkdirp"
import { writeFileSync } from "node:fs"
import path from "node:path"
import { promisify } from "node:util"
import { ComponentDoc, withCustomConfig } from "react-docgen-typescript"

interface ComponentInfo {
  def: ComponentDoc
  displayName: string
  exportName: string
  fileName: string
  importPath: string
}

const globAsync = promisify(glob)

const excludedPropNames = new Set(["as", "style", "sx"])

const sourcePath = path.join(__dirname, "../../../packages")
const distPath = path.join(__dirname, "../dist")
const outputPath = path.join(distPath, "../dist/components")

const cjsIndexFilePath = path.join(distPath, "md3-ui-props-docs.cjs.js")
const esmIndexFilePath = path.join(distPath, "md3-ui-props-docs.esm.js")
const typeFilePath = path.join(distPath, "md3-ui-props-docs.cjs.d.ts")

const tsConfigPath = path.join(sourcePath, "..", "tsconfig.json")

/**
 * Find all TypeScript files which could contain component definitions
 */
async function findComponentFiles() {
  const tsFiles = await globAsync("core/**/src/index.ts", {
    cwd: sourcePath,
  })
  return tsFiles.filter((f) => !f.includes(".stories") && !f.includes(".test"))
}

/**
 * Parse files with react-doc-gen-typescript
 */
function parseInfo(filePaths: string[]) {
  const { parse } = withCustomConfig(tsConfigPath, {
    shouldRemoveUndefinedFromOptional: true,
    propFilter: (prop, component) => {
      const isStyledSystemProp = excludedPropNames.has(prop.name)
      const isNativeElementProp =
        prop.parent?.fileName.includes("node_modules") ?? false
      const isHook = component.name.startsWith("use")
      const isTypeScriptNative =
        prop.parent?.fileName.includes("node_modules/typescript") ?? false

      return (
        (isHook && !isTypeScriptNative) ||
        !(isStyledSystemProp || isNativeElementProp)
      )
    },
  })

  return filePaths.flatMap((file) => parse(path.join(sourcePath, file)))
}

/**
 * Extract meta data of component docs
 */
function extractComponentInfo(docs: ComponentDoc[]) {
  return docs.reduce((acc, def) => {
    if (Object.keys(def.props || {}).length === 0) {
      return acc
    }

    function createUniqueName(displayName: string) {
      const existing = acc.filter(
        (prev) =>
          prev.def.displayName.toLowerCase() === displayName.toLowerCase(),
      )

      if (existing.length === 0) {
        return displayName
      }

      return `${displayName}${existing.length}`
    }

    const exportName = createUniqueName(def.displayName)
    const fileName = `${exportName}.json`

    acc.push({
      def,
      displayName: def.displayName,
      exportName,
      fileName,
      importPath: `./components/${fileName}`,
    })
    return acc
  }, [] as ComponentInfo[])
}

/**
 * Write component info as JSON to disk
 */
function writeComponentInfoFiles(componentInfo: ComponentInfo[]) {
  componentInfo.forEach((info) => {
    const filePath = path.join(outputPath, info.fileName)
    const content = JSON.stringify(info.def)
    writeFileSync(filePath, content)
  })
}

/**
 * Create and write the index file in CJS format
 */
function writeIndexCJS(componentInfo: ComponentInfo[]) {
  const cjsExports = componentInfo.map(
    ({ displayName, importPath }) =>
      `module.exports['${displayName}'] = require('${importPath}')`,
  )
  writeFileSync(cjsIndexFilePath, cjsExports.join("\n"))
}

/**
 * Create and write the index file in ESM format
 */
function writeIndexESM(componentInfo: ComponentInfo[]) {
  const esmPropImports = componentInfo
    .map(
      ({ exportName, importPath }) =>
        `import ${exportName}Import from '${importPath}'`,
    )
    .join("\n")

  const esmPropExports = componentInfo
    .map(({ exportName }) => `export const ${exportName} = ${exportName}Import`)
    .join("\n")

  writeFileSync(
    esmIndexFilePath,
    `${esmPropImports}
${esmPropExports}`,
  )
}

function writeTypes(componentInfo: ComponentInfo[]) {
  const typeExports = componentInfo
    .map(({ exportName }) => `export declare const ${exportName}: PropDoc`)
    .join("\n")

  const baseType = `
    export interface Parent {
      fileName: string;
      name: string;
    }

    export interface Declaration {
      fileName: string;
      name: string;
    }

    export interface DefaultProps {
      declarations: Declaration[];
      defaultValue?: any;
      description: string | JSX.Element;
      name: string;
      parent: Parent;
      required: boolean;
      type: { name: string };
    }

    export interface PropDoc {
      description: string | JSX.Element;
      displayName: string;
      filePath: string;
      methods: any[];
      props: {
        components?: DefaultProps;
        defaultProps?: DefaultProps;
      };
      tags: { see: string };
    }
  `

  writeFileSync(typeFilePath, `${baseType}\n${typeExports}`)
}

function log(...args: unknown[]) {
  // eslint-disable-next-line no-console
  console.info("[props-docs]", ...args)
}

export default async function main() {
  const componentFiles = await findComponentFiles()

  if (componentFiles.length > 0) {
    await mkdirp(outputPath)
  }

  log("Parsing files for component types...")
  const parsedInfo = parseInfo(componentFiles)

  log("Extracting component info...")
  const componentInfo = extractComponentInfo(parsedInfo)

  log("Writing component info files...")
  writeComponentInfoFiles(componentInfo)

  log("Writing index files...")
  writeIndexCJS(componentInfo)
  writeIndexESM(componentInfo)
  writeTypes(componentInfo)

  log(`Processed ${componentInfo.length} components`)
}

if (require.main === module) {
  // Run main function if called via CLI
  main().catch(console.error)
}
