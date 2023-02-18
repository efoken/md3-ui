import { AppBar, Button, IconButton, Stack, Text, Toolbar } from "@md3-ui/core"
import { Github, Menu, MenuOpen, Nightlight } from "@md3-ui/icons"
import NextLink from "next/link"
import * as React from "react"

interface HeaderProps {
  menuOpen: boolean
  onMenuToggle?: () => void
}

export const Header: React.FC<HeaderProps> = ({ menuOpen, onMenuToggle }) => (
  <AppBar position="fixed" sx={{ zIndex: 1500 }}>
    <Toolbar>
      <IconButton onPress={onMenuToggle}>
        {menuOpen ? <MenuOpen /> : <Menu />}
      </IconButton>
      <Text variant="title-large" sx={{ mr: 4, ml: 1 }}>
        MD3-UI
      </Text>
      <Stack direction="row" sx={{ flexGrow: 1 }}>
        <Button variant="text">Getting Started</Button>
        <NextLink passHref href="/docs/styles/typography">
          <Button variant="text">Styles</Button>
        </NextLink>
        <Button variant="text">Components</Button>
      </Stack>
      <IconButton>
        <Github />
      </IconButton>
      <IconButton>
        <Nightlight />
      </IconButton>
    </Toolbar>
  </AppBar>
)
