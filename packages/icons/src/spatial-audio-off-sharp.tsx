import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const SpatialAudioOffSharp = createIcon({
  path: (
    <>
      <Circle cx={10} cy={9} r={4} />
      <Path d="M16.39 15.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM20.36 1l-1.41 1.41a7.007 7.007 0 0 1 0 9.9l1.41 1.41a8.98 8.98 0 0 0 0-12.72z" />
      <Path d="M17.54 10.9a5.003 5.003 0 0 0 0-7.07l-1.41 1.41a3 3 0 0 1 0 4.24l1.41 1.42z" />
    </>
  ),
  displayName: "SpatialAudioOffSharp",
})
