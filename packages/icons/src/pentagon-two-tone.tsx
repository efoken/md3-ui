import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const PentagonTwoTone = createIcon({
  path: (
    <>
      <Path opacity={0.3} d="M19.63 9.78 16.56 19H7.44L4.37 9.78 12 4.44z" />
      <Path d="M19.63 9.78 16.56 19H7.44L4.37 9.78 12 4.44l7.63 5.34zM2 9l4 12h12l4-12-10-7L2 9z" />
    </>
  ),
  displayName: "PentagonTwoTone",
})
