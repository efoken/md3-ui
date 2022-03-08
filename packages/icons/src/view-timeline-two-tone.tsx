import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const ViewTimelineTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M5 19h14V5H5v14zm7-12h6v2h-6V7zm-3 4h6v2H9v-2zm-3 4h6v2H6v-2z"
        opacity={0.3}
      />
      <Path d="M6 15h6v2H6zm6-8h6v2h-6zm-3 4h6v2H9z" />
      <Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
    </>
  ),
  displayName: "ViewTimelineTwoTone",
})
