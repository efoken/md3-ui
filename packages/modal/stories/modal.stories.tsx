import { Button } from "@md3-ui/button"
import { Box, Text } from "@md3-ui/layout"
import { Meta, Story } from "@storybook/react"
import * as React from "react"
import { Modal, ModalProps } from "../src"

export default {
  title: "Components/Modal",
  component: Modal,
} as Meta<ModalProps>

export const Basic: Story<ModalProps> = ({ open: openArg, ...args }) => {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Box>
      <Button onPress={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        accessibilityLabelledBy="modal-modal-title"
        accessibilityDescribedBy="modal-modal-description"
        onClose={handleClose}
        {...args}
      >
        <Box
          style={{
            transform: [
              { translateX: "-50%" as any },
              { translateY: "-50%" as any },
            ],
          }}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 400,
            bgColor: "background",
            borderWidth: 2,
            borderColor: "#000",
            elevation: 24,
            padding: 4,
          }}
        >
          <Text nativeID="modal-modal-title" variant="headline-small">
            Text in a modal
          </Text>
          <Text nativeID="modal-modal-description" sx={{ marginTop: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Text>
        </Box>
      </Modal>
    </Box>
  )
}
