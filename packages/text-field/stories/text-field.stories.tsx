import { IconButton } from "@md3-ui/button"
import { Meta, Story } from "@storybook/react"
import { Cancel } from "../../icons/src/cancel"
import { TextField, TextFieldProps, TextInputIcon } from "../src"

export default {
  title: "Components/Text field",
  component: TextField,
} as Meta<TextFieldProps>

export const Basic: Story<TextFieldProps> = (args) => <TextField {...args} />

Basic.args = {
  label: "Label",
  name: "name",
  nativeID: "outlined-basic",
  placeholder: "Placeholder",
  variant: "outlined",
}

export const EndIcon: Story<TextFieldProps> = (args) => <TextField {...args} />

EndIcon.args = {
  label: "Label",
  name: "name",
  placeholder: "Placeholder",
  endIcon: (
    <TextInputIcon position="end">
      <IconButton edge="end">
        <Cancel />
      </IconButton>
    </TextInputIcon>
  ),
  variant: "outlined",
}
