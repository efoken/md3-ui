import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const MailLockTwoTone = createIcon({
  path: (
    <>
      <Path opacity={0.3} d="M20 6H4l8 5z" />
      <Path d="M12 13 4 8v10h12v-3.03a5 5 0 0 1 4-4.9V8l-8 5z" opacity={0.3} />
      <Path d="M4 18V8l8 5 8-5v2.08c.32-.07.66-.1 1-.1h1V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h12v-2H4zM20 6l-8 5-8-5h16z" />
      <Path d="M23 15v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm-3 0v-1c0-.55.45-1 1-1s1 .45 1 1v1h-2z" />
    </>
  ),
  displayName: "MailLockTwoTone",
})