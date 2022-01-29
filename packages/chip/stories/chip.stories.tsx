import { Meta, Story } from "@storybook/react"
import { Chip, ChipProps } from "../src"

export default {
  title: "Components/Chips",
  component: Chip,
} as Meta<ChipProps>

export const Assist: Story = () => <Chip variant="assist" label="Assist chip" />

export const Filter: Story = () => <Chip variant="filter" label="Filter chip" />

export const Input: Story = () => <Chip variant="input" label="Input chip" />

export const Suggestion: Story = () => (
  <Chip variant="suggestion" label="Suggestion chip" />
)
