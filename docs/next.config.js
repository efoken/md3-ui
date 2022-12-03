const { withContentlayer } = require("next-contentlayer")
const withPreconstruct = require("@preconstruct/next")

const withTM = require("next-transpile-modules")(["react-native"])

module.exports = withTM(
  withPreconstruct(
    withContentlayer({
      reactStrictMode: true,
      webpack: (config) => ({
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
          fallback: {
            ...config.resolve.fallback,
            "react-native/Libraries/Renderer/shims/ReactNative": false,
          },
        },
      }),
    }),
  ),
)
