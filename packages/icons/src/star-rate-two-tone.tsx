import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const StarRateTwoTone = createIcon({
  path: (
    <>
      <Path
        opacity={0.3}
        d="M12.94 12 12 8.89 11.06 12H8.24l2.27 1.62-.93 3.01L12 14.79l2.42 1.84-.93-3.01L15.76 12z"
      />
      <Path d="M22 10h-7.58L12 2l-2.42 8H2l6.17 4.41L5.83 22 12 17.31 18.17 22l-2.35-7.59L22 10zm-7.58 6.63L12 14.79l-2.42 1.84.93-3.01L8.24 12h2.82L12 8.89l.94 3.11h2.82l-2.27 1.62.93 3.01z" />
    </>
  ),
  displayName: "StarRateTwoTone",
})
