import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const HorizontalRuleRounded = createIcon({
  path: (
    <Path
      d="M19 13H5c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1s-.45 1-1 1z"
      fillRule="evenodd"
    />
  ),
  displayName: "HorizontalRuleRounded",
})
