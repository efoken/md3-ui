import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const VideoCameraBackTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M4 18h12V6H4v12zm3.38-5.17L9 15l2.62-3.5L15 16H5l2.38-3.17z"
        opacity={0.3}
      />
      <Path d="M11.62 11.5 9 15l-1.62-2.17L5 16h10z" />
      <Path d="M18 10.48V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4.48l4 3.98v-11l-4 3.98zM16 18H4V6h12v12z" />
    </>
  ),
  displayName: "VideoCameraBackTwoTone",
})
