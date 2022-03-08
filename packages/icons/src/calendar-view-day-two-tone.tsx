import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const CalendarViewDayTwoTone = createIcon({
  path: (
    <>
      <Path d="M3 17h18v2H3zm16-5v1H5v-1h14m2-2H3v5h18v-5zM3 6h18v2H3z" />
      <Path d="M5 12h14v1H5z" opacity={0.3} />
    </>
  ),
  displayName: "CalendarViewDayTwoTone",
})
