import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const VolumeMuteTwoTone = createIcon({
  path: (
    <>
      <Path d="M9 13h2.83L14 15.17V8.83L11.83 11H9z" opacity={0.3} />
      <Path d="M7 9v6h4l5 5V4l-5 5H7zm7-.17v6.34L11.83 13H9v-2h2.83L14 8.83z" />
    </>
  ),
  displayName: "VolumeMuteTwoTone",
})
