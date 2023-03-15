import { Box, Text } from "@md3-ui/core"
import { useRouter } from "next/router"
import * as React from "react"
import { View } from "react-native"
import { Meta } from "../types"
import { SEO } from "./seo"

interface PageContainerProps {
  children?: React.ReactNode
  frontMatter?: Pick<Meta, "description" | "title">
  sidebar?: React.ReactElement
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  frontMatter,
  sidebar,
}) => {
  const router = useRouter()

  const [menuOpen, setMenuOpen] = React.useState(true)

  React.useEffect(() => {
    const handleRouteChange = () => {
      document.querySelector("h1")?.focus()
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  const handleMenuClose = () => {
    setMenuOpen(false)
  }

  if (frontMatter == null) {
    return null
  }

  return (
    <>
      <SEO description={frontMatter.description} title={frontMatter.title} />
      <Box
        id="app"
        sx={{ maxWidth: { compact: 760, expanded: 1400 }, mx: "auto" }}
      >
        <View>
          <Box sx={{ flexDirection: "row", flexWrap: "wrap" }}>
            {sidebar &&
              React.cloneElement(sidebar, {
                open: menuOpen,
                onMenuClose: handleMenuClose,
              })}
            <Box as="main" sx={{ flex: 1 }}>
              <Box
                sx={{ mt: 12, px: { compact: 4, expanded: 20 }, width: "100%" }}
              >
                <article className="markdown">
                  <Text as="h1" variant="displayLarge" sx={{ mb: 8, mt: 0 }}>
                    {frontMatter.title}
                  </Text>
                  <Text variant="headlineLarge" sx={{ mt: 4 }}>
                    {frontMatter.description}
                  </Text>
                  {children}
                </article>
              </Box>
            </Box>
          </Box>
        </View>
      </Box>
    </>
  )
}
