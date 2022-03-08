import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const EmojiPeopleOutlined = createIcon({
  path: (
    <>
      <Circle cx={12} cy={4} r={2} />
      <Path d="M15.89 8.11C15.5 7.72 14.83 7 13.53 7h-2.54C8.24 6.99 6 4.75 6 2H4c0 3.16 2.11 5.84 5 6.71V22h2v-6h2v6h2V10.05L18.95 14l1.41-1.41-4.47-4.48z" />
    </>
  ),
  displayName: "EmojiPeopleOutlined",
})
