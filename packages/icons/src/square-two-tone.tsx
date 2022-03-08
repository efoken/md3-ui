import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const SquareTwoTone = createIcon({
  path: (
    <>
      <Path d="M5 5h14v14H5z" opacity={0.3} />
      <Path d="M3 3v18h18V3H3zm16 16H5V5h14v14z" />
    </>
  ),
  displayName: "SquareTwoTone",
})
