import { StorybookConfig } from "@storybook/react-vite"
import { mergeConfig } from "vite"

const extensions = [
  ".web.js",
  ".js",
  ".web.jsx",
  ".jsx",
  ".web.ts",
  ".ts",
  ".web.tsx",
  ".tsx",
  ".json",
]

const config: StorybookConfig = {
  stories: ["../packages/*/src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-essentials",
      options: {
        docs: false,
      },
    },
    "storybook-addon-performance",
    "storybook-dark-mode",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      strictMode: true,
    },
  },
  viteFinal: (config) =>
    mergeConfig(config, {
      optimizeDeps: {
        esbuildOptions: {
          resolveExtensions: extensions,
        },
      },
      resolve: {
        alias: {
          "react-native": "react-native-web",
        },
        extensions,
      },
    }),
}

export default config
