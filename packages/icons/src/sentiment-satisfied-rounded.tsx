import { createIcon } from "@md3-ui/icon"
import * as React from "react"
import { Circle, Path } from "react-native-svg"

export const SentimentSatisfiedRounded = createIcon({
  path: (
    <>
      <Circle cx={15.5} cy={9.5} r={1.5} />
      <Circle cx={8.5} cy={9.5} r={1.5} />
      <Path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm4.41-6.11a.745.745 0 0 0-1.03.24C14.64 15.3 13.38 16 12 16s-2.64-.7-3.38-1.88a.747.747 0 1 0-1.27.79C8.37 16.54 10.1 17.5 12 17.5s3.63-.97 4.65-2.58c.22-.35.11-.81-.24-1.03z" />
    </>
  ),
  displayName: "SentimentSatisfiedRounded",
})
