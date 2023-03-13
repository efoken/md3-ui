import { render, screen } from "@md3-ui/test-utils"
import * as React from "react"
import { Text, View } from "react-native"
import { Modal } from "../src/modal"

describe("<Modal />", () => {
  let container: HTMLDivElement

  beforeEach(() => {
    container = document.createElement("div")
    document.body.append(container)
  })

  afterEach(() => {
    container.remove()
  })

  it("should render", () => {
    render(
      <Modal open>
        <View />
      </Modal>,
      { container },
    )

    expect(document.body).toMatchSnapshot()
  })

  describe("prop: open", () => {
    it("should not render the children by default", () => {
      render(
        <Modal open={false}>
          <Text testID="content">Hello World</Text>
        </Modal>,
      )

      expect(screen.queryByTestId("content")).toBeNull()
    })

    it("should render the children inside a div through a portal when open", () => {
      render(
        <Modal open testID="portal">
          <Text>Hello World</Text>
        </Modal>,
      )

      expect(screen.getByTestId("portal")).toHaveProperty("tagName", "DIV")
    })

    it("should make the child focusable without adding a role", () => {
      render(
        <Modal open>
          <Text testID="child">Hello World</Text>
        </Modal>,
      )

      expect(screen.getByTestId("child")).not.toHaveAttribute("role")
      expect(screen.getByTestId("child")).toHaveAttribute("tabindex", "-1")
    })
  })

  describe("prop: disablePortal", () => {
    it("should render the content into the parent", () => {
      render(
        <View testID="parent">
          <Modal open disablePortal>
            <View testID="child" />
          </Modal>
        </View>,
      )
      expect(
        screen.getByTestId("parent").querySelector('[data-testid="child"]'),
      ).not.toBeNull()
    })
  })

  describe("prop: keepMounted", () => {
    it("should keep the children in the DOM", () => {
      render(
        <Modal open={false} keepMounted>
          <Text testID="content">Hello World</Text>
        </Modal>,
        { container },
      )

      expect(screen.getByTestId("content")).not.toBeNull()
    })

    it("should not include the children in the a11y tree", () => {
      const modalRef = React.createRef<View>()
      const { rerender } = render(
        <Modal ref={modalRef} keepMounted open={false}>
          <Text>ModalContent</Text>
        </Modal>,
        { container },
      )
      expect(modalRef.current).toHaveAttribute("aria-hidden", "true")

      rerender(
        <Modal ref={modalRef} keepMounted open>
          <Text>ModalContent</Text>
        </Modal>,
      )
      expect(modalRef.current).not.toHaveAttribute("aria-hidden", "true")
    })
  })
})
