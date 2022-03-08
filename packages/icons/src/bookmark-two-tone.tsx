import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const BookmarkTwoTone = createIcon({
  path: (
    <>
      <Path d="m7 17.97 5-2.15 5 2.15V5H7z" opacity={0.3} />
      <Path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 14.97-5-2.14-5 2.14V5h10v12.97z" />
    </>
  ),
  displayName: "BookmarkTwoTone",
})
