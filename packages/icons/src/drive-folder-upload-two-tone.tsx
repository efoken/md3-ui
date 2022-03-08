import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const DriveFolderUploadTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M9.17 6H4v12h16V8h-8.83l-2-2zM16 13h-3v4h-2v-4H8l4.01-4L16 13z"
        opacity={0.3}
      />
      <Path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10z" />
      <Path d="M11 13v4h2v-4h3l-3.99-4L8 13z" />
    </>
  ),
  displayName: "DriveFolderUploadTwoTone",
})
