import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const VideoLibraryTwoTone = createIcon({
  path: (
    <>
      <Path d="M8 16h12V4H8v12zm4-10.5 6 4.5-6 4.5v-9z" opacity={0.3} />
      <Path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM12 5.5v9l6-4.5z" />
    </>
  ),
  displayName: "VideoLibraryTwoTone",
})
