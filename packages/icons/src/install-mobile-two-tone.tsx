import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const InstallMobileTwoTone = createIcon({
  path: (
    <>
      <Path opacity={0.3} d="M7 20h10v1H7zM7 3h7v1H7z" />
      <Path d="M17 18H7V6h7V4H7V3h7V1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-5h-2v2zm0 3H7v-1h10v1z" />
      <Path d="M19 3h-2v7.17l-2.59-2.58L14 8l-1 1 1 1 4 4 3-3 2-2-1.41-1.41-.59.59-2 1.99z" />
    </>
  ),
  displayName: "InstallMobileTwoTone",
})
