import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const ManSharp = createIcon({
  path: (
    <>
      <Path d="M16 7H8v8h2v7h4v-7h2z" />
      <Circle cx={12} cy={4} r={2} />
    </>
  ),
  displayName: "ManSharp",
})
