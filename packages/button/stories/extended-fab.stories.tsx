import { Add } from "@md3-ui/icons"
import { Meta, StoryObj } from "@storybook/react"
import { ExtendedFab, ExtendedFabProps } from "../src"

export default {
  title: "Components / Buttons / Extended FAB",
  component: ExtendedFab,
} as Meta<ExtendedFabProps>

export const Basic: StoryObj<ExtendedFabProps> = {
  args: {
    icon: <Add />,
    label: "Add",
  },
}
