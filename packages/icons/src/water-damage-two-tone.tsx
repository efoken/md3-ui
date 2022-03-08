import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const WaterDamageTwoTone = createIcon({
  path: (
    <>
      <Path
        d="m12 5.69-5 4.5V18h10v-7.81l-5-4.5zM12 16c-1.1 0-2-.9-2-2s2-4 2-4 2 2.9 2 4-.9 2-2 2z"
        opacity={0.3}
      />
      <Path d="M12 3 2 12h3v8h14v-8h3L12 3zM7 18v-7.81l5-4.5 5 4.5V18H7zm7-4c0 1.1-.9 2-2 2s-2-.9-2-2 2-4 2-4 2 2.9 2 4z" />
    </>
  ),
  displayName: "WaterDamageTwoTone",
})
