import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const WorkOutline = createIcon({
  path: (
    <Path
      d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z"
      fillRule="evenodd"
    />
  ),
  displayName: "WorkOutline",
})