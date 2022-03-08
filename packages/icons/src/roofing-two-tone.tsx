import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const RoofingTwoTone = createIcon({
  path: (
    <>
      <Path opacity={0.3} d="M11 16h2v2h-2z" />
      <Path d="M13 18h-2v-2h2v2zm2-4H9v6h6v-6zm4-4.7V4h-3v2.6L12 3 2 12h3l7-6.31L19 12h3l-3-2.7z" />
    </>
  ),
  displayName: "RoofingTwoTone",
})
