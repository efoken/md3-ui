import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const ViewCarouselTwoTone = createIcon({
  path: (
    <>
      <Path opacity={0.3} d="M9 7h6v10H9z" />
      <Path d="M2 7h4v10H2V7zm5 12h10V5H7v14zM9 7h6v10H9V7zm9 0h4v10h-4V7z" />
    </>
  ),
  displayName: "ViewCarouselTwoTone",
})