import { StorybookConfig } from "@storybook/react-webpack5"

const config: StorybookConfig = {
  stories: ["../packages/*/stories/*.stories.tsx"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "storybook-addon-performance",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      strictMode: true,
      builder: {
        fsCache: true,
        lazyCompilation: true,
      },
    },
  },
  webpackFinal: (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        "react-native": "react-native-web",
      },
      extensions: [".web.js", ".web.jsx", ".web.ts", ".web.tsx"].concat(
        config.resolve?.extensions ?? [],
      ),
    },
  }),
}

export default config
