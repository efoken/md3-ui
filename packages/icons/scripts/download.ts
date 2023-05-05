/* eslint-disable import/no-extraneous-dependencies, no-console */
import { PromisePool } from "@supercharge/promise-pool"
import fetchRetry from "fetch-retry"
import fs from "node:fs"
import path from "node:path"
import { Config, optimize } from "svgo"
import yargs from "yargs"

const fetch = fetchRetry(global.fetch)

const svgoConfig: Config = {
  multipass: true,
  js2svg: {
    indent: 2,
    pretty: true,
  },
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
    {
      name: "removeUselessStrokeAndFill",
      params: {
        removeNone: true,
      },
    },
    {
      name: "convertStyleToAttrs",
    },
  ],
}

// Icons we don't publish.
// This is just a list of new icons.
// We might change what icons we want to exclude (e.g. by popularity)
const ignoredIconNames = new Set([
  "123",
  "6_ft_apart",
  "add_chart", // Leads to inconsistent casing with `Addchart`
  "ads_click",
  "area_chart",
  "back_hand",
  "checklist_rtl",
  "checklist",
  "compost",
  "cruelty_free",
  "data_exploration",
  "disabled_visible",
  "draw",
  "drive_file_move_rtl",
  "edit_calendar",
  "edit_note",
  "emergency",
  "exposure_neg_1", // Google product
  "exposure_neg_2", // Google product
  "exposure_plus_1", // Google product
  "exposure_plus_2", // Google product
  "exposure_zero", // Google product
  "free_cancellation",
  "front_hand",
  "generating_tokens",
  "group_off",
  "horizontal_distribute", // Advanced text editor
  "hotel_class",
  "incomplete_circle",
  "medication_liquid", // Currently broken
  "motion_photos_on", // Google product
  "motion_photos_pause", // Google product
  "motion_photos_paused", // Google product
  "new_label",
  "personal_injury",
  "pin_end",
  "pin_invoke",
  "polymer", // Legacy brand
  "private_connectivity",
  "real_estate_agent",
  "recycling",
  "space_dashboard",
  "vertical_distribute", // Advanced text editor
  "water_drop",
  "waving_hand",
])

const themeMap: Record<string, string> = {
  baseline: "", // filled
  outline: "_outlined",
  round: "_round",
  twotone: "_two_tone",
  sharp: "_sharp",
}

const themeFileMap: Record<string, string> = {
  baseline: "", // filled
  outline: "-outlined",
  round: "-rounded",
  twotone: "-two-tone",
  sharp: "-sharp",
}

function downloadIcon(icon: { index: number; name: string; version: string }) {
  console.log(`downloadIcon ${icon.index}: ${icon.name}`)

  return Promise.all(
    Object.keys(themeMap).map(async (theme) => {
      const formattedTheme = themeMap[theme].split("_").join("")
      const response = await fetch(
        `https://fonts.gstatic.com/s/i/materialicons${formattedTheme}/${icon.name}/v${icon.version}/24px.svg`,
        {
          retries: 3,
          retryDelay: (attempt) => (attempt - 1) * 100,
        },
      )
      if (response.status !== 200) {
        throw new Error(`status ${response.status}`)
      }
      const svg = await response.text()
      const dataPath = path.join(
        __dirname,
        `../assets.bak/${icon.name.replace(/_/g, "-")}${
          themeFileMap[theme]
        }.svg`,
      )
      const data = optimize(svg, {
        path: dataPath,
        ...svgoConfig,
      })
      fs.writeFileSync(dataPath, data.data)
    }),
  )
}

async function run() {
  try {
    const { argv } = yargs
      .usage("Download the SVG from material.io/resources/icons")
      .describe("start-after", "Resume at the following index")
    console.log("run", argv)
    for (const file of fs.readdirSync(path.join(__dirname, "../assets.bak"))) {
      fs.rmSync(path.join(__dirname, "../assets.bak", file))
    }
    const response = await fetch("https://fonts.google.com/metadata/icons")
    const text = await response.text()
    const data = JSON.parse(text.replace(")]}'", "")) as {
      icons: { name: string; version: string }[]
    }
    const icons = data.icons
      .filter((icon) => !ignoredIconNames.has(icon.name))
      .map((icon, index) => ({ index, ...icon }))
      .splice(((argv as any).startAfter as number) ?? 0)
    console.log(`${icons.length} icons to download`)

    await PromisePool.for(icons)
      .withConcurrency(5)
      .process(async (icon) => {
        await downloadIcon(icon)
      })
  } catch (error) {
    console.log("error", error)
    throw error
  }
}

run()
