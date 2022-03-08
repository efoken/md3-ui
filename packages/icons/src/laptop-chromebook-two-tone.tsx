import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const LaptopChromebookTwoTone = createIcon({
  path: (
    <>
      <Path d="M4 5h16v10H4z" opacity={0.3} />
      <Path d="M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z" />
    </>
  ),
  displayName: "LaptopChromebookTwoTone",
})
