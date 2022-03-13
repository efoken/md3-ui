import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Path } from "react-native-svg"

export const CalendarViewMonthTwoTone = createIcon({
  path: (
    <>
      <Path
        opacity={0.3}
        d="M4 6h4v5H4zm0 7h4v5H4zm6 0h4v5h-4zm6 0h4v5h-4zm0-7h4v5h-4zm-6 0h4v5h-4z"
      />
      <Path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM8 18H4v-5h4v5zm0-7H4V6h4v5zm6 7h-4v-5h4v5zm0-7h-4V6h4v5zm6 7h-4v-5h4v5zm0-7h-4V6h4v5z" />
    </>
  ),
  displayName: "CalendarViewMonthTwoTone",
})