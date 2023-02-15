import { IconButton } from "@md3-ui/button"
import {
  Attachment,
  CalendarToday,
  Menu,
  MoreVert,
  Person,
} from "@md3-ui/icons"
import { Text } from "@md3-ui/layout"
import { Meta, StoryObj } from "@storybook/react"
import { AppBar, AppBarProps, Toolbar } from "../src"

export default {
  title: "Components/Top app bar",
  component: AppBar,
  // subcomponents: { Toolbar },
} as Meta<AppBarProps>

export const CenterAligned: StoryObj<AppBarProps> = {
  render: (args) => (
    <AppBar {...args}>
      <Toolbar>
        <IconButton
          aria-label="menu"
          edge="start"
          size="large"
          sx={{ me: 1.5 }}
        >
          <Menu />
        </IconButton>
        <Text variant="title-large" sx={{ flexGrow: 1, textAlign: "center" }}>
          Title Large
        </Text>
        <IconButton
          aria-label="profile"
          edge="end"
          size="large"
          sx={{ ms: 1.5 }}
        >
          <Person />
        </IconButton>
      </Toolbar>
    </AppBar>
  ),
}

export const Small: StoryObj<AppBarProps> = {
  render: (args) => (
    <AppBar {...args}>
      <Toolbar>
        <IconButton
          aria-label="menu"
          edge="start"
          size="large"
          sx={{ me: 0.5 }}
        >
          <Menu />
        </IconButton>
        <Text variant="title-large" sx={{ flexGrow: 1 }}>
          Title Large
        </Text>
        <IconButton aria-label="attachment" size="large">
          <Attachment />
        </IconButton>
        <IconButton aria-label="calendar" size="large">
          <CalendarToday />
        </IconButton>
        <IconButton aria-label="profile" edge="end" size="large">
          <MoreVert />
        </IconButton>
      </Toolbar>
    </AppBar>
  ),
}

export const Medium: StoryObj<AppBarProps> = {
  render: (args) => (
    <AppBar {...args}>
      <Toolbar
        sx={{
          alignItems: "flex-start",
          pt: 1,
          pb: 2,
          minHeight: 112,
        }}
      >
        <IconButton aria-label="menu" edge="start" size="large">
          <Menu />
        </IconButton>
        <Text
          variant="headline-small"
          sx={{ alignSelf: "flex-end", ms: -4.5, flexGrow: 1 }}
        >
          Headline Small
        </Text>
        <IconButton aria-label="attachment" size="large">
          <Attachment />
        </IconButton>
        <IconButton aria-label="calendar" size="large">
          <CalendarToday />
        </IconButton>
        <IconButton aria-label="profile" edge="end" size="large">
          <MoreVert />
        </IconButton>
      </Toolbar>
    </AppBar>
  ),
}

export const Large: StoryObj<AppBarProps> = {
  render: (args) => (
    <AppBar {...args}>
      <Toolbar
        sx={{
          alignItems: "flex-start",
          pt: 1,
          pb: 2,
          minHeight: 152,
        }}
      >
        <IconButton aria-label="menu" edge="start" size="large">
          <Menu />
        </IconButton>
        <Text
          variant="headline-medium"
          sx={{ alignSelf: "flex-end", ms: -4.5, flexGrow: 1 }}
        >
          Headline Medium
        </Text>
        <IconButton aria-label="attachment" size="large">
          <Attachment />
        </IconButton>
        <IconButton aria-label="calendar" size="large">
          <CalendarToday />
        </IconButton>
        <IconButton aria-label="profile" edge="end" size="large">
          <MoreVert />
        </IconButton>
      </Toolbar>
    </AppBar>
  ),
}
