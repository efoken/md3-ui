import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const VerticalSplitTwoTone = createIcon({
  path: (
    <>
      <Path d="M15 7h4v10h-4z" opacity={0.3} />
      <Path d="M3 13h8v2H3zm0 4h8v2H3zm0-8h8v2H3zm0-4h8v2H3zm10 0v14h8V5h-8zm6 12h-4V7h4v10z" />
    </>
  ),
  displayName: "VerticalSplitTwoTone",
})
