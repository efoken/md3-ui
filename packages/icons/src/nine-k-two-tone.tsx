import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const NineKTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M5 19h14V5H5v14zm8-10h1.5v2.25L16.25 9H18l-2.25 3L18 15h-1.75l-1.75-2.25V15H13V9zm-6.5 4.5h3v-1h-2c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1H10c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H6.5v-1.5z"
        opacity={0.3}
      />
      <Path opacity={0.3} d="M8 10h1.5v1.5H8z" />
      <Path d="M11 14v-4c0-.55-.45-1-1-1H7.5c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1h2v1h-3V15H10c.55 0 1-.45 1-1zm-1.5-2.5H8V10h1.5v1.5z" />
      <Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
      <Path d="M14.5 12.75 16.25 15H18l-2.25-3L18 9h-1.75l-1.75 2.25V9H13v6h1.5z" />
    </>
  ),
  displayName: "NineKTwoTone",
})