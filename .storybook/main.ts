import { StorybookConfig } from "@storybook/react-webpack5"
import webpack from "webpack"

const config: StorybookConfig = {
  stories: ["../packages/*/stories/*.stories.tsx"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "storybook-addon-performance",
    "storybook-dark-mode",
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
    plugins: [
      ...(config.plugins ?? []),
      new webpack.DefinePlugin({
        __DEV__: JSON.stringify(true),
      }),
    ],
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
