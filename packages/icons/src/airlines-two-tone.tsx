import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const AirlinesTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M14.05 6 5.8 18h11.54l2.25-12h-5.54zm.45 8a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"
        opacity={0.3}
      />
      <Path d="M17.34 18H5.8l8.25-12h5.54l-2.25 12zM13 4 2 20h17l3-16h-9zm1.5 5a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5z" />
    </>
  ),
  displayName: "AirlinesTwoTone",
})
