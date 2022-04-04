import { IconProps } from "@md3-ui/icon"
import { Box, Stack, Text } from "@md3-ui/layout"
import { Meta, Story } from "@storybook/react"
import { Add } from "../src/add"

export default {
  title: "Components/Icons",
} as Meta<IconProps>

export const Icons: Story<IconProps> = () => (
  <Box
    style={{
      gridTemplateColumns: `repeat(auto-fill, minmax(8rem, 1fr))`,
    }}
  >
    <Stack direction="column" spacing={3}>
      <Add height={40} width={40} />
      <Text>DirectionsRailway</Text>
    </Stack>
  </Box>
)
