import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const VideogameAssetOutlined = createIcon({
  path: (
    <>
      <Path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h18v8zM6 15h2v-2h2v-2H8V9H6v2H4v2h2z" />
      <Circle cx={14.5} cy={13.5} r={1.5} />
      <Circle cx={18.5} cy={10.5} r={1.5} />
    </>
  ),
  displayName: "VideogameAssetOutlined",
})
