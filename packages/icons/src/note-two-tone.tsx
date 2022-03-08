import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const NoteTwoTone = createIcon({
  path: (
    <>
      <Path d="M15 6H4v12.01h16V11h-5z" opacity={0.3} />
      <Path d="M4 4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99h16c1.1 0 2-.9 2-2v-8l-6-6H4zm16 14.01H4V6h11v5h5v7.01z" />
    </>
  ),
  displayName: "NoteTwoTone",
})
