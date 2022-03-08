import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const LooksOneTwoTone = createIcon({
  path: (
    <>
      <Path d="M19 5H5v14h14V5zm-5 12h-2V9h-2V7h4v10z" opacity={0.3} />
      <Path d="M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2zM5 5h14v14H5V5zm5 4h2v8h2V7h-4z" />
    </>
  ),
  displayName: "LooksOneTwoTone",
})
