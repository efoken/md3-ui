import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const PersonSearchTwoTone = createIcon({
  path: (
    <>
      <Path d="M4 18c.22-.72 3.31-2 6-2 0-.7.13-1.37.35-1.99C7.62 13.91 2 15.27 2 18v2h9.54c-.52-.58-.93-1.25-1.19-2H4zm6-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6a2 2 0 1 1 .001 3.999A2 2 0 0 1 10 7z" />
      <Path
        d="M10.35 18s-.35-.79-.35-2c-2.69 0-5.77 1.28-6 2h6.35z"
        opacity={0.3}
      />
      <Path d="M19.43 18.02c.36-.59.57-1.28.57-2.02 0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c.74 0 1.43-.22 2.02-.57L20.59 22 22 20.59c-1.5-1.5-.79-.8-2.57-2.57zM16 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
      <Circle cx={10} cy={9} r={2} opacity={0.3} />
    </>
  ),
  displayName: "PersonSearchTwoTone",
})
