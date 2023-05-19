/* eslint-disable import/no-extraneous-dependencies, no-console */
import { glob } from "glob"
import { startCase } from "lodash"
import fs from "node:fs"
import path from "node:path"
import { outdent } from "outdent"

interface ComponentInfo {
  componentName: string
  content: string
  distJsonName: string
  distJsonPath: string
  fileName: string
}

const sourcePath = path.join(__dirname, "../../../packages")
const distPath = path.join(__dirname, "../dist")
const outputPath = path.join(distPath, "../dist/components")

const cjsIndexFilePath = path.join(distPath, "commonjs/index.js")
const esmIndexFilePath = path.join(distPath, "module/index.js")
const typeFilePath = path.join(distPath, "typescript/index.d.ts")

function writeComponentInfoFiles(componentInfo: ComponentInfo[]) {
  for (const { content, distJsonPath } of componentInfo) {
    fs.writeFileSync(distJsonPath, content)
  }
}

function writeIndexCJS(componentInfo: ComponentInfo[]) {
  const allComponents = componentInfo
    .map(({ componentName }) => `${componentName}`)
    .join(",\n")

  const cjsExports = componentInfo.map(
    ({ componentName, distJsonName }) =>
      `const ${componentName} = require('../${distJsonName}')`,
  ).concat(outdent`

    const json = {
    ${allComponents},
    }

    const allPropDocs = Object.fromEntries(
      Object.values(json).flatMap((doc) => Object.entries(doc)),
    )

    const getPropDoc = (name) => allPropDocs[name]

    module.exports = {
    allPropDocs,
    getPropDoc,
    ${allComponents},
    }
  `)

  fs.mkdirSync(path.dirname(cjsIndexFilePath), { recursive: true })
  fs.writeFileSync(cjsIndexFilePath, cjsExports.join("\n"))
}

function writeIndexESM(componentInfo: ComponentInfo[]) {
  const allComponents = componentInfo
    .map(({ componentName }) => `${componentName}`)
    .join(",\n")

  const esmPropImports = componentInfo
    .map(
      ({ componentName, distJsonName }) =>
        `import ${componentName}Json from "../${distJsonName}"`,
    )
    .join("\n")

  const esmPropExports = componentInfo
    .map(
      ({ componentName }) =>
        `export const ${componentName} = ${componentName}Json`,
    )
    .concat(
      outdent`

        const json = {
        ${allComponents}
        }

        export const allPropDocs = Object.fromEntries(
          Object.values(json).flatMap((doc) => Object.entries(doc)),
        )

        export const getPropDoc = (name) => allPropDocs[name]
      `,
    )
    .join("\n")

  fs.mkdirSync(path.dirname(esmIndexFilePath), { recursive: true })
  fs.writeFileSync(esmIndexFilePath, `${esmPropImports}\n\n${esmPropExports}`)
}

function writeTypes(componentInfo: ComponentInfo[]) {
  const typeExports = componentInfo
    .map(
      ({ componentName }) => `export declare const ${componentName}: PropDoc`,
    )
    .join("\n")

  const baseType = outdent`
    export interface Prop {
      type: string
      defaultValue?: string | null
      required: boolean
      description?: string
    }

    export interface PropDoc {
      [componentOrHook: string]: Prop
    }
  `

  const getterTypes = outdent`

    export declare const allPropDocs: Record<string, Prop>
    export declare function getPropDoc(name: string): PropDoc | undefined
  `

  fs.mkdirSync(path.dirname(typeFilePath), { recursive: true })
  fs.writeFileSync(typeFilePath, `${baseType}\n${typeExports}\n${getterTypes}`)
}

export default async function main() {
  const componentFiles = glob.sync("packages/*/docs.json", {
    cwd: path.dirname(sourcePath),
    absolute: true,
  })

  if (componentFiles.length > 0) {
    fs.mkdirSync(path.dirname(outputPath), { recursive: true })
  }

  const componentInfo = componentFiles.map((file) => {
    const baseName = path.basename(path.dirname(file))
    const componentName = startCase(baseName)
    return {
      componentName,
      content: fs.readFileSync(file, "utf8"),
      distJsonName: path.join("components", `${componentName}.json`),
      distJsonPath: path.join(outputPath, `${componentName}.json`),
      fileName: path.join(baseName, `${componentName}.json`),
    }
  })

  writeComponentInfoFiles(componentInfo)
  writeIndexCJS(componentInfo)
  writeIndexESM(componentInfo)
  writeTypes(componentInfo)

  console.log(`Props extracted for ${componentInfo.length} components 🎉`)
}

if (require.main === module) {
  // Run main function if called via CLI
  main().catch(console.error)
}
