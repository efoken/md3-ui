import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const FiberSmartRecordRounded = createIcon({
  path: (
    <>
      <Circle cx={9} cy={12} r={8} />
      <Path d="M17 5.55v.18c0 .37.23.69.57.85C19.6 7.54 21 9.61 21 12s-1.4 4.46-3.43 5.42c-.34.16-.57.47-.57.84v.18c0 .68.71 1.11 1.32.82C21.08 18.01 23 15.23 23 12s-1.92-6.01-4.68-7.27c-.61-.28-1.32.14-1.32.82z" />
    </>
  ),
  displayName: "FiberSmartRecordRounded",
})
