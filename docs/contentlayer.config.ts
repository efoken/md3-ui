import { defineDocumentType, makeSource } from "contentlayer/source-files"
import remarkEmoji from "remark-emoji"
import remarkGfm from "remark-gfm"
import remarkSlug from "remark-slug"

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: "docs/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the doc",
      required: true,
    },
    description: {
      type: "string",
      description: "A short description of the doc",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: "pages",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkSlug, remarkGfm, remarkEmoji],
  },
})
