import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const DynamicFeedTwoTone = createIcon({
  path: (
    <>
      <Path opacity={0.3} d="M12 7h8v4h-8z" />
      <Path d="M8 8H6v7c0 1.1.9 2 2 2h9v-2H8V8z" />
      <Path d="M20 3h-8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 8h-8V7h8v4zM4 12H2v7c0 1.1.9 2 2 2h9v-2H4v-7z" />
    </>
  ),
  displayName: "DynamicFeedTwoTone",
})
