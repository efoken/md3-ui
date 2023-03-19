import { HomeOutlined } from "@md3-ui/icons"
import { Meta, StoryObj } from "@storybook/react"
import { Badge, BadgeProps } from "../src"

export default {
  title: "Layout/Badge",
  component: Badge,
  argTypes: {
    value: { type: "number" },
  },
} as Meta<BadgeProps>

export const Basic: StoryObj<BadgeProps> = {
  render: (args) => (
    <Badge {...args}>
      <HomeOutlined size="large" />
    </Badge>
  ),
  args: {
    value: 4,
  },
}
