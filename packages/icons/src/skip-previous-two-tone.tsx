import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const SkipPreviousTwoTone = createIcon({
  path: (
    <>
      <Path d="M16 14.14V9.86L12.97 12z" opacity={0.3} />
      <Path d="M6 6h2v12H6zm12 12V6l-8.5 6 8.5 6zm-2-3.86L12.97 12 16 9.86v4.28z" />
    </>
  ),
  displayName: "SkipPreviousTwoTone",
})
