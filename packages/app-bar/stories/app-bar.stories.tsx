import { IconButton } from "@md3-ui/button"
import { Text } from "@md3-ui/layout"
import {
  MdAttachment,
  MdCalendarToday,
  MdMenu,
  MdMoreVert,
  MdPerson,
} from "react-icons/md"
import { AppBar, Toolbar } from "../src"

export default {
  title: "Components/Top app bar",
}

export const CenterAligned = () => (
  <AppBar>
    <Toolbar>
      <IconButton
        accessibilityLabel="menu"
        edge="start"
        sx={{ marginRight: 1.5 }}
      >
        <MdMenu />
      </IconButton>
      <Text variant="title-large" sx={{ flexGrow: 1, textAlign: "center" }}>
        Title Large
      </Text>
      <IconButton
        accessibilityLabel="profile"
        edge="end"
        sx={{ marginLeft: 1.5 }}
      >
        <MdPerson />
      </IconButton>
    </Toolbar>
  </AppBar>
)

export const Small = () => (
  <AppBar>
    <Toolbar>
      <IconButton
        accessibilityLabel="menu"
        edge="start"
        sx={{ marginRight: 0.5 }}
      >
        <MdMenu />
      </IconButton>
      <Text variant="title-large" sx={{ flexGrow: 1 }}>
        Title Large
      </Text>
      <IconButton accessibilityLabel="attachment">
        <MdAttachment />
      </IconButton>
      <IconButton accessibilityLabel="calendar">
        <MdCalendarToday />
      </IconButton>
      <IconButton accessibilityLabel="profile" edge="end">
        <MdMoreVert />
      </IconButton>
    </Toolbar>
  </AppBar>
)

export const Medium = () => (
  <AppBar>
    <Toolbar
      sx={{
        alignItems: "flex-start",
        paddingTop: 1,
        paddingBottom: 2,
        minHeight: 112,
      }}
    >
      <IconButton accessibilityLabel="menu" edge="start">
        <MdMenu />
      </IconButton>
      <Text
        variant="headline-small"
        sx={{ alignSelf: "flex-end", marginLeft: -4.5, flexGrow: 1 }}
      >
        Headline Small
      </Text>
      <IconButton accessibilityLabel="attachment">
        <MdAttachment />
      </IconButton>
      <IconButton accessibilityLabel="calendar">
        <MdCalendarToday />
      </IconButton>
      <IconButton accessibilityLabel="profile" edge="end">
        <MdMoreVert />
      </IconButton>
    </Toolbar>
  </AppBar>
)

export const Large = () => (
  <AppBar>
    <Toolbar
      sx={{
        alignItems: "flex-start",
        paddingTop: 1,
        paddingBottom: 2,
        minHeight: 152,
      }}
    >
      <IconButton accessibilityLabel="menu" edge="start">
        <MdMenu />
      </IconButton>
      <Text
        variant="headline-medium"
        sx={{ alignSelf: "flex-end", marginLeft: -4.5, flexGrow: 1 }}
      >
        Headline Medium
      </Text>
      <IconButton accessibilityLabel="attachment">
        <MdAttachment />
      </IconButton>
      <IconButton accessibilityLabel="calendar">
        <MdCalendarToday />
      </IconButton>
      <IconButton accessibilityLabel="profile" edge="end">
        <MdMoreVert />
      </IconButton>
    </Toolbar>
  </AppBar>
)
