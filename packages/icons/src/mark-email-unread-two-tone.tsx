import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const MarkEmailUnreadTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M4 6h10.1c.22 1.07.79 2 1.57 2.71L12 11 4 6zm0 2v10h16V9.9a4.842 4.842 0 0 1-2.7-.22L12 13 4 8z"
        opacity={0.3}
      />
      <Path d="M20 9.9c.74-.15 1.42-.48 2-.92V18c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10.1c-.06.32-.1.66-.1 1s.04.68.1 1H4l8 5 3.67-2.29c.47.43 1.02.76 1.63.98L12 13 4 8v10h16V9.9zM16 5c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z" />
    </>
  ),
  displayName: "MarkEmailUnreadTwoTone",
})
