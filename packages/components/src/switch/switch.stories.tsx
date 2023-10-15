import { Meta, StoryObj } from "@storybook/react"
import { MdCheck } from "react-icons/md"
import { Switch, SwitchProps } from "."
import { Stack } from "../stack"

export default {
  title: "Components/Switch",
  component: Switch,
} satisfies Meta<SwitchProps>

export const Base: StoryObj<SwitchProps> = {
  render: (args) => (
    <Stack direction="row" spacing={4}>
      <Switch {...args} />
      <Switch {...args} defaultChecked />
    </Stack>
  ),
  args: {
    checkedIcon: <MdCheck />,
  },
}
