module.exports = {
  stories: ["../packages/**/*.stories.tsx"],
  addons: ["@storybook/addon-a11y", "@storybook/addon-essentials"],
  core: {
    builder: {
      name: "webpack5",
      options: {
        lazyCompilation: true,
        fsCache: true,
      },
    },
  },
  features: {
    babelModeV7: true,
    emotionAlias: false,
    postcss: false,
    storyStoreV7: true,
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  webpackFinal: (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        "react-native": "react-native-web",
      },
      extensions: [".web.js", ".web.jsx", ".web.ts", ".web.tsx"].concat(
        config.resolve.extensions,
      ),
    },
  }),
}
