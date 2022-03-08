import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const PersonAddAlt1Rounded = createIcon({
  path: (
    <>
      <Circle cx={9} cy={8} r={4} />
      <Path d="M9 14c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4zm11-4V7h-2v3h-3v2h3v3h2v-3h3v-2z" />
    </>
  ),
  displayName: "PersonAddAlt1Rounded",
})
