import { Card } from "@md3-ui/core"
import * as React from "react"

interface PreviewProps {
  children?: React.ReactNode
}

export const Preview: React.FC<PreviewProps> = ({ children }) => (
  <Card variant="filled" sx={{ bgColor: "surfaceContainer", px: 1, py: 5 }}>
    {children}
  </Card>
)
