import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const KeyboardDoubleArrowRight = createIcon({
  path: (
    <>
      <Path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z" />
      <Path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z" />
    </>
  ),
  displayName: "KeyboardDoubleArrowRight",
})
