import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const EmailTwoTone = createIcon({
  path: (
    <>
      <Path d="m20 8-8 5-8-5v10h16zm0-2H4l8 4.99z" opacity={0.3} />
      <Path d="M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z" />
    </>
  ),
  displayName: "EmailTwoTone",
})
