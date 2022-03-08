import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const SubscriptionsTwoTone = createIcon({
  path: (
    <>
      <Path d="M4 20h16v-8H4v8zm6-7.27L16 16l-6 3.26v-6.53z" opacity={0.3} />
      <Path d="M4 6h16v2H4zm2-4h12v2H6zm14 8H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm0 10H4v-8h16v8zm-10-7.27v6.53L16 16z" />
    </>
  ),
  displayName: "SubscriptionsTwoTone",
})
