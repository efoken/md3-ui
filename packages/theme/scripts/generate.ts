/* eslint-disable import/no-extraneous-dependencies */
import { mapValues, mergeDeep } from "@md3-ui/utils"
import AdmZip from "adm-zip"
import { camelCase, kebabCase, mapKeys } from "lodash"
import StyleDictionary from "style-dictionary"
import { TypescriptColor } from "./formats/typescript-color"
import { TypescriptComponent } from "./formats/typescript-component"
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
  return Object.keys(obj).reduce<any>((res, key) => {
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

const componentMap = {
  badge: "badge",
  circularProgressIndicator: "circularProgress",
  divider: "divider",
  elevatedButton: "elevatedButton",
  extendedFab: "extendedFab",
  fab: "fab",
  filledButton: "filledButton",
  filledIconButton: "filledIconButton",
  filledTonalButton: "tonalButton",
  filledTonalIconButton: "tonalIconButton",
  filterChip: "filterChip",
  iconButton: "iconButton",
  linearProgressIndicator: "linearProgress",
  list: "list",
  outlinedButton: "outlinedButton",
  outlinedIconButton: "outlinedIconButton",
  snackbar: "snackbar",
  switch: "switch",
  textButton: "textButton",
}

let tokens = {
  md: {
    sys: {
      color: {},
    },
  },
}

export default async function main() {
  const data = await fetch(
    "https://github.com/flutter/flutter/archive/refs/heads/master.zip",
  )
  const buffer = Buffer.from(await data.arrayBuffer())
  const zip = new AdmZip(buffer)

  for (const entry of zip
    .getEntries()
    // eslint-disable-next-line @typescript-eslint/no-shadow
    .filter((entry) =>
      /dev\/tools\/gen_defaults\/data\/.*\.json/.test(entry.entryName),
    )) {
    const { entryName } = entry
    let entryData = JSON.parse(entry.getData().toString("utf8"))

    if ("version" in entryData) {
      delete entryData.version
    }

    if (entryName.endsWith("color_dark.json")) {
      entryData = mapKeys(entryData, (_value, key) =>
        key.replace("md.sys.color", "md.sys.color.dark"),
      )
    } else if (entryName.endsWith("color_light.json")) {
      entryData = {
        ...entryData,
        ...mapKeys(entryData, (_value, key) =>
          key.replace("md.sys.color", "md.sys.color.light"),
        ),
      }
    }

    const json = objectify(
      mapValues(entryData, (value) => ({
        value: normalizePath(value),
        type: "other",
      })),
    )
    tokens = mergeDeep(tokens, json)
  }

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
          {
            destination: "create-color.ts",
            format: "typescript/color",
            filter: (token) => token.name.startsWith("sysColor"),
          },
        ],
      },
      comp: {
        transforms,
        buildPath: "src/components/",
        files: Object.entries(componentMap).map<StyleDictionary.File>(
          ([component, typeName]) => ({
            destination: `${kebabCase(typeName)}.ts`,
            format: "typescript/component",
            filter: (token) =>
              token.path.join(".").startsWith(`md.comp.${component}`),
            options: {
              component,
              typeName,
            },
          }),
        ),
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
      token.path.at(-1) === "color" || token.path.at(-1) === "shadowColor",
    transformer: (token) =>
      `md.sys.color.${token.value.replace(
        "onInverseSurface",
        "inverseOnSurface",
      )}`,
  })

  dict.registerTransform({
    type: "value",
    name: "md/textStyle",
    matcher: (token) => token.path.at(-1) === "textStyle",
    transformer: (token) => `md.sys.typescale.${token.value}`,
  })

  dict.registerFormat(TypescriptColor)
  dict.registerFormat(TypescriptComponent)
  dict.registerFormat(TypescriptFunction)

  dict.buildAllPlatforms()
}

main()
