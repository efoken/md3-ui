import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const FlagTwoTone = createIcon({
  path: (
    <>
      <Path d="M12.36 6H7v6h7.24l.4 2H18V8h-5.24z" opacity={0.3} />
      <Path d="M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6zm3.6 8h-3.36l-.4-2H7V6h5.36l.4 2H18v6z" />
    </>
  ),
  displayName: "FlagTwoTone",
})
