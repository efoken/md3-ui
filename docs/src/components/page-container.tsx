import { Box, Text } from "@md3-ui/core"
import { Doc } from "contentlayer/generated"
import { useRouter } from "next/router"
import * as React from "react"
import { Header } from "./header"
import { SEO } from "./seo"

interface PageContainerProps {
  children?: React.ReactNode
  frontMatter?: Pick<Doc, "description" | "title">
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

  const handleMenuToggle = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen)
  }

  const handleMenuClose = () => {
    setMenuOpen(false)
  }

  if (frontMatter == null) {
    return null
  }

  return (
    <>
      <SEO description={frontMatter.description} title={frontMatter.title} />
      <Header menuOpen={menuOpen} onMenuToggle={handleMenuToggle} />
      <Box sx={{ flexDirection: "row", pt: 8 }}>
        {sidebar &&
          React.cloneElement(sidebar, {
            open: menuOpen,
            onMenuClose: handleMenuClose,
          })}
        <Box
          sx={{
            ml: { compact: 0, expanded: menuOpen ? "280px" : 0 },
            transition: "margin cubic-bezier(0, 0, 0.2, 1) 252ms",
            width: { compact: "100%", expanded: "calc(100% - 280px)" },
          }}
        >
          <Box sx={{ maxWidth: 1280, mx: "auto", my: 3, width: "100%" }}>
            <Box as="main" aria-label="Main content">
              <Box
                as="header"
                sx={{
                  bgColor: "secondary-container",
                  borderRadius: 60,
                  mx: 5,
                  px: 5,
                }}
              >
                <Box
                  sx={{
                    justifyContent: "center",
                    maxWidth: 1024,
                    minHeight: 360,
                    mx: "auto",
                  }}
                >
                  <Box sx={{ py: 5, width: "50%" }}>
                    <Text as="h1" variant="display-large">
                      {frontMatter.title}
                    </Text>
                    <Text variant="headline-large" sx={{ mt: 2 }}>
                      {frontMatter.description}
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ mt: 8, mx: 5 }}>{children}</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
