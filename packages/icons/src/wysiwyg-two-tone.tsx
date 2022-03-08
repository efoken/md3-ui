import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const WysiwygTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M19 19H5V7h14v12zm-2-7H7v-2h10v2zm-4 4H7v-2h6v2z"
        opacity={0.3}
      />
      <Path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm0 16H5V7h14v12zm-2-7H7v-2h10v2zm-4 4H7v-2h6v2z" />
    </>
  ),
  displayName: "WysiwygTwoTone",
})
