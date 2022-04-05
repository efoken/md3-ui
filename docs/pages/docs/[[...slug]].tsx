import { Box, Text } from "@md3-ui/core"
import { allDocs, Doc } from "contentlayer/generated"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { useMDXComponent } from "next-contentlayer/hooks"
import Head from "next/head"
import { Layout } from "../../src/layout"
import { MDXComponents } from "../../src/mdx-components"

const DocLayout: NextPage<{ doc: Doc }> = ({ doc }) => {
  const MDXComponent = useMDXComponent(doc.body.code)

  return (
    <Layout>
      <Head>
        <title>{doc.title}</title>
      </Head>
      <Box sx={{ width: "100%", maxWidth: 1488, padding: 9, marginX: "auto" }}>
        <Text variant="display-large">{doc.title}</Text>
        <MDXComponent components={MDXComponents} />
      </Box>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: allDocs.map((doc) => doc.url),
  fallback: false,
})

export const getStaticProps: GetStaticProps = ({ params }) => ({
  props: {
    doc: allDocs.find((doc) =>
      doc._raw.flattenedPath.endsWith([params?.slug].flat().join("/")),
    ),
  },
})

export default DocLayout
