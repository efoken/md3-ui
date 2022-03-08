import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const PriorityHighRounded = createIcon({
  path: (
    <>
      <Circle cx={12} cy={19} r={2} />
      <Path d="M12 3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2z" />
    </>
  ),
  displayName: "PriorityHighRounded",
})
