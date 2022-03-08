import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const MarkChatUnread = createIcon({
  path: (
    <Path d="M22 6.98V16c0 1.1-.9 2-2 2H6l-4 4V4c0-1.1.9-2 2-2h10.1A5.002 5.002 0 0 0 19 8c1.13 0 2.16-.39 3-1.02zM16 3c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z" />
  ),
  displayName: "MarkChatUnread",
})
