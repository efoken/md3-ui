import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const CoffeeMakerRounded = createIcon({
  path: (
    <>
      <Path d="M18 6V4h1c.55 0 1-.45 1-1s-.45-1-1-1H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1h-3.03A4.966 4.966 0 0 0 18 16v-3c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v3c0 1.64.81 3.09 2.03 4H6V4h2v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1z" />
      <Circle cx={13} cy={9} r={1} />
    </>
  ),
  displayName: "CoffeeMakerRounded",
})
