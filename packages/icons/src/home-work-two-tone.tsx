import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const HomeWorkTwoTone = createIcon({
  path: (
    <>
      <Path d="M17 15h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2zm-3.26 0 1.26.84V7z" />
      <Path d="M10 3v1.51l2 1.33V5h9v14h-4v2h6V3z" />
      <Path d="M8.17 5.7 15 10.25V21H1V10.48L8.17 5.7zM10 19h3v-7.84L8.17 8.09 3 11.38V19h3v-6h4v6z" />
      <Path d="M10 19h3v-7.84L8.17 8.09 3 11.38V19h3v-6h4z" opacity={0.3} />
    </>
  ),
  displayName: "HomeWorkTwoTone",
})
