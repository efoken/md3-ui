import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const SwitchRightTwoTone = createIcon({
  path: (
    <>
      <Path opacity={0.3} d="M15.5 15.38V8.62L18.88 12l-3.38 3.38" />
      <Path d="M15.5 15.38V8.62L18.88 12l-3.38 3.38M14 19l7-7-7-7v14zm-4 0V5l-7 7 7 7z" />
    </>
  ),
  displayName: "SwitchRightTwoTone",
})
