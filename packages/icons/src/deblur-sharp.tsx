import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const DeblurSharp = createIcon({
  path: (
    <>
      <Path d="M12 3v18a9 9 0 0 0 0-18z" />
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
    </>
  ),
  displayName: "DeblurSharp",
})
