import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const MovieTwoTone = createIcon({
  path: (
    <>
      <Path d="M20 10H5.76L4 6.47V18h16z" opacity={0.3} />
      <Path d="M2.01 6 2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2zM4 6.47 5.76 10H20v8H4V6.47z" />
    </>
  ),
  displayName: "MovieTwoTone",
})
