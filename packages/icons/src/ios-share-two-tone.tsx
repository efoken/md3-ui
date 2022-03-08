import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const IosShareTwoTone = createIcon({
  path: (
    <>
      <Path d="M18 8h-3v2h3v11H6V10h3V8H6c-1.11 0-2 .89-2 2v11a2 2 0 0 0 2 2h12c1.1 0 2-.9 2-2V10a2 2 0 0 0-2-2z" />
      <Path d="M11 16h2V5h3l-4-4-4 4h3z" />
    </>
  ),
  displayName: "IosShareTwoTone",
})
