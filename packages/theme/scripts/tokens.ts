/* eslint-disable import/no-extraneous-dependencies */
import { mergeDeep } from "@md3-ui/utils"
import AdmZip from "adm-zip"
import * as fs from "node:fs"
import StyleDictionary from "style-dictionary"

function objectify(obj: Record<string, any>) {
  return Object.keys(obj).reduce((res, key) => {
    const path = key.split(".")
    path.reduce((acc, k, i, a) => {
      acc[k] =
        path.length - 1 === i
          ? obj[key]
          : acc[k] || (/^\d+$/.test(a[i + 1]) ? [] : {})
      return acc[k]
    }, res)
    return res
  }, {})
}

export default async function main() {
  const data = await fetch(
    "https://github.com/material-foundation/material-tokens/archive/refs/heads/json.zip",
  )
  const buffer = Buffer.from(await data.arrayBuffer())
  const zip = new AdmZip(buffer)

  let tokens = {
    md: {
      sys: {
        shape: {
          corner: {
            "extra-small": {
              top: {
                type: "shape",
                description: "Extra small top rounding",
                value: {
                  all: "0px",
                  method: "round",
                  topLeft: "4px",
                  topRight: "4px",
                },
              },
            },
          },
        },
      },
    },
  }

  zip
    .getEntries()
    .filter((entry) =>
      entry.entryName.match(/material-tokens-json\/json\/.*\.json/),
    )
    .forEach((entry) => {
      const json = objectify(JSON.parse(entry.getData().toString("utf8")))
      tokens = mergeDeep(tokens, json)
    })

  fs.writeFileSync("dist/tokens.json", JSON.stringify(tokens, undefined, 2))

  const dict = StyleDictionary.extend({
    platforms: {
      scss: {
        transforms: [
          "attribute/cti",
          "name/cti/kebab",
          "time/seconds",
          "content/icon",
          "size/rem",
          "color/css",
          "shape/css",
        ],
        buildPath: "scripts/dist/",
        files: [
          {
            destination: "variables.scss",
            format: "scss/variables",
          },
        ],
      },
      js: {
        transforms: ["attribute/cti", "name/ti/camel"],
        buildPath: "src/tokens/",
        files: [
          {
            destination: "palette.js",
            format: "javascript/module",
            filter: (token) =>
              token.path.join(".").startsWith("md.ref.palette"),
          },
        ],
      },
    },
    tokens,
  })

  dict.registerTransform({
    type: "value",
    transitive: true,
    name: "shape/css",
    matcher: (token) => token.type === "shape",
    transformer: (token) => {
      if (token.value.method === "round") {
        return [
          token.value.topLeft ?? token.value.all,
          token.value.topRight ?? token.value.all,
          token.value.bottomRight ?? token.value.all,
          token.value.bottomLeft ?? token.value.all,
        ].join(" ")
      }
      if (token.value.method === "circle") {
        return "999px"
      }
      return "0px"
    },
  })

  dict.buildAllPlatforms()
}

main()
