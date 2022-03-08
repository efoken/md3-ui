import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const QueueMusicTwoTone = createIcon({
  path: (
    <>
      <Circle cx={16} cy={17} opacity={0.3} r={1} />
      <Path d="M3 10h12v2H3v-2zm0 4h8v2H3v-2zm0-8h12v2H3V6zm14 8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5v8.18z" />
    </>
  ),
  displayName: "QueueMusicTwoTone",
})
