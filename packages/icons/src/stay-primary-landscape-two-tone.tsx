import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const StayPrimaryLandscapeTwoTone = createIcon({
  path: (
    <>
      <Path d="M5 7h14v10H5z" opacity={0.3} />
      <Path d="M21 5H3c-1.1 0-1.99.9-1.99 2L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-2 12H5V7h14v10z" />
    </>
  ),
  displayName: "StayPrimaryLandscapeTwoTone",
})
