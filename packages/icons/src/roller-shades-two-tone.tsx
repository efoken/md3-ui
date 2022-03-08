import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const RollerShadesTwoTone = createIcon({
  path: (
    <>
      <Path opacity={0.3} d="M6 5h12v6H6z" />
      <Path d="M20 19V3H4v16H2v2h20v-2h-2zm-2 0H6v-6h5v1.82A1.746 1.746 0 0 0 12 18a1.746 1.746 0 0 0 1-3.18V13h5v6zm0-8H6V5h12v6z" />
    </>
  ),
  displayName: "RollerShadesTwoTone",
})
