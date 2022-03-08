import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const VerticalShadesClosedTwoTone = createIcon({
  path: (
    <>
      <Path
        opacity={0.2}
        d="M9.5 5H11v14H9.5zM6 5h1.5v14H6zm7 0h1.5v14H13zm3.5 0H18v14h-1.5z"
      />
      <Path d="M20 19V3H4v16H2v2h20v-2h-2zM7.5 19H6V5h1.5v14zm3.5 0H9.5V5H11v14zm3.5 0H13V5h1.5v14zm3.5 0h-1.5V5H18v14z" />
    </>
  ),
  displayName: "VerticalShadesClosedTwoTone",
})
