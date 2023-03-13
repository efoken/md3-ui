// import remarkEmoji from "remark-emoji"
// import remarkGfm from "remark-gfm"
// import remarkSlug from "remark-slug"
const withPreconstruct = require("@preconstruct/next")

const withTM = require("next-transpile-modules")(["react-native"])

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
    // remarkPlugins: [remarkSlug, remarkGfm, remarkEmoji],
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

module.exports = withTM(
  withPreconstruct(
    withMDX({
      pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
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
        },
      }),
    }),
  ),
)
