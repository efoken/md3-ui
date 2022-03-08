import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const HorizontalSplitTwoTone = createIcon({
  path: (
    <>
      <Path d="M19 15v2H5v-2h14m2-10H3v2h18V5zm0 4H3v2h18V9zm0 4H3v6h18v-6z" />
      <Path d="M5 15h14v2H5z" opacity={0.3} />
    </>
  ),
  displayName: "HorizontalSplitTwoTone",
})
