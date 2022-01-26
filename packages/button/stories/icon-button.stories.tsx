import { Meta, Story } from "@storybook/react"
import { MdMenu } from "react-icons/md"
import { IconButton, IconButtonProps } from "../src"

export default {
  title: "Components/Buttons/Icon buttons",
  component: IconButton,
  argTypes: {
    disabled: { type: "boolean" },
  },
} as Meta<IconButtonProps>

export const Basic: Story<IconButtonProps> = (args) => (
  <IconButton {...args}>
    <MdMenu />
  </IconButton>
)
