import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const PriorityHighOutlined = createIcon({
  path: (
    <>
      <Circle cx={12} cy={19} r={2} />
      <Path d="M10 3h4v12h-4z" />
    </>
  ),
  displayName: "PriorityHighOutlined",
})
