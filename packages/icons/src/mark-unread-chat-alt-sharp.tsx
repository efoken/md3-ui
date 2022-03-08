import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const MarkUnreadChatAltSharp = createIcon({
  path: (
    <>
      <Circle cx={19} cy={3} r={3} />
      <Path d="M6 8V6h9.03a4.906 4.906 0 0 1-.92-4H2.01L2 22l4-4h16V6.97C21.16 7.61 20.13 8 19 8H6zm8 6H6v-2h8v2zm4-3H6V9h12v2z" />
    </>
  ),
  displayName: "MarkUnreadChatAltSharp",
})
