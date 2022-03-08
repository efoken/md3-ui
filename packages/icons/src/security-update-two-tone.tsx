import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const SecurityUpdateTwoTone = createIcon({
  path: (
    <>
      <Path opacity={0.3} d="M7 20h10v1H7zM7 3h10v1H7z" />
      <Path d="M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 21H7v-1h10v1zm0-3H7V6h10v12zm0-14H7V3h10v1zm-1 8h-3V8h-2v4H8l4 4 4-4z" />
    </>
  ),
  displayName: "SecurityUpdateTwoTone",
})
