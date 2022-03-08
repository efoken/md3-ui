import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const FormatPaintTwoTone = createIcon({
  path: (
    <>
      <Path d="M6 4h10v2H6z" opacity={0.3} />
      <Path d="M17 2H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3V3c0-.55-.45-1-1-1zm-1 4H6V4h10v2z" />
    </>
  ),
  displayName: "FormatPaintTwoTone",
})
