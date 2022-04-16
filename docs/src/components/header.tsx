import { AppBar, Button, IconButton, Stack, Text, Toolbar } from "@md3-ui/core"
import { Github, Nightlight } from "@md3-ui/icons"
import NextLink from "next/link"
import * as React from "react"

export const Header: React.VFC = () => (
  <AppBar>
    <Toolbar>
      <Text variant="title-large" sx={{ mr: 2 }}>
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
