import { Button } from "@md3-ui/button"
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
        action={<Button variant="text">Action</Button>}
        message="Single-line snackbar with action"
      />
      <SnackbarContent message={`Two-line snackbar\nwithout action`} />
      <SnackbarContent
        action={<Button variant="text">Action</Button>}
        message={`Two-line snackbar\nwith action`}
      />
      <SnackbarContent
        action={<Button variant="text">Longer action</Button>}
        message={`Two-line snackbar\nwith longer action`}
      />
    </Stack>
  ),
}
