import { Add } from "@md3-ui/icons"
import { Meta, StoryObj } from "@storybook/react"
import { Fab, FabProps } from "../src"

export default {
  title: "Components / Buttons / FAB",
  component: Fab,
} as Meta<FabProps>

export const Basic: StoryObj<FabProps> = {
  args: {
    icon: <Add />,
  },
}
