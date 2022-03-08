import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const SlideshowTwoTone = createIcon({
  path: (
    <>
      <Path d="M5 19h14V5H5v14zm5-11 5 4-5 4V8z" opacity={0.3} />
      <Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM10 8v8l5-4z" />
    </>
  ),
  displayName: "SlideshowTwoTone",
})
