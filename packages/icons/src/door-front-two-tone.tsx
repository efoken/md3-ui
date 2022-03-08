import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const DoorFrontTwoTone = createIcon({
  path: (
    <>
      <Path d="M7 19h10V5H7v14zm6-8h2v2h-2v-2z" opacity={0.3} />
      <Path d="M13 11h2v2h-2z" />
      <Path d="M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H3v2h18v-2h-2zm-2 0H7V5h10v14z" />
    </>
  ),
  displayName: "DoorFrontTwoTone",
})
