import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const ForwardTwoTone = createIcon({
  path: (
    <>
      <Path d="M14 14v1.17L17.17 12 14 8.83V10H6v4z" opacity={0.3} />
      <Path d="m20 12-8-8v4H4v8h8v4l8-8zM6 14v-4h8V8.83L17.17 12 14 15.17V14H6z" />
    </>
  ),
  displayName: "ForwardTwoTone",
})
