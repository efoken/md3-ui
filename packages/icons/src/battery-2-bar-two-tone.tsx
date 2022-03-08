import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const Battery2BarTwoTone = createIcon({
  path: (
    <>
      <Path opacity={0.3} d="M9 6h6v10H9z" />
      <Path d="M17 5v16c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h2V2h4v2h2c.55 0 1 .45 1 1zm-2 1H9v10h6V6z" />
    </>
  ),
  displayName: "Battery2BarTwoTone",
})
