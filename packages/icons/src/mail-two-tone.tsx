import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const MailTwoTone = createIcon({
  path: (
    <>
      <Path d="M20 6H4l8 4.99zM4 8v10h16V8l-8 5z" opacity={0.3} />
      <Path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2-8 4.99L4 6h16zm0 12H4V8l8 5 8-5v10z" />
    </>
  ),
  displayName: "MailTwoTone",
})
