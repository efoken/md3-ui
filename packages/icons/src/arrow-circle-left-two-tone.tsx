import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const ArrowCircleLeftTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M20 12c0 4.41-3.59 8-8 8s-8-3.59-8-8 3.59-8 8-8 8 3.59 8 8m-8 1h4v-2h-4V8l-4 4 4 4v-3z"
        opacity={0.3}
      />
      <Path d="M20 12c0 4.41-3.59 8-8 8s-8-3.59-8-8 3.59-8 8-8 8 3.59 8 8m2 0c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zm-10 1h4v-2h-4V8l-4 4 4 4v-3z" />
    </>
  ),
  displayName: "ArrowCircleLeftTwoTone",
})
