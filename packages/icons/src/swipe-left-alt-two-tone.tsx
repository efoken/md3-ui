import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const SwipeLeftAltTwoTone = createIcon({
  path: (
    <>
      <Circle cx={15} cy={12} opacity={0.3} r={3} />
      <Path d="M10.1 13a5 5 0 1 0 0-2H5.83l1.59-1.59L6 8l-4 4 4 4 1.41-1.41L5.83 13h4.27zm4.9 2c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
    </>
  ),
  displayName: "SwipeLeftAltTwoTone",
})
