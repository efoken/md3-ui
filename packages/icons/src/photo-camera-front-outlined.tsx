import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const PhotoCameraFrontOutlined = createIcon({
  path: (
    <>
      <Path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14H4V7h4.05l1.83-2h4.24l1.83 2H20v12z" />
      <Circle cx={12} cy={11} r={2} />
      <Path d="M14.78 14.58a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 8 16.43V17h8v-.57c0-.81-.48-1.53-1.22-1.85z" />
    </>
  ),
  displayName: "PhotoCameraFrontOutlined",
})
