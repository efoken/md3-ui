import { Meta, Story } from "@storybook/react"
import { Box, BoxProps, Text } from "../src"

export default {
  title: "Layout/Box",
  component: Box,
} as Meta<BoxProps>

export const Basic: Story = () => (
  <Box>
    <Box sx={{ bgColor: "error" }}>
      <Text sx={{ color: "white" }}>Welcome to Box</Text>
    </Box>
    <Box
      sx={{
        position: "absolute",
        bgColor: "error-container",
      }}
    />
  </Box>
)

export const Spacer: Story = () => (
  <Box
    sx={{
      flexDirection: { compact: "column", medium: "row" },
    }}
  >
    <Box sx={{ bgColor: "secondary", size: 100 }}>
      <Text sx={{ color: "white" }}>Box 1</Text>
    </Box>
    <Box sx={{ size: 8 }} />
    <Box sx={{ bgColor: "tertiary", size: 100 }}>
      <Text sx={{ color: "white" }}>Box 2</Text>
    </Box>
  </Box>
)

export const Square: Story = () => (
  <Box
    sx={{
      bgColor: "error-container",
      size: { compact: 40, medium: 60, expanded: 100 },
    }}
  >
    <Box sx={{ size: 60, bgColor: "error" }}>
      <Text sx={{ color: "white" }}>Bee</Text>
    </Box>
  </Box>
)
