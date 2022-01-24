/* eslint-disable import/no-extraneous-dependencies */
import { MdAdd } from "react-icons/md"
import { Button } from "../src"

export default {
  title: "Button",
}

export const Elevated = () => (
  <>
    <Button>Elevated button</Button>
    <Button icon={<MdAdd />}>Elevated button</Button>
  </>
)

export const Filled = () => (
  <>
    <Button variant="filled">Filled button</Button>
    <Button variant="filled" icon={<MdAdd />}>
      Filled button
    </Button>
  </>
)

export const Tonal = () => (
  <>
    <Button variant="tonal">Tonal button</Button>
    <Button variant="tonal" icon={<MdAdd />}>
      Tonal button
    </Button>
  </>
)

export const Outlined = () => (
  <>
    <Button variant="outlined">Outlined button</Button>
    <Button variant="outlined" icon={<MdAdd />}>
      Outlined button
    </Button>
  </>
)

export const Text = () => (
  <>
    <Button variant="text">Text button</Button>
    <Button variant="text" icon={<MdAdd />}>
      Text button
    </Button>
  </>
)
