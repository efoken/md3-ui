import { Add } from "@md3-ui/icons"
import { Stack } from "@md3-ui/layout"
import { Meta, StoryObj } from "@storybook/react"
import { Button, ButtonBase, ButtonProps } from "../src"

export default {
  title: "Components/Buttons/Common buttons",
  component: Button,
  subcomponents: { ButtonBase },
} as Meta<ButtonProps>

export const Elevated: StoryObj<ButtonProps> = {
  render: (args) => (
    <Stack direction="row" spacing={2}>
      <Button {...args} />
      <Button {...args} icon={<Add />} />
    </Stack>
  ),
  args: {
    children: "Elevated button",
    variant: "elevated",
  },
}

export const Filled: StoryObj<ButtonProps> = {
  render: (args) => (
    <Stack direction="row" spacing={2}>
      <Button {...args} />
      <Button {...args} icon={<Add />} />
    </Stack>
  ),
  args: {
    children: "Filled button",
    variant: "filled",
  },
}

export const Tonal: StoryObj<ButtonProps> = {
  render: (args) => (
    <Stack direction="row" spacing={2}>
      <Button {...args} />
      <Button {...args} icon={<Add />} />
    </Stack>
  ),
  args: {
    children: "Tonal button",
    variant: "tonal",
  },
}

export const Outlined: StoryObj<ButtonProps> = {
  render: (args) => (
    <Stack direction="row" spacing={2}>
      <Button {...args} />
      <Button {...args} icon={<Add />} />
    </Stack>
  ),
  args: {
    children: "Outlined button",
    variant: "outlined",
  },
}

export const Text: StoryObj<ButtonProps> = {
  render: (args) => (
    <Stack direction="row" spacing={2}>
      <Button {...args} />
      <Button {...args} icon={<Add />} />
    </Stack>
  ),
  args: {
    children: "Text button",
    variant: "text",
  },
}
