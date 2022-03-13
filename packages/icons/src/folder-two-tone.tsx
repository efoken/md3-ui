import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const FolderTwoTone = createIcon({
  path: (
    <>
      <Path d="m11.17 8-.58-.59L9.17 6H4v12h16V8h-8z" opacity={0.3} />
      <Path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l1.41 1.41.59.59H20v10z" />
    </>
  ),
  displayName: "FolderTwoTone",
})