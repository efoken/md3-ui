import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const GarageSharp = createIcon({
  path: (
    <>
      <Circle cx={15} cy={13} r={1} />
      <Circle cx={9} cy={13} r={1} />
      <Path d="m8.33 7.5-.66 2h8.66l-.66-2z" />
      <Path d="M22 2H2v20h20V2zm-3 16.5h-2v-2H7v2H5v-7.31L6.89 5.5H17.1l1.9 5.69v7.31z" />
    </>
  ),
  displayName: "GarageSharp",
})
