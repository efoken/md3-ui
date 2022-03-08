import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const InstallDesktopSharp = createIcon({
  path: (
    <>
      <Path d="M20 17H4V5h8V3H2v16h6v2h8v-2h6v-5h-2z" />
      <Path d="m17 14 5-5-1.41-1.41L18 10.17V3h-2v7.17l-2.59-2.58L12 9z" />
    </>
  ),
  displayName: "InstallDesktopSharp",
})
