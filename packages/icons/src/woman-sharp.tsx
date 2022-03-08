import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const WomanSharp = createIcon({
  path: (
    <>
      <Path d="M13.41 7h-2.82L7 16h3v6h4v-6h3z" />
      <Circle cx={12} cy={4} r={2} />
    </>
  ),
  displayName: "WomanSharp",
})
