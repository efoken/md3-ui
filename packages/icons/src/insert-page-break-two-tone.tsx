import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const InsertPageBreakTwoTone = createIcon({
  path: (
    <>
      <Path opacity={0.3} d="M18 11H6V4h7v5h5z" />
      <Path d="M18 20H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2v3zM6 4h7v5h5v2h2V8l-6-6H6c-1.1 0-2 .9-2 2v7h2V4zm3 9h6v2H9zm8 0h6v2h-6zM1 13h6v2H1z" />
      <Path opacity={0.3} d="M6 17h12v3H6z" />
    </>
  ),
  displayName: "InsertPageBreakTwoTone",
})
