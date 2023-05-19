import { Meta, StoryObj } from "@storybook/react"
import { LinearProgress, LinearProgressProps } from "../src"

export default {
  title: "Components / Progress indicators / Linear progress",
  component: LinearProgress,
  args: {
    "aria-label": "Linear progress",
  },
} as Meta<LinearProgressProps>

export const Basic: StoryObj<LinearProgressProps> = {}
