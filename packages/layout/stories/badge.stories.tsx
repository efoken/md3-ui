import { Mail } from "@md3-ui/icons"
import { Meta, Story } from "@storybook/react"
import { Badge, BadgeProps } from "../src"

export default {
  title: "Layout/Badge",
  component: Badge,
} as Meta<BadgeProps>

export const Basic: Story<BadgeProps> = (args) => (
  <Badge {...args}>
    <Mail />
  </Badge>
)

Basic.args = {
  badgeContent: 4,
}
