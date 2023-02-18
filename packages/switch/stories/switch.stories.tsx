import { Check } from "@md3-ui/icons"
import { Stack } from "@md3-ui/layout"
import { Meta, StoryObj } from "@storybook/react"
import { Switch, SwitchProps } from "../src"

export default {
  title: "Components/Switch",
  component: Switch,
} as Meta<SwitchProps>

export const Base: StoryObj<SwitchProps> = {
  render: (args) => (
    <Stack direction="row" spacing={4}>
      <Switch {...args} />
      <Switch {...args} defaultChecked />
    </Stack>
  ),
  args: {
    checkedIcon: <Check />,
  },
}
