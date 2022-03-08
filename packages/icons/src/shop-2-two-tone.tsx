import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const Shop2TwoTone = createIcon({
  path: (
    <>
      <Path d="M7 16h14V7H7v9zm5-8 5.5 3.5L12 15V8z" opacity={0.3} />
      <Path d="M3 9H1v11c0 1.11.89 2 2 2h16v-2H3V9z" />
      <Path d="M18 5V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm9 13H7V7h14v9z" />
      <Path d="M12 8v7l5.5-3.5z" />
    </>
  ),
  displayName: "Shop2TwoTone",
})
