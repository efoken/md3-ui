import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const FileUploadTwoTone = createIcon({
  path: (
    <>
      <Path opacity={0.3} d="M9.83 8H11v6h2V8h1.17L12 5.83z" />
      <Path d="M5 18h14v2H5zm0-8h4v6h6v-6h4l-7-7-7 7zm8-2v6h-2V8H9.83L12 5.83 14.17 8H13z" />
    </>
  ),
  displayName: "FileUploadTwoTone",
})
