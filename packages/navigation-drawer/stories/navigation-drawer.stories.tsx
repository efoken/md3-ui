import { TextButton } from "@md3-ui/button"
import { Divider } from "@md3-ui/divider"
import { Circle, Mail } from "@md3-ui/icons"
import { Stack } from "@md3-ui/layout"
import { Box } from "@md3-ui/system"
import { Meta, StoryObj } from "@storybook/react"
import { Fragment, useState } from "react"
import { GestureResponderEvent, Pressable as RNPressable } from "react-native"
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
    const [state, setState] = useState({
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
      <Box
        as={RNPressable}
        role="presentation"
        tabIndex={-1}
        onKeyDown={toggleDrawer(anchor, false)}
        onPress={toggleDrawer(anchor, false)}
      >
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <NavigationDrawerItem
            key={text}
            icon={index % 2 === 0 ? <Circle /> : <Mail />}
            label={text}
          />
        ))}
        <Divider sx={{ mx: 4 }} />
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <NavigationDrawerItem
            key={text}
            icon={index % 2 === 0 ? <Circle /> : <Mail />}
            label={text}
          />
        ))}
      </Box>
    )

    return (
      <Stack direction="row">
        {(["start", "end"] as const).map((anchor) => (
          <Fragment key={anchor}>
            <TextButton onPress={toggleDrawer(anchor, true)}>
              {anchor}
            </TextButton>
            <NavigationDrawer
              anchor={anchor}
              open={state[anchor]}
              variant="modal"
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </NavigationDrawer>
          </Fragment>
        ))}
      </Stack>
    )
  },
}
