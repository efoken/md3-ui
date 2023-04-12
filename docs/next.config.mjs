import nextMDX from "@next/mdx"
import withPreconstruct from "@preconstruct/next"
import remarkEmoji from "remark-emoji"
import remarkGfm from "remark-gfm"
import remarkSlug from "remark-slug"

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
    remarkPlugins: [remarkSlug, remarkGfm, remarkEmoji],
    rehypePlugins: [],
  },
})

export default withPreconstruct(
  withMDX({
    transpilePackages: [
      "react-native",
      "react-native-safe-area-context",
      "react-native-svg",
      "react-native-web",
    ],
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
)
