import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const FactoryTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M12 12V9.95l-5 2V10l-3 1.32V20h16v-8h-8zm-3 6H7v-4h2v4zm4 0h-2v-4h2v4zm4 0h-2v-4h2v4z"
        opacity={0.3}
      />
      <Path d="M22 22H2V10l7-3v2l5-2v3h3l1-8h3l1 8v12zM12 9.95l-5 2V10l-3 1.32V20h16v-8h-8V9.95zM11 18h2v-4h-2v4zm-4 0h2v-4H7v4zm10-4h-2v4h2v-4z" />
    </>
  ),
  displayName: "FactoryTwoTone",
})
