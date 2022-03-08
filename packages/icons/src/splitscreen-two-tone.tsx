import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const SplitscreenTwoTone = createIcon({
  path: (
    <>
      <Path opacity={0.3} d="M6 4h12v5H6zm0 11h12v5H6z" />
      <Path d="M18 2H6c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 7H6V4h12v5zm0 4H6c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm0 7H6v-5h12v5z" />
    </>
  ),
  displayName: "SplitscreenTwoTone",
})
