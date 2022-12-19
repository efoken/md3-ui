/* eslint-disable import/no-extraneous-dependencies */
import { Queue } from "@md3-ui/utils"
import { Config, transform } from "@svgr/core"
import * as fse from "fs-extra"
import { camelCase, kebabCase, startCase } from "lodash"
import * as path from "node:path"

const svgrConfig: Config = {
  expandProps: false,
  native: true,
  typescript: true,
  template: (variables, { tpl }) => tpl`
    ${variables.imports}
    import { createIcon } from '@md3-ui/icon';
    ${"\n"}
    export const ${variables.componentName} = createIcon({
      path: ${variables.jsx},
      displayName: '${variables.componentName}',
    });
  `,
}

function createComponentName(str: string) {
  return startCase(
    camelCase(
      str
        .replace(/^360/, "three-sixty-")
        .replace(/^60/, "sixty-")
        .replace(/^30/, "thirty-")
        .replace(/^24/, "twenty-four-")
        .replace(/^23/, "twenty-three-")
        .replace(/^22/, "twenty-two-")
        .replace(/^21/, "twenty-one-")
        .replace(/^20/, "twenty-")
        .replace(/^19/, "nineteen-")
        .replace(/^18/, "eighteen-")
        .replace(/^17/, "seventeen-")
        .replace(/^16/, "sixteen-")
        .replace(/^15/, "fifteen-")
        .replace(/^14/, "fourteen-")
        .replace(/^13/, "thirteen-")
        .replace(/^12/, "twelve-")
        .replace(/^11/, "eleven-")
        .replace(/^10/, "ten-")
        .replace(/^9/, "nine-")
        .replace(/^8/, "eight-")
        .replace(/^7/, "seven-")
        .replace(/^6/, "six-")
        .replace(/^5/, "five-")
        .replace(/^4/, "four-")
        .replace(/^3/, "three-")
        .replace(/^2/, "two-")
        .replace(/^1/, "one-")
        .replace(/-/g, " ")
        .trim(),
    ),
  ).replace(/ /g, "")
}

async function createComponent(icon: { data: string; name: string }) {
  return new Promise<string>((resolve) => {
    transform(icon.data, svgrConfig, { componentName: icon.name })
      .then((jsCode) =>
        resolve(
          jsCode
            .replace(/<Svg[\S\s]*?>/, "<>")
            .replace(/<\/Svg>/, "</>")
            .replace(/import Svg,/, "import"),
        ),
      )
      .catch(() => {
        // console.log("error", icon.name)
      })
  })
}

async function run() {
  await fse.emptyDir(path.join(__dirname, "../src"))

  fse.readdir(path.join(__dirname, "../assets"), async (_err, files) => {
    const icons = files
      .map((file) => ({
        name: createComponentName(file.replace(/\..+$/, "")),
        data: fse
          .readFileSync(path.join(__dirname, `../assets/${file}`), {
            flag: "r",
          })
          .toString(),
      }))
      .sort((a, b) => a.name.localeCompare(b.name))

    const queue = new Queue<{ data: string; name: string }>(
      async (icon) => {
        const jsCode = await createComponent(icon)
        await fse.writeFile(
          path.join(__dirname, `../src/${kebabCase(icon.name)}.tsx`),
          jsCode,
        )
        await fse.appendFile(
          path.join(__dirname, "../src/index.ts"),
          `export * from "./${kebabCase(icon.name)}"\n`,
        )
      },
      { concurrency: 5 },
    )
    queue.push(icons)
    await queue.wait({ empty: true })
  })
}

run()
