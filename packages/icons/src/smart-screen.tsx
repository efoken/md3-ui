import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const SmartScreen = createIcon({
  path: (
    <>
      <Path d="M21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-3 12H6V7h12v10z" />
      <Path d="M15 11.25h1.5v1.5H15zm-2.5 0H14v1.5h-1.5zm-2.5 0h1.5v1.5H10zm-2.5 0H9v1.5H7.5z" />
    </>
  ),
  displayName: "SmartScreen",
})
