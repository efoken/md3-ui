import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const LaptopTwoTone = createIcon({
  path: (
    <>
      <Path d="M4 6h16v10H4V6z" opacity={0.3} />
      <Path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
    </>
  ),
  displayName: "LaptopTwoTone",
})
