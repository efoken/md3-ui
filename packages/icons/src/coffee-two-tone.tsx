import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const CoffeeTwoTone = createIcon({
  path: (
    <>
      <Path d="M6 11c0 2.76 2.24 5 5 5s5-2.24 5-5v-1H6v1z" opacity={0.3} />
      <Path d="M4 19h16v2H4zM18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.93 0 3.5-1.57 3.5-3.5S20.43 3 18.5 3zM16 11c0 2.76-2.24 5-5 5s-5-2.24-5-5v-1h10v1zm0-3H6V5h10v3zm2.5 0H18V5h.5c.83 0 1.5.67 1.5 1.5S19.33 8 18.5 8z" />
    </>
  ),
  displayName: "CoffeeTwoTone",
})
