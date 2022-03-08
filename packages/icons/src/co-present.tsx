import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const CoPresent = createIcon({
  path: (
    <>
      <Path d="M21 3H3c-1.1 0-2 .9-2 2v8h2V5h18v16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
      <Circle cx={9} cy={10} r={4} />
      <Path d="M15.39 16.56C13.71 15.7 11.53 15 9 15s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 1 19.22V22h16v-2.78c0-1.12-.61-2.15-1.61-2.66z" />
    </>
  ),
  displayName: "CoPresent",
})
