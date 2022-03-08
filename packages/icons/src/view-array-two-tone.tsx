import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const ViewArrayTwoTone = createIcon({
  path: (
    <>
      <Path opacity={0.3} d="M9 7h6v10H9z" />
      <Path d="M15 7v10H9V7h6zm6-2h-3v14h3V5zm-4 0H7v14h10V5zM6 5H3v14h3V5z" />
    </>
  ),
  displayName: "ViewArrayTwoTone",
})
