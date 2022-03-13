import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const FeaturedVideoTwoTone = createIcon({
  path: (
    <>
      <Path d="M3 19h18V5H3v14zM4 6h9v7H4V6z" opacity={0.3} />
      <Path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM4 6h9v7H4z" />
    </>
  ),
  displayName: "FeaturedVideoTwoTone",
})