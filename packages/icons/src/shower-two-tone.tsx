import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const ShowerTwoTone = createIcon({
  path: (
    <>
      <Path d="M12 7c-2.76 0-5 2.24-5 5h10c0-2.76-2.24-5-5-5z" opacity={0.3} />
      <Circle cx={8} cy={20} r={1} />
      <Circle cx={16} cy={17} r={1} />
      <Path d="M13 5.08V3h-2v2.08C7.61 5.57 5 8.47 5 12v2h14v-2c0-3.53-2.61-6.43-6-6.92zM7 12c0-2.76 2.24-5 5-5s5 2.24 5 5H7z" />
      <Circle cx={16} cy={20} r={1} />
      <Circle cx={12} cy={17} r={1} />
      <Circle cx={8} cy={17} r={1} />
      <Circle cx={12} cy={20} r={1} />
    </>
  ),
  displayName: "ShowerTwoTone",
})
