import { Meta, StoryObj } from "@storybook/react"
import { CircularProgress, CircularProgressProps } from "../src"

export default {
  title: "Components / Progress indicators / Circular progress",
  component: CircularProgress,
  args: {
    "aria-label": "Circular progress",
  },
} as Meta<CircularProgressProps>

export const Basic: StoryObj<CircularProgressProps> = {}
