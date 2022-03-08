import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const PhotoCameraSharp = createIcon({
  path: (
    <>
      <Circle cx={12} cy={12} r={3} />
      <Path d="M9 2 7.17 4H2v16h20V4h-5.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
    </>
  ),
  displayName: "PhotoCameraSharp",
})
