import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const ViewCozyTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M4 18h16V6H4v12zm8.75-10.75h4v4h-4v-4zm0 5.5h4v4h-4v-4zm-5.5-5.5h4v4h-4v-4zm0 5.5h4v4h-4v-4z"
        opacity={0.3}
      />
      <Path d="M7.25 7.25h4v4h-4zm5.5 0h4v4h-4zm-5.5 5.5h4v4h-4zm5.5 0h4v4h-4z" />
      <Path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z" />
    </>
  ),
  displayName: "ViewCozyTwoTone",
})
