import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const SendTwoTone = createIcon({
  path: (
    <>
      <Path
        d="m4 8.25 7.51 1-7.5-3.22zm.01 9.72 7.5-3.22-7.51 1z"
        opacity={0.3}
      />
      <Path d="M2.01 3 2 10l15 2-15 2 .01 7L23 12 2.01 3zM4 8.25V6.03l7.51 3.22-7.51-1zm.01 9.72v-2.22l7.51-1-7.51 3.22z" />
    </>
  ),
  displayName: "SendTwoTone",
})
