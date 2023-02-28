import { ElevatedButton } from "@md3-ui/button"
import { Box, Text } from "@md3-ui/layout"
import { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import { Modal, ModalProps } from "../src"

export default {
  title: "Utils/Modal",
  component: Modal,
} as Meta<ModalProps>

const style = {
  bgColor: "background" as const,
  borderColor: "#000",
  borderWidth: 2,
  elevation: "level5" as const,
  left: "50%",
  pb: 8,
  position: "absolute" as const,
  pt: 4,
  px: 8,
  top: "50%",
  transform: "translateX(-50%) translateY(-50%)",
  width: 400,
}

export const Basic: StoryObj<ModalProps> = {
  render: ({ open: openArg, ...args }) => {
    const [open, setOpen] = React.useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
      <Box>
        <ElevatedButton onPress={handleOpen}>Open modal</ElevatedButton>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          onClose={handleClose}
          {...args}
        >
          <Box sx={style}>
            <Text as="h2" id="modal-modal-title" variant="headlineSmall">
              Text in a modal
            </Text>
            <Text id="modal-modal-description" variant="bodyMedium">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Text>
          </Box>
        </Modal>
      </Box>
    )
  },
}

export const NestedModal: StoryObj<ModalProps> = {
  render: ({ open: openArg, ...args }) => {
    const [open, setOpen] = React.useState<[boolean, boolean]>([false, false])

    const handleOpenParent = () => setOpen((prevOpen) => [true, prevOpen[1]])
    const handleCloseParent = () => setOpen((prevOpen) => [false, prevOpen[1]])
    const handleOpenChild = () => setOpen((prevOpen) => [prevOpen[0], true])
    const handleCloseChild = () => setOpen((prevOpen) => [prevOpen[0], false])

    return (
      <Box>
        <ElevatedButton onPress={handleOpenParent}>Open modal</ElevatedButton>
        <Modal
          open={open[0]}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
          onClose={handleCloseParent}
          {...args}
        >
          <Box sx={{ ...style, width: 400 }}>
            <Text as="h2" id="parent-modal-title" variant="headlineSmall">
              Text in a modal
            </Text>
            <Text
              id="parent-modal-description"
              variant="bodyMedium"
              sx={{ mb: 4 }}
            >
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Text>
            <ElevatedButton onPress={handleOpenChild}>
              Open child modal
            </ElevatedButton>
            <Modal
              hideScrim
              open={open[1]}
              aria-labelledby="child-modal-title"
              aria-describedby="child-modal-description"
              onClose={handleCloseChild}
            >
              <Box sx={{ ...style, width: 240 }}>
                <Text as="h2" id="child-modal-title" variant="headlineSmall">
                  Text in a child modal
                </Text>
                <Text
                  id="child-modal-description"
                  variant="bodyMedium"
                  sx={{ mb: 4 }}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </Text>
                <ElevatedButton onPress={handleCloseChild}>
                  Close child modal
                </ElevatedButton>
              </Box>
            </Modal>
          </Box>
        </Modal>
      </Box>
    )
  },
}
