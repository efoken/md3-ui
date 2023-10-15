import { Meta, StoryObj } from "@storybook/react"
import { MdAdd } from "react-icons/md"
import {
  ButtonBase,
  ButtonBaseProps,
  ElevatedButton,
  ElevatedButtonProps,
  FilledButton,
  FilledButtonProps,
  OutlinedButton,
  OutlinedButtonProps,
  TextButton,
  TextButtonProps,
  TonalButton,
  TonalButtonProps,
} from "."
import { Stack } from "../stack"

export default {
  title: "Components / Buttons / Common buttons",
  component: ButtonBase,
} satisfies Meta<ButtonBaseProps>

export const Elevated: StoryObj<ElevatedButtonProps> = {
  render: (args) => (
    <Stack direction="row" spacing={4}>
      <ElevatedButton {...args} />
      <ElevatedButton {...args} icon={<MdAdd />} />
    </Stack>
  ),
  args: {
    children: "Elevated button",
  },
}

export const Filled: StoryObj<FilledButtonProps> = {
  render: (args) => (
    <Stack direction="row" spacing={4}>
      <FilledButton {...args} />
      <FilledButton {...args} icon={<MdAdd />} />
    </Stack>
  ),
  args: {
    children: "Filled button",
  },
}

export const Tonal: StoryObj<TonalButtonProps> = {
  render: (args) => (
    <Stack direction="row" spacing={4}>
      <TonalButton {...args} />
      <TonalButton {...args} icon={<MdAdd />} />
    </Stack>
  ),
  args: {
    children: "Tonal button",
  },
}

export const Outlined: StoryObj<OutlinedButtonProps> = {
  render: (args) => (
    <Stack direction="row" spacing={4}>
      <OutlinedButton {...args} />
      <OutlinedButton {...args} icon={<MdAdd />} />
    </Stack>
  ),
  args: {
    children: "Outlined button",
  },
}

export const Text: StoryObj<TextButtonProps> = {
  render: (args) => (
    <Stack direction="row" spacing={4}>
      <TextButton {...args} />
      <TextButton {...args} icon={<MdAdd />} />
    </Stack>
  ),
  args: {
    children: "Text button",
  },
}
