import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const PunchClockRounded = createIcon({
  path: (
    <>
      <Path d="M19 6h-1V3c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM8 3h8v3H8V3zm4 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
      <Path d="M12.5 13.79V12c0-.28-.22-.5-.5-.5s-.5.22-.5.5v2c0 .13.05.26.15.35l1.14 1.14c.2.2.51.2.71 0 .2-.2.2-.51 0-.71l-1-.99z" />
    </>
  ),
  displayName: "PunchClockRounded",
})
