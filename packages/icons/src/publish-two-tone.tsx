import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const PublishTwoTone = createIcon({
  path: (
    <>
      <Path d="M9.83 12H11v6h2v-6h1.17L12 9.83z" opacity={0.3} />
      <Path d="M5 4h14v2H5zm7 3-7 7h4v6h6v-6h4l-7-7zm1 5v6h-2v-6H9.83L12 9.83 14.17 12H13z" />
    </>
  ),
  displayName: "PublishTwoTone",
})
