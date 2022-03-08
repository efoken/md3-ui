import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const AudiotrackTwoTone = createIcon({
  path: (
    <>
      <Circle cx={10} cy={17} opacity={0.3} r={2} />
      <Path d="M10 21c2.21 0 4-1.79 4-4V7h4V3h-6v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
    </>
  ),
  displayName: "AudiotrackTwoTone",
})
