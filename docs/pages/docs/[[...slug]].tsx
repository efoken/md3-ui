import { allDocs, Doc } from "contentlayer/generated"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { useMDXComponent } from "next-contentlayer/hooks"
import Head from "next/head"
import componentsSidebar from "../../configs/components-sidebar.json"
import { PageContainer } from "../../src/components/page-container"
import { Sidebar } from "../../src/components/sidebar"
import { Layout } from "../../src/layouts/layout"
import { MDXComponents } from "../../src/mdx-components"

function getRoutes(slug: string) {
  if (slug === "/") {
    return componentsSidebar.routes
  }

  const configMap = {
    "/docs/components": componentsSidebar,
    "/docs/styles": { routes: [] },
  }

  const [, sidebar] =
    Object.entries(configMap).find(([path]) => slug.startsWith(path)) ?? []

  return sidebar?.routes ?? []
}

const DocLayout: NextPage<{ doc: Doc }> = ({ doc }) => {
  const MDXComponent = useMDXComponent(doc.body.code)

  return (
    <Layout>
      <Head>
        <title>{doc.title}</title>
      </Head>
      <PageContainer
        frontMatter={{
          description: doc.description,
          title: doc.title,
        }}
        sidebar={<Sidebar routes={getRoutes("/docs/components")} />}
      >
        <MDXComponent components={MDXComponents} />
      </PageContainer>
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
