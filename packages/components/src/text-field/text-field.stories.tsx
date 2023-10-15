import { Meta, StoryObj } from "@storybook/react"
import { MdCancel } from "react-icons/md"
import { TextField, TextFieldProps, TextInputIcon } from "."
import { IconButton } from "../button"

export default {
  title: "Components/Text field",
  component: TextField,
} satisfies Meta<TextFieldProps>

export const Basic: StoryObj<TextFieldProps> = {
  args: {
    id: "outlined-basic",
    label: "Label",
    name: "name",
    placeholder: "Placeholder",
    variant: "outlined",
  },
}

export const EndIcon: StoryObj<TextFieldProps> = {
  args: {
    label: "Label",
    name: "name",
    placeholder: "Placeholder",
    endIcon: (
      <TextInputIcon position="end">
        <IconButton edge="end">
          <MdCancel />
        </IconButton>
      </TextInputIcon>
    ),
    variant: "outlined",
  },
}
