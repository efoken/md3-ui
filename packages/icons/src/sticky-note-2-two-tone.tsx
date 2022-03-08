import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const StickyNote2TwoTone = createIcon({
  path: (
    <>
      <Path d="M5 5v14h9v-5h5V5H5zm7 9H7v-2h5v2zm5-4H7V8h10v2z" opacity={0.3} />
      <Path d="M19 5v9h-5v5H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10l6-6V5c0-1.1-.9-2-2-2zm-7 11H7v-2h5v2zm5-4H7V8h10v2z" />
    </>
  ),
  displayName: "StickyNote2TwoTone",
})
