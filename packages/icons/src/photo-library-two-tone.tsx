import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const PhotoLibraryTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M8 16h12V4H8v12zm3.5-4.33 1.69 2.26 2.48-3.09L19 15H9l2.5-3.33z"
        opacity={0.3}
      />
      <Path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-2 0H8V4h12v12zm-4.33-5.17-2.48 3.09-1.69-2.25L9 15h10zM4 22h14v-2H4V6H2v14c0 1.1.9 2 2 2z" />
    </>
  ),
  displayName: "PhotoLibraryTwoTone",
})
