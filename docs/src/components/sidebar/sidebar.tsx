import { NavigationDrawer } from "@md3-ui/core"
import { useRouter } from "next/router"
import * as React from "react"
import { useWindowDimensions } from "react-native"
import { SidebarContent } from "./sidebar-content"
import { Route } from "./types"

interface SidebarProps {
  onMenuClose?: () => void
  open?: boolean
  routes: Route[]
}

export const Sidebar: React.VFC<SidebarProps> = ({
  onMenuClose,
  open = false,
  routes,
}) => {
  const { pathname } = useRouter()
  const contentRef = React.useRef<HTMLElement>(null)

  const expanded = useWindowDimensions().width >= 840

  return (
    <NavigationDrawer
      ref={contentRef as any}
      accessibilityLabel="Main navigation"
      accessibilityRole={"navigation" as any}
      hideScrim={expanded}
      open={open}
      variant={expanded ? "dismissible" : "modal"}
      styles={{
        surface: expanded
          ? {
              height: "calc(100vh - 64px)",
              top: 64,
              width: 280,
            }
          : {
              borderRadius: 16,
              bottom: 8,
              height: "calc(100% - 80px)",
              start: 8,
              top: 72,
              width: 280,
            },
      }}
      onClose={onMenuClose}
    >
      <SidebarContent
        routes={routes}
        pathname={pathname}
        contentRef={contentRef}
      />
    </NavigationDrawer>
  )
}
