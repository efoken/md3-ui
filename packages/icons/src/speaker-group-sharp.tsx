import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const SpeakerGroupSharp = createIcon({
  path: (
    <>
      <Path d="M20 1H8v17.99h12V1zm-6 2c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2zm0 13.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
      <Circle cx={14} cy={12.5} r={2.5} />
      <Path d="M6 5H4v18h12v-2H6z" />
    </>
  ),
  displayName: "SpeakerGroupSharp",
})
