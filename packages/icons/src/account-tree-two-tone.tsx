import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const AccountTreeTwoTone = createIcon({
  path: (
    <>
      <Path d="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3h7zM7 9H4V5h3v4zm10 6h3v4h-3v-4zm0-10h3v4h-3V5z" />
      <Path opacity={0.3} d="M7 5v4H4V5h3m13 0v4h-3V5h3m0 10v4h-3v-4h3" />
    </>
  ),
  displayName: "AccountTreeTwoTone",
})
