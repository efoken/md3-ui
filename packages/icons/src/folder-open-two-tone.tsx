import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const FolderOpenTwoTone = createIcon({
  path: (
    <>
      <Path d="M4 8h16v10H4z" opacity={0.3} />
      <Path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z" />
    </>
  ),
  displayName: "FolderOpenTwoTone",
})
