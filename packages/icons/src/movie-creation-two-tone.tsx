import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const MovieCreationTwoTone = createIcon({
  path: (
    <>
      <Path d="M4 6.47V18h16v-8H5.76z" opacity={0.3} />
      <Path d="m18 4 2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4zm2 14H4V6.47L5.76 10H20v8z" />
    </>
  ),
  displayName: "MovieCreationTwoTone",
})
