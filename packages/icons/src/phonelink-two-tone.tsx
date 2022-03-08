import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const PhonelinkTwoTone = createIcon({
  path: (
    <>
      <Path d="M18 10h4v7h-4z" opacity={0.3} />
      <Path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z" />
    </>
  ),
  displayName: "PhonelinkTwoTone",
})
