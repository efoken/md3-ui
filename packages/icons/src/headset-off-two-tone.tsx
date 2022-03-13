import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const HeadsetOffTwoTone = createIcon({
  path: (
    <>
      <Path opacity={0.3} d="M5 14h2v4H5zm11.83 0L19 16.17V14z" />
      <Path d="M12 4c3.87 0 7 3.13 7 7v1h-4v.17L16.83 14H19v2.17l2 2V11a9 9 0 0 0-9-9c-2.02 0-3.88.67-5.38 1.8l1.43 1.43A6.878 6.878 0 0 1 12 4zM2.1 2.1.69 3.51l3.33 3.33A8.98 8.98 0 0 0 3 11v7c0 1.1.9 2 2 2h4v-8H5v-1c0-.94.19-1.83.52-2.65L15 17.83V20h2.17l1 1H12v2h7c.34 0 .65-.09.93-.24l.55.55 1.41-1.41L2.1 2.1zM7 14v4H5v-4h2z" />
    </>
  ),
  displayName: "HeadsetOffTwoTone",
})