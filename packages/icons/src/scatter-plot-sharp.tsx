import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle } from "react-native-svg"

export const ScatterPlotSharp = createIcon({
  path: (
    <>
      <Circle cx={7} cy={14} r={3} />
      <Circle cx={11} cy={6} r={3} />
      <Circle cx={16.6} cy={17.6} r={3} />
    </>
  ),
  displayName: "ScatterPlotSharp",
})
