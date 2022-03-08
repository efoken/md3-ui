import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const DynamicFeedSharp = createIcon({
  path: (
    <>
      <Path d="M8 8H6v9h11v-2H8z" />
      <Path d="M22 3H10v10h12V3zm-2 8h-8V7h8v4zM4 12H2v9h11v-2H4z" />
    </>
  ),
  displayName: "DynamicFeedSharp",
})
