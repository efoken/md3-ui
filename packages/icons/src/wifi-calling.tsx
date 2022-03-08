import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const WifiCalling = createIcon({
  path: (
    <>
      <Path d="M22 4.95C21.79 4.78 19.67 3 16.5 3c-3.18 0-5.29 1.78-5.5 1.95L16.5 12 22 4.95z" />
      <Path d="M20 15.51c-1.24 0-2.45-.2-3.57-.57a.994.994 0 0 0-1.02.24l-2.2 2.2a15.149 15.149 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1z" />
    </>
  ),
  displayName: "WifiCalling",
})
