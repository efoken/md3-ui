import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const CurtainsClosedTwoTone = createIcon({
  path: (
    <>
      <Path opacity={0.3} d="M6 5h3v14H6zm9 0h3v14h-3z" />
      <Path d="M20 19V3H4v16H2v2h20v-2h-2zM9 19H6V5h3v14zm4 0h-2V5h2v14zm5 0h-3V5h3v14z" />
    </>
  ),
  displayName: "CurtainsClosedTwoTone",
})
