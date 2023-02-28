import { Add } from "@md3-ui/icons"
import { Stack } from "@md3-ui/layout"
import { Meta, StoryObj } from "@storybook/react"
import {
  ButtonBase,
  ButtonBaseProps,
  ElevatedButton,
  FilledButton,
  OutlinedButton,
  TextButton,
  TonalButton,
} from "../src"

export default {
  title: "Components / Buttons / Common buttons",
  component: ButtonBase,
} as Meta<ButtonBaseProps>

export const Elevated: StoryObj<ButtonBaseProps> = {
  render: (args) => (
    <Stack direction="row" spacing={4}>
      <ElevatedButton {...args} />
      <ElevatedButton {...args} icon={<Add />} />
    </Stack>
  ),
  args: {
    children: "Elevated button",
  },
}

export const Filled: StoryObj<ButtonBaseProps> = {
  render: (args) => (
    <Stack direction="row" spacing={4}>
      <FilledButton {...args} />
      <FilledButton {...args} icon={<Add />} />
    </Stack>
  ),
  args: {
    children: "Filled button",
  },
}

export const Tonal: StoryObj<ButtonBaseProps> = {
  render: (args) => (
    <Stack direction="row" spacing={4}>
      <TonalButton {...args} />
      <TonalButton {...args} icon={<Add />} />
    </Stack>
  ),
  args: {
    children: "Tonal button",
  },
}

export const Outlined: StoryObj<ButtonBaseProps> = {
  render: (args) => (
    <Stack direction="row" spacing={4}>
      <OutlinedButton {...args} />
      <OutlinedButton {...args} icon={<Add />} />
    </Stack>
  ),
  args: {
    children: "Outlined button",
  },
}

export const Text: StoryObj<ButtonBaseProps> = {
  render: (args) => (
    <Stack direction="row" spacing={4}>
      <TextButton {...args} />
      <TextButton {...args} icon={<Add />} />
    </Stack>
  ),
  args: {
    children: "Text button",
  },
}
