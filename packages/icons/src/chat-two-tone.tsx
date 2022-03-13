import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const ChatTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M20 4H4v13.17L5.17 16H20V4zm-6 10H6v-2h8v2zm4-3H6V9h12v2zm0-3H6V6h12v2z"
        opacity={0.3}
      />
      <Path d="M20 18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14zm-16-.83V4h16v12H5.17L4 17.17zM6 12h8v2H6zm0-3h12v2H6zm0-3h12v2H6z" />
    </>
  ),
  displayName: "ChatTwoTone",
})