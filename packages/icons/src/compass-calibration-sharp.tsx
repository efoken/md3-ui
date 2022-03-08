import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const CompassCalibrationSharp = createIcon({
  path: (
    <>
      <Circle cx={12} cy={17} r={4} />
      <Path d="M12 3C8.1 3 4.56 4.59 2 7.15l5 5a7.06 7.06 0 0 1 10-.01l5-5C19.44 4.59 15.9 3 12 3z" />
    </>
  ),
  displayName: "CompassCalibrationSharp",
})
