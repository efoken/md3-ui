import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const HourglassTopTwoTone = createIcon({
  path: (
    <>
      <Path opacity={0.3} d="m8 7.5 4 4 4-4V4H8z" />
      <Path opacity={0.3} d="m8 7.5 4 4 4-4V4H8z" />
      <Path d="M18 2H6v6l4 4-3.99 4.01L6 22h12l-.01-5.99L14 12l4-3.99V2zm-2 14.5V20H8v-3.5l4-4 4 4zm0-9-4 4-4-4V4h8v3.5z" />
    </>
  ),
  displayName: "HourglassTopTwoTone",
})
