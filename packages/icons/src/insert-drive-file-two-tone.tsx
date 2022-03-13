import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const InsertDriveFileTwoTone = createIcon({
  path: (
    <>
      <Path d="M13 4H6v16h12V9h-5z" opacity={0.3} />
      <Path d="m20 8-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm-2 12H6V4h7v5h5v11z" />
    </>
  ),
  displayName: "InsertDriveFileTwoTone",
})