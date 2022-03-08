import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const AllOutTwoTone = createIcon({
  path: (
    <>
      <Circle cx={12} cy={12} opacity={0.3} r={5} />
      <Path d="M4 4v4l4-4zm12 0 4 4V4zm4 16v-4l-4 4zM4 20h4l-4-4zm15-8c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7 7-3.13 7-7zm-7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
    </>
  ),
  displayName: "AllOutTwoTone",
})
