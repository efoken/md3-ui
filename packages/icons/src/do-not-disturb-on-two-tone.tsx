import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const DoNotDisturbOnTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm5 9H7v-2h10v2z"
        opacity={0.3}
      />
      <Path d="M7 11h10v2H7z" />
      <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    </>
  ),
  displayName: "DoNotDisturbOnTwoTone",
})
