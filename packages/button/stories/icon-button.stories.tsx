import { Meta, Story } from "@storybook/react"
import { MdMenu } from "react-icons/md"
import { ButtonBase, IconButton, IconButtonProps } from "../src"

export default {
  title: "Components/Buttons/Icon buttons",
  component: IconButton,
  subcomponents: { ButtonBase },
} as Meta<IconButtonProps>

export const Basic: Story<IconButtonProps> = (args) => (
  <IconButton {...args}>
    <MdMenu />
  </IconButton>
)
