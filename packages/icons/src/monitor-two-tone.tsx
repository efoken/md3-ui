import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const MonitorTwoTone = createIcon({
  path: (
    <>
      <Path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z" />
      <Path opacity={0.3} d="M4 5h16v11H4z" />
    </>
  ),
  displayName: "MonitorTwoTone",
})
