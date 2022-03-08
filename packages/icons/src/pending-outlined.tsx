import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const PendingOutlined = createIcon({
  path: (
    <>
      <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
      <Circle cx={7} cy={12} r={1.5} />
      <Circle cx={12} cy={12} r={1.5} />
      <Circle cx={17} cy={12} r={1.5} />
    </>
  ),
  displayName: "PendingOutlined",
})
