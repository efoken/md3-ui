import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const ViewModuleTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M19 11h-3.33V7H19v4zm-5.33 0h-3.33V7h3.33v4zM8.33 7v4H5V7h3.33zM5 17v-4h3.33v4H5zm5.33 0v-4h3.33v4h-3.33zm5.34 0v-4H19v4h-3.33z"
        opacity={0.3}
      />
      <Path d="M3 5v14h18V5H3zm16 6h-3.33V7H19v4zm-5.33 0h-3.33V7h3.33v4zM8.33 7v4H5V7h3.33zM5 17v-4h3.33v4H5zm5.33 0v-4h3.33v4h-3.33zm5.34 0v-4H19v4h-3.33z" />
    </>
  ),
  displayName: "ViewModuleTwoTone",
})
