import { Add } from "@md3-ui/icons"
import { Stack } from "@md3-ui/layout"
import { Meta, StoryObj } from "@storybook/react"
import {
  Button,
  ButtonBase,
  ButtonBaseProps,
  ButtonProps,
  ElevatedButton,
  FilledButton,
} from "../src"

export default {
  title: "Components / Buttons / Common buttons",
  component: ButtonBase,
  render: (args) => (
    <Stack direction="row" spacing={4}>
      <Button {...args} />
      <Button {...args} icon={<Add />} />
    </Stack>
  ),
} as Meta<ButtonProps>

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

export const Tonal: StoryObj<ButtonProps> = {
  args: {
    children: "Tonal button",
    variant: "tonal",
  },
}

export const Outlined: StoryObj<ButtonProps> = {
  args: {
    children: "Outlined button",
    variant: "outlined",
  },
}

export const Text: StoryObj<ButtonProps> = {
  args: {
    children: "Text button",
    variant: "text",
  },
}
