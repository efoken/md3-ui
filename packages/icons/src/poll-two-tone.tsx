import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const PollTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M5 19h14V5H5v14zm10-6h2v4h-2v-4zm-4-6h2v10h-2V7zm-4 3h2v7H7v-7z"
        opacity={0.3}
      />
      <Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z" />
    </>
  ),
  displayName: "PollTwoTone",
})
