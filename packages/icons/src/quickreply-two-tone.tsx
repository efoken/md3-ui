import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const QuickreplyTwoTone = createIcon({
  path: (
    <>
      <Path d="M4 4v13.17L5.17 16H15v-6h5V4z" opacity={0.3} />
      <Path d="M5.17 16 4 17.17V4h16v6h2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h9v-2H5.17z" />
      <Path d="m19 23 3.5-7h-2.2l1.7-4h-5v6h2z" />
    </>
  ),
  displayName: "QuickreplyTwoTone",
})
