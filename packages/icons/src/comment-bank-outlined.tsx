import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const CommentBankOutlined = createIcon({
  path: (
    <>
      <Path d="M18 14V6h-5v8l2.5-1.5z" />
      <Path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
    </>
  ),
  displayName: "CommentBankOutlined",
})
