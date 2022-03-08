import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const EjectTwoTone = createIcon({
  path: (
    <>
      <Path d="M12 8.6 9.07 13h5.86z" opacity={0.3} />
      <Path d="M5 17h14v2H5zm7-12L5.33 15h13.34L12 5zm0 3.6 2.93 4.4H9.07L12 8.6z" />
    </>
  ),
  displayName: "EjectTwoTone",
})
