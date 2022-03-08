import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const ImageTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M5 19h14V5H5v14zm4-5.86 2.14 2.58 3-3.87L18 17H6l3-3.86z"
        opacity={0.3}
      />
      <Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-4.86-7.14-3 3.86L9 13.14 6 17h12z" />
    </>
  ),
  displayName: "ImageTwoTone",
})
