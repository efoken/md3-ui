import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const CategorySharp = createIcon({
  path: (
    <>
      <Path d="m12 2-5.5 9h11z" />
      <Circle cx={17.5} cy={17.5} r={4.5} />
      <Path d="M3 13.5h8v8H3z" />
    </>
  ),
  displayName: "CategorySharp",
})
