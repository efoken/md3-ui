import { Meta, StoryObj } from "@storybook/react"
import { LinearProgress, LinearProgressProps } from "."

export default {
  title: "Components / Progress indicators / Linear progress",
  component: LinearProgress,
  args: {
    "aria-label": "Linear progress",
  },
} satisfies Meta<LinearProgressProps>

export const Basic: StoryObj<LinearProgressProps> = {}
