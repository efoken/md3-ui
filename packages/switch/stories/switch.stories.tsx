import { Check } from "@md3-ui/icons"
import { Stack } from "@md3-ui/layout"
import { Meta, Story } from "@storybook/react"
import { Switch, SwitchProps } from "../src"

export default {
  title: "Components/Switch",
  component: Switch,
} as Meta<SwitchProps>

export const Base: Story<SwitchProps> = (args) => (
  <Stack direction="row" spacing={2}>
    <Switch {...args} />
    <Switch {...args} defaultChecked />
  </Stack>
)

Base.args = {
  checkedIcon: <Check />,
}
