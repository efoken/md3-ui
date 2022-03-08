import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const SignpostTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M6 6h11.17l1 1-1 1H6V6zm12 10H6.83l-1-1 1-1H18v2z"
        opacity={0.3}
      />
      <Path d="M13 10h5l3-3-3-3h-5V2h-2v2H4v6h7v2H6l-3 3 3 3h5v4h2v-4h7v-6h-7v-2zM6 6h11.17l1 1-1 1H6V6zm12 10H6.83l-1-1 1-1H18v2z" />
    </>
  ),
  displayName: "SignpostTwoTone",
})
