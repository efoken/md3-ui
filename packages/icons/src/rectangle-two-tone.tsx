import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const RectangleTwoTone = createIcon({
  path: (
    <>
      <Path d="M4 6h16v12H4z" opacity={0.3} />
      <Path d="M2 4v16h20V4H2zm18 14H4V6h16v12z" />
    </>
  ),
  displayName: "RectangleTwoTone",
})
