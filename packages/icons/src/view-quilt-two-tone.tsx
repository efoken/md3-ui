import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const ViewQuiltTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M8.33 17H5V7h3.33v10zm5.34 0h-3.33v-4h3.33v4zM19 17h-3.33v-4H19v4zm0-6h-8.67V7H19v4z"
        opacity={0.3}
      />
      <Path d="M3 5v14h18V5H3zm5.33 12H5V7h3.33v10zm5.34 0h-3.33v-4h3.33v4zM19 17h-3.33v-4H19v4zm0-6h-8.67V7H19v4z" />
    </>
  ),
  displayName: "ViewQuiltTwoTone",
})
