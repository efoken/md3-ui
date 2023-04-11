import { glob } from "glob"
import fs from "node:fs"
import path from "node:path"

const rootPath = path.join(__dirname, "..")

async function resolvePackages() {
  const packageJson = JSON.parse(
    fs.readFileSync(path.join(rootPath, "package.json")).toString(),
  )
  const files = await Promise.all(
    packageJson.workspaces.map((pattern: string) =>
      glob(pattern, {
        cwd: rootPath,
      }),
    ),
  )
  return files.flat()
}

function readPackageJson(folder: string) {
  return JSON.parse(
    fs.readFileSync(path.join(rootPath, folder, "package.json")).toString(),
  )
}

function writeIndexCJS(outputPath: string, source: string) {
  fs.mkdirSync(path.join(outputPath, "commonjs"))
  fs.writeFileSync(
    path.join(outputPath, "commonjs/index.js"),
    `"use strict"
const unregister =
  require("../../../../node_modules/@preconstruct/hook").___internalHook(
    typeof __dirname === "undefined" ? undefined : __dirname,
    "../../..",
    "..",
  )
module.exports = require("../../${source}/index.ts")
unregister()\n`,
  )
}

function writeIndexESM(outputPath: string, sourcePath: string) {
  fs.mkdirSync(path.join(outputPath, "module"))
  fs.symlinkSync(
    path.join(sourcePath, "index.ts"),
    path.join(outputPath, "module/index.js"),
  )
}

function writeTypes(outputPath: string, source: string) {
  fs.mkdirSync(path.join(outputPath, "typescript"))
  fs.writeFileSync(
    path.join(outputPath, "typescript/index.d.ts"),
    `export * from "../../${source}/index"\n`,
  )
}

export default async function main() {
  const packages = await resolvePackages()
  for (const folder of packages) {
    const packageJson = readPackageJson(folder)
    const { output, source, targets } =
      packageJson["react-native-builder-bob"] ?? {}

    if (output && source) {
      const sourcePath = path.join(rootPath, folder, source)
      const outputPath = path.join(rootPath, folder, output)

      const target = new Set<string>(targets.flat())

      fs.rmSync(outputPath, { force: true, recursive: true })
      fs.mkdirSync(outputPath)

      if (target.has("commonjs")) {
        writeIndexCJS(outputPath, source)
      }
      if (target.has("module")) {
        writeIndexESM(outputPath, sourcePath)
      }
      if (target.has("typescript")) {
        writeTypes(outputPath, source)
      }
    }
  }
}

if (require.main === module) {
  // Run main function if called via CLI
  main().catch(console.error)
}
