import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const TerminalTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M4 18h16V8H4v10zm8-3h6v2h-6v-2zm-5.91-4.59L7.5 9l4 4-4 4-1.41-1.41L8.67 13l-2.58-2.59z"
        opacity={0.3}
      />
      <Path d="M12 15h6v2h-6z" />
      <Path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2zm0 14H4V8h16v10z" />
      <Path d="m7.5 17 4-4-4-4-1.41 1.41L8.67 13l-2.58 2.59z" />
    </>
  ),
  displayName: "TerminalTwoTone",
})
