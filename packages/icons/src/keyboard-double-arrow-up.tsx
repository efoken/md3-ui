import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const KeyboardDoubleArrowUp = createIcon({
  path: (
    <>
      <Path d="M6 17.59 7.41 19 12 14.42 16.59 19 18 17.59l-6-6z" />
      <Path d="m6 11 1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z" />
    </>
  ),
  displayName: "KeyboardDoubleArrowUp",
})
