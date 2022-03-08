import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle } from "react-native-svg"

export const BubbleChart = createIcon({
  path: (
    <>
      <Circle cx={7.2} cy={14.4} r={3.2} />
      <Circle cx={14.8} cy={18} r={2} />
      <Circle cx={15.2} cy={8.8} r={4.8} />
    </>
  ),
  displayName: "BubbleChart",
})
