import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const FlagCircle = createIcon({
  path: (
    <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6 13h-5l-1-2H9.5v5H8V7h6l1 2h3v6z" />
  ),
  displayName: "FlagCircle",
})