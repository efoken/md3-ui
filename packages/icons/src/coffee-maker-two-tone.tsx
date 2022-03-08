import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const CoffeeMakerTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M13 19c1.65 0 3-1.35 3-3v-3h-6v3c0 1.65 1.35 3 3 3z"
        opacity={0.3}
      />
      <Path d="M9 7h8c.55 0 1-.45 1-1V4h2V2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14v-2h-4.03A4.966 4.966 0 0 0 18 16v-5H8v5c0 1.64.81 3.09 2.03 4H6V4h2v2c0 .55.45 1 1 1zm1 9v-3h6v3c0 1.65-1.35 3-3 3s-3-1.35-3-3z" />
      <Circle cx={13} cy={9} r={1} />
    </>
  ),
  displayName: "CoffeeMakerTwoTone",
})
