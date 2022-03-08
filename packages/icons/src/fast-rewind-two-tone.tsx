import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const FastRewindTwoTone = createIcon({
  path: (
    <>
      <Path d="M9 14.14V9.86L5.97 12zm9 0V9.86L14.97 12z" opacity={0.3} />
      <Path d="m11 6-8.5 6 8.5 6V6zm-2 8.14L5.97 12 9 9.86v4.28zM20 6l-8.5 6 8.5 6V6zm-2 8.14L14.97 12 18 9.86v4.28z" />
    </>
  ),
  displayName: "FastRewindTwoTone",
})
