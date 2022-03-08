import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const ApprovalTwoTone = createIcon({
  path: (
    <>
      <Path
        opacity={0.3}
        d="M6 16h12v2H6zm6-12c-1.66 0-3 1.34-3 3l3 4 3-4c0-1.66-1.34-3-3-3z"
      />
      <Path d="M12 2C9.24 2 7 4.24 7 7l5 7 5-7c0-2.76-2.24-5-5-5zm0 9L9 7c0-1.66 1.34-3 3-3s3 1.34 3 3l-3 4zm6 3H6c-1.1 0-2 .9-2 2v6h16v-6c0-1.1-.9-2-2-2zm0 4H6v-2h12v2z" />
    </>
  ),
  displayName: "ApprovalTwoTone",
})
