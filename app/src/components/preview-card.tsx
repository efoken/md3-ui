import { Box } from "@md3-ui/core"
import * as React from "react"

interface PreviewCardProps {
  children?: React.ReactNode
}

export const PreviewCard: React.FC<PreviewCardProps> = ({ children }) => (
  <Box
    sx={{
      alignItems: "center",
      bgColor: "background",
      borderColor: "outline",
      borderRadius: (theme) => theme.sys.shape.corner.medium,
      borderWidth: 1,
      gap: 4,
      mb: 4,
      px: [2, 6],
      py: 4,
    }}
  >
    {children}
  </Box>
)
