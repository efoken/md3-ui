import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const PlayArrowTwoTone = createIcon({
  path: (
    <>
      <Path d="M10 8.64v6.72L15.27 12z" opacity={0.3} />
      <Path d="m8 19 11-7L8 5v14zm2-10.36L15.27 12 10 15.36V8.64z" />
    </>
  ),
  displayName: "PlayArrowTwoTone",
})
