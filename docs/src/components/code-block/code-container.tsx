import { Box, BoxProps } from "@md3-ui/core"

export const CodeContainer: React.FC<BoxProps> = ({ sx, ...props }) => (
  <Box
    sx={{ bgColor: "#1e1e1e", borderRadius: 8, my: 8, p: 5, ...sx }}
    {...props}
  />
)
