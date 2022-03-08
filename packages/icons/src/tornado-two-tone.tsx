import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const TornadoTwoTone = createIcon({
  path: (
    <>
      <Path
        opacity={0.3}
        d="M9.1 13h5.8l1.74-3H7.36zm2.9 5.01L13.74 15h-3.48zM4.47 5l1.74 3h11.58l1.74-3z"
      />
      <Path d="m1 3 11 19L23 3H1zm11 15.01L10.26 15h3.48L12 18.01zM14.9 13H9.1l-1.74-3h9.27l-1.73 3zM6.21 8 4.47 5h15.06l-1.74 3H6.21z" />
    </>
  ),
  displayName: "TornadoTwoTone",
})
