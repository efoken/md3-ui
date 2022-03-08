import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const BuildCircleRounded = createIcon({
  path: (
    <Path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.54 13.85-.69.69a.996.996 0 0 1-1.41 0l-3.05-3.05c-1.22.43-2.64.17-3.62-.81a3.468 3.468 0 0 1-.59-4.1l2.35 2.35 1.41-1.41-2.36-2.35c1.32-.71 2.99-.52 4.1.59.98.98 1.24 2.4.81 3.62l3.05 3.05c.39.39.39 1.03 0 1.42z"
      fillRule="evenodd"
    />
  ),
  displayName: "BuildCircleRounded",
})
