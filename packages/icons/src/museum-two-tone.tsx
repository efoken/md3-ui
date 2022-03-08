import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const MuseumTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M6 20h12V9H6v11zm2-9h2l2 3 2-3h2v7h-2v-4l-2 3-2-3v4H8v-7z"
        opacity={0.3}
      />
      <Path d="M22 11V9L12 2 2 9v2h2v9H2v2h20v-2h-2v-9h2zm-4 9H6V9h12v11z" />
      <Path d="m10 14 2 3 2-3v4h2v-7h-2l-2 3-2-3H8v7h2z" />
    </>
  ),
  displayName: "MuseumTwoTone",
})
