import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const SdCardTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M6 8.83V20h12V4h-7.17L6 8.83zM15 7h2v4h-2V7zm-3 0h2v4h-2V7zm-1 4H9V7h2v4z"
        opacity={0.3}
      />
      <Path d="M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H6V8.83L10.83 4H18v16zM9 7h2v4H9zm3 0h2v4h-2zm3 0h2v4h-2z" />
    </>
  ),
  displayName: "SdCardTwoTone",
})
