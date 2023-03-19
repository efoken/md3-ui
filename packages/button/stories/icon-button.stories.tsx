import { SettingsOutlined } from "@md3-ui/icons"
import { Meta, StoryObj } from "@storybook/react"
import {
  FilledIconButton,
  IconButton,
  IconButtonProps,
  OutlinedIconButton,
  TonalIconButton,
} from "../src"

export default {
  title: "Components / Buttons / Icon buttons",
  component: IconButton,
  args: {
    "aria-label": "Settings",
    children: <SettingsOutlined />,
  },
} as Meta<IconButtonProps>

export const Filled: StoryObj<IconButtonProps> = {
  render: (args) => <FilledIconButton {...args} />,
}

export const Tonal: StoryObj<IconButtonProps> = {
  render: (args) => <TonalIconButton {...args} />,
}

export const Outlined: StoryObj<IconButtonProps> = {
  render: (args) => <OutlinedIconButton {...args} />,
}

export const Standard: StoryObj<IconButtonProps> = {
  render: (args) => <IconButton {...args} />,
}
