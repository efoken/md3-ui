import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const StayPrimaryPortraitTwoTone = createIcon({
  path: (
    <>
      <Path d="M7 5h10v14H7z" opacity={0.3} />
      <Path d="M17 1.01 7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
    </>
  ),
  displayName: "StayPrimaryPortraitTwoTone",
})