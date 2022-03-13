import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const SecurityTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M12 3.19 5 6.3V12h7v8.93c3.72-1.15 6.47-4.82 7-8.94h-7v-8.8z"
        opacity={0.3}
      />
      <Path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 19.93V12H5V6.3l7-3.11v8.8h7c-.53 4.12-3.28 7.79-7 8.94z" />
    </>
  ),
  displayName: "SecurityTwoTone",
})