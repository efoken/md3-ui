import { Meta, StoryObj } from "@storybook/react"
import { MdAdd } from "react-icons/md"
import { Fab, FabProps } from "."

export default {
  title: "Components / Buttons / FAB",
  component: Fab,
} satisfies Meta<FabProps>

export const Basic: StoryObj<FabProps> = {
  args: {
    icon: <MdAdd />,
  },
}
