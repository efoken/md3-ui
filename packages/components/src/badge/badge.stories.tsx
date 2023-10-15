import { Meta, StoryObj } from "@storybook/react"
import { MdOutlineHome } from "react-icons/md"
import { Badge, BadgeProps } from "."

export default {
  title: "Layout/Badge",
  component: Badge,
  argTypes: {
    value: { type: "number" },
  },
} satisfies Meta<BadgeProps>

export const Basic: StoryObj<BadgeProps> = {
  render: (args) => (
    <Badge {...args}>
      <MdOutlineHome size={24} />
    </Badge>
  ),
  args: {
    value: 4,
  },
}
