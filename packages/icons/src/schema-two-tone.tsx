import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const SchemaTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M6 3h3v2H6V3zm3 18H6v-2h3v2zm0-8H6v-2h3v2zm10 0h-3v-2h3v2z"
        opacity={0.3}
      />
      <Path d="M14 9v2h-3V9H8.5V7H11V1H4v6h2.5v2H4v6h2.5v2H4v6h7v-6H8.5v-2H11v-2h3v2h7V9h-7zM6 3h3v2H6V3zm3 18H6v-2h3v2zm0-8H6v-2h3v2zm10 0h-3v-2h3v2z" />
    </>
  ),
  displayName: "SchemaTwoTone",
})
