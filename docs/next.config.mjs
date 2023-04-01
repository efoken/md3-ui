import nextMDX from "@next/mdx"
import withPreconstruct from "@preconstruct/next"
import nextTranspileModules from "next-transpile-modules"
import remarkEmoji from "remark-emoji"
import remarkGfm from "remark-gfm"
import remarkSlug from "remark-slug"

const withTM = nextTranspileModules(["react-native"])

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
    remarkPlugins: [remarkSlug, remarkGfm, remarkEmoji],
    rehypePlugins: [],
  },
})

export default withTM(
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
