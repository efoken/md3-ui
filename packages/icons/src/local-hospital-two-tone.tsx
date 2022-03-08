import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const LocalHospitalTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M5 19h14V5H5v14zm2-8.5h3.5V7h3v3.5H17v3h-3.5V17h-3v-3.5H7v-3z"
        opacity={0.3}
      />
      <Path d="M21 5c0-1.1-.9-2-2-2H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5zm-2 14H5V5h14v14zm-8.5-2h3v-3.5H17v-3h-3.5V7h-3v3.5H7v3h3.5z" />
    </>
  ),
  displayName: "LocalHospitalTwoTone",
})
