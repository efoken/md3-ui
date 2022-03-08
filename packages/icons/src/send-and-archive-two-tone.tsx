import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const SendAndArchiveTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M5 7.01v3.49l6 1.5-6 1.5v3.49l5.39-2.27a6.99 6.99 0 0 1 3.48-3.97L5 7.01z"
        opacity={0.3}
      />
      <Path d="m11 12-6-1.5V7.01l8.87 3.73c.94-.47 2-.75 3.13-.75.1 0 .19.01.28.01L3 4v16l7-2.95V17c0-.8.14-1.56.39-2.28L5 16.99V13.5l6-1.5z" />
      <Path d="M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8-3-3h2.5v-3h1v3H20l-3 3z" />
    </>
  ),
  displayName: "SendAndArchiveTwoTone",
})
