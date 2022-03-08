import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const PrintDisabledTwoTone = createIcon({
  path: (
    <>
      <Path d="M7 10H5c-.55 0-1 .45-1 1v4h2v-2h4l-3-3z" opacity={0.3} />
      <Path d="M1.41 1.6 0 3.01 5 8c-1.66 0-3 1.34-3 3v6h4v4h12l2.95 2.96 1.41-1.41L1.41 1.6zM6 15H4v-4c0-.55.45-1 1-1h2l3 3H6v2zm2 4v-4h4l4 4H8z" />
      <Path
        d="m18 15.01 2-.01v-4c0-.55-.45-1-1-1h-6.34l3 3H18v2.01zm-1-3.5c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1z"
        opacity={0.3}
      />
      <Circle cx={18} cy={11.51} r={1} />
      <Path d="M16 5H8v.35L10.66 8H16z" opacity={0.3} />
      <Path d="M19 8h-1V3H6v.36l2 2V5h8v3h-5.34l2 2H19c.55 0 1 .45 1 1v4l-2 .01V13h-2.34l4 4H22v-6c0-1.66-1.34-3-3-3z" />
    </>
  ),
  displayName: "PrintDisabledTwoTone",
})
