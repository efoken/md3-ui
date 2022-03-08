import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const ForumTwoTone = createIcon({
  path: (
    <>
      <Path d="M15 11V4H4v8.17L5.17 11H6z" opacity={0.3} />
      <Path d="M16 13c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10zm-12-.83V4h11v7H5.17L4 12.17zM22 7c0-.55-.45-1-1-1h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7z" />
    </>
  ),
  displayName: "ForumTwoTone",
})
