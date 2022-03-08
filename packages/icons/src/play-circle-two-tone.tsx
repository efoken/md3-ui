import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const PlayCircleTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zM9.5 16.5v-9l7 4.5-7 4.5z"
        opacity={0.3}
      />
      <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      <Path d="m9.5 16.5 7-4.5-7-4.5z" />
    </>
  ),
  displayName: "PlayCircleTwoTone",
})
