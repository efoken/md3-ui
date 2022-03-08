import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const InstallDesktopTwoTone = createIcon({
  path: (
    <>
      <Path
        opacity={0.3}
        d="M14.83 9 16 10.17zM4 17h16v-3.17l-3 3L9.17 9 13 5.17V5H4z"
      />
      <Path d="M20 17H4V5h9V3H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2v-5.17l-2 2V17z" />
      <Path d="M18 10.17V3h-2v7.17l-2.59-2.58L12 9l5 5 5-5-1.41-1.41z" />
    </>
  ),
  displayName: "InstallDesktopTwoTone",
})
