module.exports = {
  stories: ["../packages/**/*.stories.tsx"],
  addons: ["@storybook/addon-a11y"],
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
