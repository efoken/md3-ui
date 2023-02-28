/* eslint-disable import/no-extraneous-dependencies */
import { mapValues, mergeDeep } from "@md3-ui/utils"
import AdmZip from "adm-zip"
import camelCase from "lodash.camelcase"
import kebabCase from "lodash.kebabcase"
import * as fs from "node:fs"
import * as StyleDictionary from "style-dictionary"
import { TypescriptComp } from "./formats/typescript-comp"
import { TypescriptFunction } from "./formats/typescript-function"

function normalizePath(str: any, ref = false) {
  if (typeof str === "string" && str.includes(".") && !/\(.*\)/.test(str)) {
    // eslint-disable-next-line no-param-reassign
    str = str
      .replace(/palette\.([a-z-]+)(\d{1,3})$/i, "palette.$1.$2")
      .split(".")
      .map((s) => camelCase(s))
      .join(".")
    return ref ? `{${str}}` : str
  }
  return str
}

function objectify(obj: Record<string, any>) {
  return Object.keys(obj).reduce((res, key) => {
    const path = normalizePath(key).split(".") as string[]
    path.reduce((acc, k, i) => {
      try {
        acc[k] = path.length - 1 === i ? obj[key] : acc[k] || {}
      } catch {
        // do nothing
      }
      return acc[k]
    }, res)
    return res
  }, {})
}

let tokens = {}

export default async function main() {
  const data = await fetch(
    "https://github.com/flutter/flutter/archive/refs/heads/master.zip",
  )
  const buffer = Buffer.from(await data.arrayBuffer())
  const zip = new AdmZip(buffer)

  zip
    .getEntries()
    .filter((entry) =>
      entry.entryName.match(/dev\/tools\/gen_defaults\/data\/.*\.json/),
    )
    .forEach((entry) => {
      const json = objectify(
        mapValues(JSON.parse(entry.getData().toString("utf8")), (value) => ({
          value: normalizePath(value),
          type: "other",
        })),
      )
      tokens = mergeDeep(tokens, json)
    })

  fs.writeFileSync("dist/tokens.json", JSON.stringify(tokens, undefined, 2))

  const transforms = [
    "attribute/cti",
    "name/ti/camel",
    "color/css",
    "shape/css",
    "md/color",
    "md/textStyle",
  ]

  const dict = StyleDictionary.extend({
    platforms: {
      ref: {
        transforms,
        buildPath: "src/",
        files: [
          {
            destination: "create-palette.ts",
            format: "typescript/function",
            filter: (token) => token.name.startsWith("refPalette"),
            options: {
              typeName: "Palette",
              prefix: "md.ref.palette",
            },
          },
          {
            destination: "create-typeface.ts",
            format: "typescript/function",
            filter: (token) => token.name.startsWith("refTypeface"),
            options: {
              typeName: "Typeface",
              prefix: "md.ref.typeface",
            },
          },
        ],
      },
      sys: {
        transforms,
        buildPath: "src/",
        files: [
          {
            destination: "create-shape.ts",
            format: "typescript/function",
            filter: (token) => token.name.startsWith("sysShape"),
            options: {
              typeName: "Shape",
              prefix: "md.sys.shape",
            },
          },
          {
            destination: "create-state.ts",
            format: "typescript/function",
            filter: (token) => token.name.startsWith("sysState"),
            options: {
              typeName: "State",
              prefix: "md.sys.state",
            },
          },
        ],
      },
      comp: {
        transforms,
        buildPath: "src/components/",
        files: [
          "badge",
          "elevatedButton",
          "filledButton",
          "outlinedButton",
          "textButton",
        ].map<StyleDictionary.File>((component) => ({
          destination: `${kebabCase(component)}.ts`,
          format: "typescript/comp",
          filter: (token) =>
            token.path.join(".").startsWith(`md.comp.${component}`),
          options: {
            component,
          },
        })),
      },
    },
    tokens,
  })

  dict.registerTransform({
    type: "value",
    name: "color/css",
    matcher: (token) => /0xFF[\dA-Z]{6}/.test(token.value),
    transformer: (token) => `#${token.value.slice(4).toLowerCase()}`,
  })

  dict.registerTransform({
    type: "value",
    name: "shape/css",
    matcher: (token) => token.value.family?.startsWith("SHAPE_"),
    transformer: (token) =>
      token.value.family === "SHAPE_FAMILY_CIRCULAR"
        ? 999
        : token.value.topLeft,
  })

  dict.registerTransform({
    type: "value",
    name: "md/color",
    matcher: (token) =>
      ["color", "shadowColor"].includes(token.path[token.path.length - 1]),
    transformer: (token) => `md.sys.color.${token.value}`,
  })

  dict.registerTransform({
    type: "value",
    name: "md/textStyle",
    matcher: (token) => token.path[token.path.length - 1] === "textStyle",
    transformer: (token) => `md.sys.typescale.${token.value}`,
  })

  dict.registerFormat(TypescriptComp)
  dict.registerFormat(TypescriptFunction)

  dict.buildAllPlatforms()
}

main()
