import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const FastForwardTwoTone = createIcon({
  path: (
    <>
      <Path opacity={0.3} d="M15 9.86v4.28L18.03 12zm-9 0v4.28L9.03 12z" />
      <Path d="m4 18 8.5-6L4 6v12zm2-8.14L9.03 12 6 14.14V9.86zM21.5 12 13 6v12l8.5-6zM15 9.86 18.03 12 15 14.14V9.86z" />
    </>
  ),
  displayName: "FastForwardTwoTone",
})
