import { Box } from "@md3-ui/core"
import { useRouter } from "next/router"
import { useRef } from "react"
import { useWindowDimensions } from "react-native"
import { SidebarContent } from "./sidebar-content"
import { Route } from "./types"

interface SidebarProps {
  onMenuClose?: () => void
  open?: boolean
  routes: Route[]
}

export const Sidebar: React.FC<SidebarProps> = ({
  onMenuClose,
  open = false,
  routes,
}) => {
  const { pathname } = useRouter()
  const contentRef = useRef<HTMLElement>(null)

  const expanded = useWindowDimensions().width >= 0

  return (
    <Box
      id="navigation"
      sx={{
        bgColor: "white",
        borderColor: "surfaceVariant",
        borderRightWidth: 1,
        bottom: 0,
        height: "100vh" as any,
        left: { compact: "auto", expanded: 0 },
        position: expanded ? ("sticky" as any) : ("fixed" as any),
        right: { compact: "100%", expanded: "auto" },
        top: 0,
        width: 288,
        zIndex: 10,
      }}
      style={{
        opacity: expanded ? 1 : 0,
      }}
    >
      <Box
        as="nav"
        sx={{ height: "100%", p: 6, pt: 12 }}
        style={{ overflowX: "hidden", overflowY: "auto" }}
      >
        <SidebarContent
          routes={routes}
          pathname={pathname}
          contentRef={contentRef}
        />
      </Box>
    </Box>
  )
}
