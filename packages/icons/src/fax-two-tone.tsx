import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const FaxTwoTone = createIcon({
  path: (
    <>
      <Path
        d="M5 10c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1s1-.45 1-1v-7c0-.55-.45-1-1-1zm5-4h6v3h-6zm9 5H8v7h12v-6c0-.55-.45-1-1-1zm-6 6H9v-5h4v5zm2 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
        opacity={0.3}
      />
      <Path d="M19 9h-1V4H8v5h-.78C6.67 8.39 5.89 8 5 8c-1.66 0-3 1.34-3 3v7c0 1.66 1.34 3 3 3 .89 0 1.67-.39 2.22-1H22v-8c0-1.66-1.34-3-3-3zM6 18c0 .55-.45 1-1 1s-1-.45-1-1v-7c0-.55.45-1 1-1s1 .45 1 1v7zm4-12h6v3h-6V6zm10 12H8v-7h11c.55 0 1 .45 1 1v6z" />
      <Circle cx={15} cy={13} r={1} />
      <Circle cx={18} cy={13} r={1} />
      <Circle cx={15} cy={16} r={1} />
      <Circle cx={18} cy={16} r={1} />
      <Path d="M9 12h4v5H9z" />
    </>
  ),
  displayName: "FaxTwoTone",
})
