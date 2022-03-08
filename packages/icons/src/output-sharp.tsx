import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const OutputSharp = createIcon({
  path: (
    <>
      <Path d="m17 17 5-5-5-5-1.41 1.41L18.17 11H9v2h9.17l-2.58 2.59z" />
      <Path d="M19 19H5V5h14v2h2V3H3v18h18v-4h-2z" />
    </>
  ),
  displayName: "OutputSharp",
})
