import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const LanTwoTone = createIcon({
  path: (
    <>
      <Path d="M10 7V4h4v3h-4zM9 17v3H5v-3h4zm10 0v3h-4v-3h4z" opacity={0.3} />
      <Path d="M13 22h8v-7h-3v-4h-5V9h3V2H8v7h3v2H6v4H3v7h8v-7H8v-2h8v2h-3v7zM10 7V4h4v3h-4zM9 17v3H5v-3h4zm10 0v3h-4v-3h4z" />
    </>
  ),
  displayName: "LanTwoTone",
})
