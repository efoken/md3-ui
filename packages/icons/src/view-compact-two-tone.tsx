import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const ViewCompactTwoTone = createIcon({
  path: (
    <>
      <Path d="M11 13h9v4h-9zm-6 0h4v4H5zm0-6h15v4H5z" opacity={0.3} />
      <Path d="M3 5v14h19V5H3zm6 12H5v-4h4v4zm11 0h-9v-4h9v4zm0-6H5V7h15v4z" />
    </>
  ),
  displayName: "ViewCompactTwoTone",
})
