import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const DoubleArrowTwoTone = createIcon({
  path: (
    <>
      <Path d="M15.5 5H11l5 7-5 7h4.5l5-7z" />
      <Path d="M8.5 5H4l5 7-5 7h4.5l5-7z" />
    </>
  ),
  displayName: "DoubleArrowTwoTone",
})
