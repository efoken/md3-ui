import { Button } from "@md3-ui/button"
import { Box, Text } from "@md3-ui/layout"
import { Meta, Story } from "@storybook/react"
import * as React from "react"
import { Modal, ModalProps } from "../src"

export default {
  title: "Utils/Modal",
  component: Modal,
} as Meta<ModalProps>

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  // transform: [
  //   { translateX: "-50%" as any },
  //   { translateY: "-50%" as any },
  // ],
  width: 400,
  bgColor: "background",
  borderWidth: 2,
  borderColor: "#000",
  elevation: 24,
  paddingTop: 2,
  paddingX: 4,
  paddingBottom: 4,
}

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
          sx={style}
        >
          <Text as="h2" id="modal-modal-title" variant="headline-small">
            Text in a modal
          </Text>
          <Text nativeID="modal-modal-description" variant="body-medium">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Text>
        </Box>
      </Modal>
    </Box>
  )
}

export const NestedModal: Story<ModalProps> = ({ open: openArg, ...args }) => {
  const [open, setOpen] = React.useState<[boolean, boolean]>([false, false])

  const handleOpenParent = () => setOpen((prevOpen) => [true, prevOpen[1]])
  const handleCloseParent = () => setOpen((prevOpen) => [false, prevOpen[1]])
  const handleOpenChild = () => setOpen((prevOpen) => [prevOpen[0], true])
  const handleCloseChild = () => setOpen((prevOpen) => [prevOpen[0], false])

  return (
    <Box>
      <Button onPress={handleOpenParent}>Open modal</Button>
      <Modal
        open={open[0]}
        accessibilityLabelledBy="parent-modal-title"
        accessibilityDescribedBy="parent-modal-description"
        onClose={handleCloseParent}
        {...args}
      >
        <Box
          style={{
            transform: [
              { translateX: "-50%" as any },
              { translateY: "-50%" as any },
            ],
          }}
          sx={{ ...style, width: 400 }}
        >
          <Text as="h2" id="parent-modal-title" variant="headline-small">
            Text in a modal
          </Text>
          <Text
            nativeID="parent-modal-description"
            variant="body-medium"
            sx={{ marginBottom: 2 }}
          >
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Text>
          <Button onPress={handleOpenChild}>Open child modal</Button>
          <Modal
            hideBackdrop
            open={open[1]}
            accessibilityLabelledBy="child-modal-title"
            accessibilityDescribedBy="child-modal-description"
            onClose={handleCloseChild}
          >
            <Box
              style={{
                transform: [
                  { translateX: "-50%" as any },
                  { translateY: "-50%" as any },
                ],
              }}
              sx={{ ...style, width: 240 }}
            >
              <Text as="h2" id="child-modal-title" variant="headline-small">
                Text in a child modal
              </Text>
              <Text
                nativeID="child-modal-description"
                variant="body-medium"
                sx={{ marginBottom: 2 }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </Text>
              <Button onPress={handleCloseChild}>Close child modal</Button>
            </Box>
          </Modal>
        </Box>
      </Modal>
    </Box>
  )
}
