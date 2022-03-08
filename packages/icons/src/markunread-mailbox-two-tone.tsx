import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const MarkunreadMailboxTwoTone = createIcon({
  path: (
    <>
      <Path d="M10 12H6V8H4v12h16V8H10z" opacity={0.3} />
      <Path d="M20 6H10v2h10v12H4V8h2v4h2V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z" />
    </>
  ),
  displayName: "MarkunreadMailboxTwoTone",
})
