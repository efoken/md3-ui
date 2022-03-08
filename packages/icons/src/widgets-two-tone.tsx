import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const WidgetsTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M5 5h4v4H5zm10 10h4v4h-4zM5 15h4v4H5zM16.66 4.52l-2.83 2.82 2.83 2.83 2.83-2.83z"
        opacity={0.3}
      />
      <Path d="M16.66 1.69 11 7.34 16.66 13l5.66-5.66-5.66-5.65zm-2.83 5.65 2.83-2.83 2.83 2.83-2.83 2.83-2.83-2.83zM3 3v8h8V3H3zm6 6H5V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm8-2v8h8v-8h-8zm6 6h-4v-4h4v4z" />
    </>
  ),
  displayName: "WidgetsTwoTone",
})
