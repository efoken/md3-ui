import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const ControlCameraOutlined = createIcon({
  path: (
    <>
      <Path d="M5.54 8.46 2 12l3.54 3.54 1.76-1.77L5.54 12l1.76-1.77zm6.46 10-1.77-1.76-1.77 1.76L12 22l3.54-3.54-1.77-1.76zm6.46-10-1.76 1.77L18.46 12l-1.76 1.77 1.76 1.77L22 12zm-10-2.92 1.77 1.76L12 5.54l1.77 1.76 1.77-1.76L12 2z" />
      <Circle cx={12} cy={12} r={3} />
    </>
  ),
  displayName: "ControlCameraOutlined",
})
