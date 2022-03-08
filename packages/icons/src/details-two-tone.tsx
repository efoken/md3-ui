import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const DetailsTwoTone = createIcon({
  path: (
    <>
      <Path d="M13 8.92 18.6 19H13V8.92zm-2 0V19H5.4L11 8.92z" opacity={0.3} />
      <Path d="M12 3 2 21h20L12 3zm1 5.92L18.6 19H13V8.92zm-2 0V19H5.4L11 8.92z" />
    </>
  ),
  displayName: "DetailsTwoTone",
})
