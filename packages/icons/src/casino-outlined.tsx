import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const CasinoOutlined = createIcon({
  path: (
    <>
      <Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
      <Circle cx={7.5} cy={16.5} r={1.5} />
      <Circle cx={7.5} cy={7.5} r={1.5} />
      <Circle cx={12} cy={12} r={1.5} />
      <Circle cx={16.5} cy={16.5} r={1.5} />
      <Circle cx={16.5} cy={7.5} r={1.5} />
    </>
  ),
  displayName: "CasinoOutlined",
})
