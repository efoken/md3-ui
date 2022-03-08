import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const ManOutlined = createIcon({
  path: (
    <>
      <Path d="M14 7h-4c-1.1 0-2 .9-2 2v6h2v7h4v-7h2V9c0-1.1-.9-2-2-2z" />
      <Circle cx={12} cy={4} r={2} />
    </>
  ),
  displayName: "ManOutlined",
})
