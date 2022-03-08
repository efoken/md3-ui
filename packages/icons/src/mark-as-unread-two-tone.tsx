import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const MarkAsUnreadTwoTone = createIcon({
  path: (
    <>
      <Path opacity={0.3} d="M13.5 13.33 20 10H7z" />
      <Path opacity={0.3} d="M7 12v7h13v-7l-6.5 3.33z" />
      <Path d="M16.23 7h2.6c-.06-.47-.36-.94-.79-1.17L10.5 2 2.8 5.83c-.48.26-.8.81-.8 1.34V15c0 1.1.9 2 2 2V7.4L10.5 4l5.73 3z" />
      <Path d="M20 8H7c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2zm0 11H7v-7l6.5 3.33L20 12v7zm-6.5-5.67L7 10h13l-6.5 3.33z" />
    </>
  ),
  displayName: "MarkAsUnreadTwoTone",
})
