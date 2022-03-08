import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const VerticalShadesTwoTone = createIcon({
  path: (
    <>
      <Path opacity={0.3} d="M6 5h2v14H6zm10 0h2v14h-2z" />
      <Path d="M20 19V3H4v16H2v2h20v-2h-2zM8 19H6V5h2v14zm6 0h-4V5h4v14zm4 0h-2V5h2v14z" />
    </>
  ),
  displayName: "VerticalShadesTwoTone",
})
