import { Box, BoxProps } from "@md3-ui/core"
import * as React from "react"

export const CodeContainer: React.FC<BoxProps> = ({ sx, ...props }) => (
  <Box
    sx={{ bgColor: "#011627", borderRadius: 8, my: 4, p: 2.5, ...sx }}
    {...props}
  />
)
