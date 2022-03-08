import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const VideoStableTwoTone = createIcon({
  path: (
    <>
      <Path
        opacity={0.3}
        d="m7.063 13.319 1.32-4.926 8.558 2.293-1.32 4.926z"
      />
      <Path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 18V6h2.95l-2.33 8.73L16.82 18H4zm11.62-2.39-8.55-2.29L8.38 8.4l8.56 2.29-1.32 4.92zM20 18h-2.95l2.34-8.73L7.18 6H20v12z" />
    </>
  ),
  displayName: "VideoStableTwoTone",
})
