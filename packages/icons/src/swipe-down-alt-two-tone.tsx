import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const SwipeDownAltTwoTone = createIcon({
  path: (
    <>
      <Circle cx={12} cy={9} opacity={0.3} r={3} />
      <Path d="M13 13.9a5 5 0 1 0-2 0v4.27l-1.59-1.59L8 18l4 4 4-4-1.41-1.41L13 18.17V13.9zM15 9c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z" />
    </>
  ),
  displayName: "SwipeDownAltTwoTone",
})
