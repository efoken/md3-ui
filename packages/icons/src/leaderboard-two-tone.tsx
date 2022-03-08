import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const LeaderboardTwoTone = createIcon({
  path: (
    <>
      <Path d="M10 5h4v14h-4V5zm-6 6h4v8H4v-8zm16 8h-4v-6h4v6z" opacity={0.3} />
      <Path d="M16 11V3H8v6H2v12h20V11h-6zm-6-6h4v14h-4V5zm-6 6h4v8H4v-8zm16 8h-4v-6h4v6z" />
    </>
  ),
  displayName: "LeaderboardTwoTone",
})
