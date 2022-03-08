import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const CoffeeMakerSharp = createIcon({
  path: (
    <>
      <Path d="M18 7V4h2V2H4v20h16v-2h-4.03A4.966 4.966 0 0 0 18 16v-5H8v5c0 1.64.81 3.09 2.03 4H6V4h2v3h10z" />
      <Circle cx={13} cy={9} r={1} />
    </>
  ),
  displayName: "CoffeeMakerSharp",
})
