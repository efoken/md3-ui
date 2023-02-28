import { SettingsOutlined } from "@md3-ui/icons"
import { Meta, StoryObj } from "@storybook/react"
import { IconButton, IconButtonProps } from "../src"

export default {
  title: "Components / Buttons / Icon buttons",
  component: IconButton,
  render: (args) => (
    <IconButton {...args}>
      <SettingsOutlined />
    </IconButton>
  ),
} as Meta<IconButtonProps>

export const Filled: StoryObj<IconButtonProps> = {
  args: {
    variant: "filled",
  },
}

export const Tonal: StoryObj<IconButtonProps> = {
  args: {
    variant: "tonal",
  },
}

export const Outlined: StoryObj<IconButtonProps> = {
  args: {
    variant: "outlined",
  },
}

export const Standard: StoryObj<IconButtonProps> = {
  args: {
    variant: "standard",
  },
}
