import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const ScreenshotTwoTone = createIcon({
  path: (
    <>
      <Path d="M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 21H7v-1h10v1zm0-3H7V6h10v12zm0-14H7V3h10v1zM9.5 8.5H12V7H8v4h1.5V8.5zM12 17h4v-4h-1.5v2.5H12V17z" />
      <Path d="M7 3h10v1H7zm0 17h10v1H7z" opacity={0.3} />
    </>
  ),
  displayName: "ScreenshotTwoTone",
})
