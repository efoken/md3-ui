import { Meta, Story } from "@storybook/react"
import { Stack } from "@md3-ui/layout"
import { MdAdd } from "react-icons/md"
import { Button, ButtonProps } from "../src"

export default {
  title: "Components/Buttons/Common buttons",
  component: Button,
  argTypes: {
    disabled: { type: "boolean" },
  },
} as Meta<ButtonProps>

export const Elevated: Story<ButtonProps> = (args) => (
  <Stack direction="row" spacing={2}>
    <Button {...args}>Elevated button</Button>
    <Button {...args} icon={<MdAdd />}>
      Elevated button
    </Button>
  </Stack>
)

export const Filled: Story<ButtonProps> = (args) => (
  <Stack direction="row" spacing={2}>
    <Button {...args} variant="filled">
      Filled button
    </Button>
    <Button {...args} variant="filled" icon={<MdAdd />}>
      Filled button
    </Button>
  </Stack>
)

export const Tonal: Story<ButtonProps> = (args) => (
  <Stack direction="row" spacing={2}>
    <Button {...args} variant="tonal">
      Tonal button
    </Button>
    <Button {...args} variant="tonal" icon={<MdAdd />}>
      Tonal button
    </Button>
  </Stack>
)

export const Outlined: Story<ButtonProps> = (args) => (
  <Stack direction="row" spacing={2}>
    <Button {...args} variant="outlined">
      Outlined button
    </Button>
    <Button {...args} variant="outlined" icon={<MdAdd />}>
      Outlined button
    </Button>
  </Stack>
)

export const Text: Story<ButtonProps> = (args) => (
  <Stack direction="row" spacing={2}>
    <Button {...args} variant="text">
      Text button
    </Button>
    <Button {...args} variant="text" icon={<MdAdd />}>
      Text button
    </Button>
  </Stack>
)
