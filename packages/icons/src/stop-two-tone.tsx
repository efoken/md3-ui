import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const StopTwoTone = createIcon({
  path: (
    <>
      <Path d="M8 8h8v8H8z" opacity={0.3} />
      <Path d="M6 18h12V6H6v12zM8 8h8v8H8V8z" />
    </>
  ),
  displayName: "StopTwoTone",
})
