import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const DeckTwoTone = createIcon({
  path: (
    <>
      <Path opacity={0.3} d="M12 4.44 8.34 7h7.32z" />
      <Path d="M22 9 12 2 2 9h9v13h2V9h9zM12 4.44 15.66 7H8.34L12 4.44z" />
      <Path d="m4.14 12-1.96.37.82 4.37V22h2l.02-4H7v4h2v-6H4.9zm14.96 4H15v6h2v-4h1.98l.02 4h2v-5.26l.82-4.37-1.96-.37z" />
    </>
  ),
  displayName: "DeckTwoTone",
})
