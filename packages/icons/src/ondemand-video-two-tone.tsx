import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const OndemandVideoTwoTone = createIcon({
  path: (
    <>
      <Path d="M3 17h18V5H3v12zM9 7l7 4-7 4V7z" opacity={0.3} />
      <Path d="M9 7v8l7-4zm12-4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z" />
    </>
  ),
  displayName: "OndemandVideoTwoTone",
})