import { Button } from "@md3-ui/button"
import { Circle, Mail } from "@md3-ui/icons"
import { Box, Divider, Stack } from "@md3-ui/layout"
import { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import { GestureResponderEvent, TouchableWithoutFeedback } from "react-native"
import {
  NavigationDrawer,
  NavigationDrawerItem,
  NavigationDrawerProps,
} from "../src"

export default {
  title: "Components/Navigation drawer",
  component: NavigationDrawer,
} as Meta<NavigationDrawerProps>

export const Modal: StoryObj = {
  render: () => {
    const [state, setState] = React.useState({
      start: false,
      end: false,
    })

    const toggleDrawer =
      (anchor: "start" | "end", open: boolean) =>
      (event?: GestureResponderEvent | React.KeyboardEvent) => {
        if (
          event?.type === "keydown" &&
          ((event as React.KeyboardEvent).key === "Tab" ||
            (event as React.KeyboardEvent).key === "Shift")
        ) {
          return
        }

        setState({ ...state, [anchor]: open })
      }

    const list = (anchor: "start" | "end") => (
      <TouchableWithoutFeedback
        focusable={false}
        onKeyDown={toggleDrawer(anchor, false)}
        onPress={toggleDrawer(anchor, false)}
      >
        <Box accessibilityRole="none">
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <NavigationDrawerItem
              key={text}
              icon={index % 2 === 0 ? <Circle /> : <Mail />}
              label={text}
            />
          ))}
          <Divider sx={{ mx: 2 }} />
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <NavigationDrawerItem
              key={text}
              icon={index % 2 === 0 ? <Circle /> : <Mail />}
              label={text}
            />
          ))}
        </Box>
      </TouchableWithoutFeedback>
    )

    return (
      <Stack direction="row">
        {(["start", "end"] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <Button variant="text" onPress={toggleDrawer(anchor, true)}>
              {anchor}
            </Button>
            <NavigationDrawer
              anchor={anchor}
              open={state[anchor]}
              variant="modal"
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </NavigationDrawer>
          </React.Fragment>
        ))}
      </Stack>
    )
  },
}
