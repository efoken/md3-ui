import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const CancelPresentationTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M3 19.1h18V4.95H3V19.1zm5-9.74 1.41-1.41L12 10.54l2.59-2.59L16 9.36l-2.59 2.59L16 14.54l-1.41 1.41L12 13.36l-2.59 2.59L8 14.54l2.59-2.59L8 9.36z"
        opacity={0.3}
      />
      <Path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM9.41 15.95 12 13.36l2.59 2.59L16 14.54l-2.59-2.59L16 9.36l-1.41-1.41L12 10.54 9.41 7.95 8 9.36l2.59 2.59L8 14.54z" />
    </>
  ),
  displayName: "CancelPresentationTwoTone",
})
