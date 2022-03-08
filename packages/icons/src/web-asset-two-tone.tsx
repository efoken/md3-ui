import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const WebAssetTwoTone = createIcon({
  path: (
    <>
      <Path d="M5 8h14v10H5z" opacity={0.3} />
      <Path d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2zm0 14H5V8h14v10z" />
    </>
  ),
  displayName: "WebAssetTwoTone",
})
