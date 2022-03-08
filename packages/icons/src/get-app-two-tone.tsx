import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const GetAppTwoTone = createIcon({
  path: (
    <>
      <Path d="M14.17 11H13V5h-2v6H9.83L12 13.17z" opacity={0.3} />
      <Path d="M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11zm-6 7h14v2H5z" />
    </>
  ),
  displayName: "GetAppTwoTone",
})
