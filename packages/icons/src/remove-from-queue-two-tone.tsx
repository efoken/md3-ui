import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const RemoveFromQueueTwoTone = createIcon({
  path: (
    <>
      <Path d="M3 17h18V5H3v12zm5-7h8v2H8v-2z" opacity={0.3} />
      <Path d="M21 3H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm0 14H3V5h18v12zM8 10h8v2H8z" />
    </>
  ),
  displayName: "RemoveFromQueueTwoTone",
})
