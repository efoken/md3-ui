import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const NearbyError = createIcon({
  path: (
    <Path d="m12 7.57 4.42 4.42L12 16.41l-4.42-4.42L12 7.57zm0 11.62-7.2-7.2 7.2-7.2 6 6V7.16l-4.58-4.58c-.78-.78-2.05-.78-2.83 0l-8.01 8c-.78.78-.78 2.05 0 2.83l8.01 8c.78.78 2.05.78 2.83 0L18 16.82v-3.63l-6 6zm8 .81h2v2h-2v-2zm2-10h-2v8h2v-8" />
  ),
  displayName: "NearbyError",
})
