import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const TurnedInTwoTone = createIcon({
  path: (
    <>
      <Path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 14.97-4.21-1.81-.79-.34-.79.34L7 17.97V5h10v12.97z" />
      <Path d="m7 17.97 4.21-1.81.79-.34.79.34L17 17.97V5H7z" opacity={0.3} />
    </>
  ),
  displayName: "TurnedInTwoTone",
})
