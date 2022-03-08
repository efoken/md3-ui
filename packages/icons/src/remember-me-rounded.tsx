import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const RememberMeRounded = createIcon({
  path: (
    <>
      <Path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 14.21c-1.5-.77-3.2-1.21-5-1.21s-3.5.44-5 1.21V6h10v9.21z" />
      <Circle cx={12} cy={10} r={3} />
    </>
  ),
  displayName: "RememberMeRounded",
})
