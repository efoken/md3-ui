import { Stack } from "@md3-ui/layout"
import { Meta, Story } from "@storybook/react"
import { MdAdd } from "react-icons/md"
import { Button, ButtonBase, ButtonProps } from "../src"

export default {
  title: "Components/Buttons/Common buttons",
  component: Button,
  subcomponents: { ButtonBase },
} as Meta<ButtonProps>

export const Elevated: Story<ButtonProps> = (args) => (
  <Stack direction="row" spacing={2}>
    <Button {...args} />
    <Button {...args} icon={<MdAdd />} />
  </Stack>
)

Elevated.args = {
  children: "Elevated button",
  variant: "elevated",
}

export const Filled: Story<ButtonProps> = (args) => (
  <Stack direction="row" spacing={2}>
    <Button {...args} />
    <Button {...args} icon={<MdAdd />} />
  </Stack>
)

Filled.args = {
  children: "Filled button",
  variant: "filled",
}

export const Tonal: Story<ButtonProps> = (args) => (
  <Stack direction="row" spacing={2}>
    <Button {...args} />
    <Button {...args} icon={<MdAdd />} />
  </Stack>
)

Tonal.args = {
  children: "Tonal button",
  variant: "tonal",
}

export const Outlined: Story<ButtonProps> = (args) => (
  <Stack direction="row" spacing={2}>
    <Button {...args} />
    <Button {...args} icon={<MdAdd />} />
  </Stack>
)

Outlined.args = {
  children: "Outlined button",
  variant: "outlined",
}

export const Text: Story<ButtonProps> = (args) => (
  <Stack direction="row" spacing={2}>
    <Button {...args} />
    <Button {...args} icon={<MdAdd />} />
  </Stack>
)

Text.args = {
  children: "Text button",
  variant: "text",
}
