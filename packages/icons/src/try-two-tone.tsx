import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const TryTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M4 17.17 5.17 16H20V4H4v13.17zm6.43-8.74L12 5l1.57 3.43L17 10l-3.43 1.57L12 15l-1.57-3.43L7 10l3.43-1.57z"
        opacity={0.3}
      />
      <Path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" />
      <Path d="m12 15 1.57-3.43L17 10l-3.43-1.57L12 5l-1.57 3.43L7 10l3.43 1.57z" />
    </>
  ),
  displayName: "TryTwoTone",
})
