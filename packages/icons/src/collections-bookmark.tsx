import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const CollectionsBookmark = createIcon({
  path: (
    <>
      <Path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z" />
      <Path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 10-2.5-1.5L15 12V4h5v8z" />
    </>
  ),
  displayName: "CollectionsBookmark",
})
