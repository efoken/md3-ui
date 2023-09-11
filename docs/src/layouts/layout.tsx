import componentsSidebar from "../../configs/components-sidebar.json"
import { PageContainer } from "../components/page-container"
import { Sidebar } from "../components/sidebar"
import { Meta } from "../types"

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

export const Layout: React.FC<{
  children: React.ReactNode
  meta: Meta
}> = ({ children, meta }) => (
  <PageContainer
    frontMatter={{
      description: meta.description,
      title: meta.title,
    }}
    sidebar={<Sidebar routes={getRoutes("/docs/components")} />}
  >
    <div>{children}</div>
  </PageContainer>
)
