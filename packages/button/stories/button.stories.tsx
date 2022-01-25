import { Stack } from "@md3-ui/layout"
import { MdAdd } from "react-icons/md"
import { Button } from "../src"

export default {
  title: "Components/Inputs/Button",
}

export const Elevated = () => (
  <Stack direction="row" spacing={2}>
    <Button>Elevated button</Button>
    <Button icon={<MdAdd />}>Elevated button</Button>
  </Stack>
)

export const Filled = () => (
  <Stack direction="row" spacing={2}>
    <Button variant="filled">Filled button</Button>
    <Button variant="filled" icon={<MdAdd />}>
      Filled button
    </Button>
  </Stack>
)

export const Tonal = () => (
  <Stack direction="row" spacing={2}>
    <Button variant="tonal">Tonal button</Button>
    <Button variant="tonal" icon={<MdAdd />}>
      Tonal button
    </Button>
  </Stack>
)

export const Outlined = () => (
  <Stack direction="row" spacing={2}>
    <Button variant="outlined">Outlined button</Button>
    <Button variant="outlined" icon={<MdAdd />}>
      Outlined button
    </Button>
  </Stack>
)

export const Text = () => (
  <Stack direction="row" spacing={2}>
    <Button variant="text">Text button</Button>
    <Button variant="text" icon={<MdAdd />}>
      Text button
    </Button>
  </Stack>
)
