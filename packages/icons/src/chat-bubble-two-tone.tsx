import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const ChatBubbleTwoTone = createIcon({
  path: (
    <>
      <Path d="m4 18 2-2h14V4H4z" opacity={0.3} />
      <Path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
    </>
  ),
  displayName: "ChatBubbleTwoTone",
})
