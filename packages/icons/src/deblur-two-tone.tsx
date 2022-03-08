import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const DeblurTwoTone = createIcon({
  path: (
    <>
      <Circle cx={6} cy={14} r={1} />
      <Circle cx={6} cy={18} r={1} />
      <Circle cx={6} cy={10} r={1} />
      <Circle cx={3} cy={10} r={0.5} />
      <Circle cx={6} cy={6} r={1} />
      <Circle cx={3} cy={14} r={0.5} />
      <Circle cx={10} cy={21} r={0.5} />
      <Circle cx={10} cy={3} r={0.5} />
      <Circle cx={10} cy={6} r={1} />
      <Circle cx={10} cy={14} r={1.5} />
      <Circle cx={10} cy={10} r={1.5} />
      <Circle cx={10} cy={18} r={1} />
      <Path d="M12 3v2c3.86 0 7 3.14 7 7s-3.14 7-7 7v2c4.96 0 9-4.04 9-9s-4.04-9-9-9z" />
      <Path d="M12 5v14c3.86 0 7-3.14 7-7s-3.14-7-7-7z" opacity={0.3} />
    </>
  ),
  displayName: "DeblurTwoTone",
})
