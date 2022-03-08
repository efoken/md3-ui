import { Meta, Story } from "@storybook/react"
import { Chip, ChipProps } from "../src"

export default {
  title: "Components/Chips",
  component: Chip,
} as Meta<ChipProps>

export const Assist: Story<ChipProps> = (args) => <Chip {...args} />

Assist.args = {
  label: "Assist chip",
  variant: "assist",
}

export const Filter: Story<ChipProps> = (args) => <Chip {...args} />

Filter.args = {
  label: "Filter chip",
  variant: "filter",
}

export const Input: Story<ChipProps> = (args) => <Chip {...args} />

Input.args = {
  label: "Input chip",
  variant: "input",
}

export const Suggestion: Story<ChipProps> = (args) => <Chip {...args} />

Suggestion.args = {
  label: "Suggestion chip",
  variant: "suggestion",
}
