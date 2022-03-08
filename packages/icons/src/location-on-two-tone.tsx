import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const LocationOnTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M12 4C9.24 4 7 6.24 7 9c0 2.85 2.92 7.21 5 9.88 2.11-2.69 5-7 5-9.88 0-2.76-2.24-5-5-5zm0 7.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"
        opacity={0.3}
      />
      <Path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />
      <Circle cx={12} cy={9} r={2.5} />
    </>
  ),
  displayName: "LocationOnTwoTone",
})
