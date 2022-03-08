import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const PlagiarismSharp = createIcon({
  path: (
    <>
      <Circle cx={11.5} cy={14.5} r={1.5} />
      <Path d="M14 2H4v20h16V8l-6-6zm1.04 17.45-1.88-1.88c-1.33.71-3.01.53-4.13-.59a3.495 3.495 0 0 1 0-4.95 3.495 3.495 0 0 1 4.95 0 3.48 3.48 0 0 1 .59 4.13l1.88 1.88-1.41 1.41zM13 9V3.5L18.5 9H13z" />
    </>
  ),
  displayName: "PlagiarismSharp",
})
