import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const SummarizeTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M14 5H5v14h14v-9h-5V5zM8 17c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
        opacity={0.3}
      />
      <Circle cx={8} cy={8} r={1} />
      <Path d="M15 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V9l-6-6zm4 16H5V5h9v5h5v9z" />
      <Circle cx={8} cy={12} r={1} />
      <Circle cx={8} cy={16} r={1} />
    </>
  ),
  displayName: "SummarizeTwoTone",
})
