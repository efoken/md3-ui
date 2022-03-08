import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const TourTwoTone = createIcon({
  path: (
    <>
      <Path opacity={0.3} d="M7 12V6h11.05l-1.2 3 1.2 3z" />
      <Path d="M21 4H7V2H5v20h2v-8h14l-2-5 2-5zM7 12V6h11.05l-1.2 3 1.2 3H7zm7-3c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" />
    </>
  ),
  displayName: "TourTwoTone",
})
