import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const CalendarTodayTwoTone = createIcon({
  path: (
    <>
      <Path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v3H4V5h16zM4 21V10h16v11H4z" />
      <Path d="M4 5.01h16V8H4z" opacity={0.3} />
    </>
  ),
  displayName: "CalendarTodayTwoTone",
})
