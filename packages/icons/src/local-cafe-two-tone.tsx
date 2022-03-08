import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const LocalCafeTwoTone = createIcon({
  path: (
    <>
      <Path d="M8 15h6c1.1 0 2-.9 2-2V5H6v8c0 1.1.9 2 2 2z" opacity={0.3} />
      <Path d="M2 19h18v2H2zm2-6c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2H4v10zm14-8h2v3h-2V5zM6 5h10v8c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5z" />
    </>
  ),
  displayName: "LocalCafeTwoTone",
})
