import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const TvTwoTone = createIcon({
  path: (
    <>
      <Path d="M3 5h18v12H3z" opacity={0.3} />
      <Path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z" />
    </>
  ),
  displayName: "TvTwoTone",
})