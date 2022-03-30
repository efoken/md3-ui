import { Menu } from "@md3-ui/icons"
import { Meta, Story } from "@storybook/react"
import { ButtonBase, IconButton, IconButtonProps } from "../src"

export default {
  title: "Components/Buttons/Icon buttons",
  component: IconButton,
  subcomponents: { ButtonBase },
} as Meta<IconButtonProps>

export const Basic: Story<IconButtonProps> = (args) => (
  <IconButton {...args}>
    <Menu />
  </IconButton>
)
