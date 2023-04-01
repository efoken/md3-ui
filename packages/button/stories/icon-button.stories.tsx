import { SettingsOutlined } from "@md3-ui/icons"
import { Meta, StoryObj } from "@storybook/react"
import {
  FilledIconButton,
  FilledIconButtonProps,
  IconButton,
  IconButtonProps,
  OutlinedIconButton,
  OutlinedIconButtonProps,
  TonalIconButton,
  TonalIconButtonProps,
} from "../src"

export default {
  title: "Components / Buttons / Icon buttons",
  component: IconButton,
  args: {
    "aria-label": "Settings",
    children: <SettingsOutlined />,
  },
} as Meta<IconButtonProps>

export const Filled: StoryObj<FilledIconButtonProps> = {
  render: (args) => <FilledIconButton {...args} />,
}

export const Tonal: StoryObj<TonalIconButtonProps> = {
  render: (args) => <TonalIconButton {...args} />,
}

export const Outlined: StoryObj<OutlinedIconButtonProps> = {
  render: (args) => <OutlinedIconButton {...args} />,
}

export const Standard: StoryObj<IconButtonProps> = {
  render: (args) => <IconButton {...args} />,
}
