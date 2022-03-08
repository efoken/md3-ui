import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const ReportOffOutlined = createIcon({
  path: (
    <>
      <Path d="M9.1 5h5.8L19 9.1v5.8l-.22.22 1.42 1.41.8-.8V8.27L15.73 3H8.27l-.8.8 1.41 1.42z" />
      <Circle cx={12} cy={16} r={1} />
      <Path d="M13 9.33V7h-2v.33zM2.41 1.58 1 2.99l3.64 3.64L3 8.27v7.46L8.27 21h7.46l1.64-1.64L21.01 23l1.41-1.41L2.41 1.58zM14.9 19H9.1L5 14.9V9.1l1.05-1.05 9.9 9.9L14.9 19z" />
    </>
  ),
  displayName: "ReportOffOutlined",
})
