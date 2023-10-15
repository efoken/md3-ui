import { Meta, StoryObj } from "@storybook/react"
import { MdAdd } from "react-icons/md"
import { ExtendedFab, ExtendedFabProps } from "."

export default {
  title: "Components / Buttons / Extended FAB",
  component: ExtendedFab,
} satisfies Meta<ExtendedFabProps>

export const Basic: StoryObj<ExtendedFabProps> = {
  args: {
    icon: <MdAdd />,
    label: "Add",
  },
}
