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
    postcss: false,
  },
  framework: "@storybook/react-webpack5",
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
