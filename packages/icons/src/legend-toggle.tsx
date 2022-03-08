import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const LegendToggle = createIcon({
  path: (
    <Path d="M20 15H4v-2h16v2zm0 2H4v2h16v-2zm-5-6 5-3.55V5l-5 3.55L10 5 4 8.66V11l5.92-3.61L15 11z" />
  ),
  displayName: "LegendToggle",
})
