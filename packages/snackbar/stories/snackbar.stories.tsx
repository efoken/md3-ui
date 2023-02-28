import { TextButton } from "@md3-ui/button"
import { Stack } from "@md3-ui/layout"
import { Meta, StoryObj } from "@storybook/react"
import { Snackbar, SnackbarContent, SnackbarProps } from "../src"

export default {
  title: "Components/Snackbar",
  component: Snackbar,
} as Meta<SnackbarProps>

export const Base: StoryObj<SnackbarProps> = {
  render: (args) => <Snackbar {...args} />,
  args: {
    message: "Single-line snackbar with action",
  },
}

export const Configurations: StoryObj<SnackbarProps> = {
  render: () => (
    <Stack spacing={4} sx={{ width: "100%" }}>
      <SnackbarContent message="Single-line snackbar" />
      <SnackbarContent
        action={<TextButton>Action</TextButton>}
        message="Single-line snackbar with action"
      />
      <SnackbarContent message={`Two-line snackbar\nwithout action`} />
      <SnackbarContent
        action={<TextButton>Action</TextButton>}
        message={`Two-line snackbar\nwith action`}
      />
      <SnackbarContent
        action={<TextButton>Longer action</TextButton>}
        message={`Two-line snackbar\nwith longer action`}
      />
    </Stack>
  ),
}
