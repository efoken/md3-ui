import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const CompareTwoTone = createIcon({
  path: (
    <>
      <Path d="M19 5h-5v7l5 6zm-9 13v-6l-5 6z" opacity={0.3} />
      <Path d="M19 3h-5v2h5v13l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-2h-2v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2V1zm-2 17H5l5-6v6z" />
    </>
  ),
  displayName: "CompareTwoTone",
})
