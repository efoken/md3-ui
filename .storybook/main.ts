import { StorybookConfig } from "@storybook/react-webpack5"

const config: StorybookConfig = {
  stories: ["../packages/**/*.stories.tsx"],
  addons: ["@storybook/addon-a11y", "@storybook/addon-essentials"],
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
      fallback: {
        ...config.resolve?.fallback,
        "react-native/Libraries/Renderer/shims/ReactNative": false,
      },
    },
  }),
}

export default config
