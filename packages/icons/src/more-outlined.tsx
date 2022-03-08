import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const MoreOutlined = createIcon({
  path: (
    <>
      <Path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.97.89 1.66.89H22c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14z" />
      <Circle cx={9} cy={12} r={1.5} />
      <Circle cx={14} cy={12} r={1.5} />
      <Circle cx={19} cy={12} r={1.5} />
    </>
  ),
  displayName: "MoreOutlined",
})
