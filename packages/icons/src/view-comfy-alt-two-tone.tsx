import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const ViewComfyAltTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M4 18h16V6H4v12zm9-11h4v4h-4V7zm0 6h4v4h-4v-4zM7 7h4v4H7V7zm0 6h4v4H7v-4z"
        opacity={0.3}
      />
      <Path d="M7 7h4v4H7zm6 0h4v4h-4zm-6 6h4v4H7zm6 0h4v4h-4z" />
      <Path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z" />
    </>
  ),
  displayName: "ViewComfyAltTwoTone",
})
