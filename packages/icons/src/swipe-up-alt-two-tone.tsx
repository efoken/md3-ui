import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const SwipeUpAltTwoTone = createIcon({
  path: (
    <>
      <Circle cx={12} cy={15} opacity={0.3} r={3} />
      <Path d="m13 5.83 1.59 1.59L16 6l-4-4-4 4 1.41 1.41L11 5.83v4.27a5 5 0 1 0 2 0V5.83zM12 18c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
    </>
  ),
  displayName: "SwipeUpAltTwoTone",
})
