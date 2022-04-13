import { Box } from "@md3-ui/core"
import { useRouter } from "next/router"
import * as React from "react"
import { SidebarContent } from "./sidebar-content"
import { Route } from "./types"

interface SidebarProps {
  routes: Route[]
}

export const Sidebar: React.VFC<SidebarProps> = ({ routes }) => {
  const { pathname } = useRouter()
  const ref = React.useRef<HTMLElement>(null)

  return (
    <Box
      ref={ref}
      as="nav"
      aria-label="Main navigation"
      style={{
        overflowY: "auto",
        overscrollBehavior: "contain",
      }}
      sx={{
        position: "sticky" as any,
        display: { compact: "none", medium: "block" as any },
        flexShrink: 0,
        height: "calc(100vh - 6.5rem)",
        pb: 6,
        pt: 4,
        width: 268,
        top: 13,
      }}
    >
      <SidebarContent routes={routes} pathname={pathname} contentRef={ref} />
    </Box>
  )
}
