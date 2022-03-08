import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const UploadTwoTone = createIcon({
  path: (
    <>
      <Path d="M9.83 8H11v6h2V8h1.17L12 5.83z" opacity={0.3} />
      <Path d="m12 3-7 7h4v6h6v-6h4l-7-7zm1 5v6h-2V8H9.83L12 5.83 14.17 8H13zM5 18h14v2H5z" />
    </>
  ),
  displayName: "UploadTwoTone",
})
