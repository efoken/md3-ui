import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const Inventory2TwoTone = createIcon({
  path: (
    <>
      <Path opacity={0.3} d="M4 7h16V3.98L4 4zm1 13h14V9H5v11zm4-8h6v2H9v-2z" />
      <Path d="M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2zm-1 18H5V9h14v11zm1-13H4V4l16-.02V7z" />
      <Path d="M9 12h6v2H9z" />
    </>
  ),
  displayName: "Inventory2TwoTone",
})
