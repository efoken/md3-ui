import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const HotelTwoTone = createIcon({
  path: (
    <>
      <Path d="M19 9h-6v6h8v-4c0-1.1-.9-2-2-2z" opacity={0.3} />
      <Circle cx={7} cy={11} opacity={0.3} r={1} />
      <Path d="M4 11c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3zm4 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm11-4h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4zm2 8h-8V9h6c1.1 0 2 .9 2 2v4z" />
    </>
  ),
  displayName: "HotelTwoTone",
})
