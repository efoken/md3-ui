import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const SystemSecurityUpdateWarningRounded = createIcon({
  path: (
    <>
      <Circle cx={12} cy={16} r={1} />
      <Path d="M12 13c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1z" />
      <Path d="M17 1H7c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 17H7V6h10v12z" />
    </>
  ),
  displayName: "SystemSecurityUpdateWarningRounded",
})
