import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const ViewCompactAltTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M4 18h16V6H4v12zm8.5-10.5h4v4h-4v-4zm0 5h4v4h-4v-4zm-5-5h4v4h-4v-4zm0 5h4v4h-4v-4z"
        opacity={0.3}
      />
      <Path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z" />
      <Path d="M7.5 7.5h4v4h-4zm5 0h4v4h-4zm-5 5h4v4h-4zm5 0h4v4h-4z" />
    </>
  ),
  displayName: "ViewCompactAltTwoTone",
})