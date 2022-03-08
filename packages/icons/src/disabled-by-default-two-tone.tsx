import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const DisabledByDefaultTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M5 5v14h14V5H5zm12 10.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
        opacity={0.3}
      />
      <Path d="M19 19H5V5h14v14zM3 3v18h18V3H3zm14 12.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
    </>
  ),
  displayName: "DisabledByDefaultTwoTone",
})
