import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const CandlestickChartTwoTone = createIcon({
  path: (
    <>
      <Path d="M9 4H7v2H5v12h2v2h2v-2h2V6H9V4zm0 12H7V8h2v8z" />
      <Path opacity={0.3} d="M7 8h2v8H7zm8 2h2v3h-2z" />
      <Path d="M19 8h-2V4h-2v4h-2v7h2v5h2v-5h2V8zm-2 5h-2v-3h2v3z" />
    </>
  ),
  displayName: "CandlestickChartTwoTone",
})
