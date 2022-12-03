import { Meta, StoryObj } from "@storybook/react"
import { Chip, ChipProps } from "../src"

export default {
  title: "Components/Chips",
  component: Chip,
} as Meta<ChipProps>

export const Assist: StoryObj<ChipProps> = {
  args: {
    label: "Assist chip",
    variant: "assist",
  },
}

export const Filter: StoryObj<ChipProps> = {
  args: {
    label: "Filter chip",
    variant: "filter",
  },
}

export const Input: StoryObj<ChipProps> = {
  args: {
    label: "Input chip",
    variant: "input",
  },
}

export const Suggestion: StoryObj<ChipProps> = {
  args: {
    label: "Suggestion chip",
    variant: "suggestion",
  },
}
