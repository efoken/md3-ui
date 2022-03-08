import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const VideoLabelTwoTone = createIcon({
  path: (
    <>
      <Path d="M3 5h18v11H3z" opacity={0.3} />
      <Path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H3V5h18v11z" />
    </>
  ),
  displayName: "VideoLabelTwoTone",
})
