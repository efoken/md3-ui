import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const PlayLesson = createIcon({
  path: (
    <>
      <Path d="M18 11c.34 0 .67.03 1 .08V4c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h7.26A6.995 6.995 0 0 1 18 11zM7 11V4h5v7L9.5 9.5 7 11z" />
      <Path d="M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-1.25 7.5v-5l4 2.5-4 2.5z" />
    </>
  ),
  displayName: "PlayLesson",
})
