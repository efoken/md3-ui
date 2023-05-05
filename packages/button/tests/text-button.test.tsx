import { describeConformance, render, screen } from "@md3-ui/test-utils"
import { TextButton } from "../src/text-button"

describe("<TextButton />", () => {
  describeConformance(<TextButton>Conformance</TextButton>, () => ({
    inheritComponent: "button",
    refInstanceof: window.HTMLButtonElement,
    skip: ["asProp"],
  }))

  it("should render", () => {
    render(<TextButton>Hello World</TextButton>)
    const button = screen.getByRole("button")

    expect(button).toMatchSnapshot()
  })

  it("should render a button with icon", () => {
    render(<TextButton icon={<span>icon</span>}>Hello World</TextButton>)
    const button = screen.getByRole("button")
    const icon = button.querySelector(".TextButton-icon")

    expect(button).toHaveClass("TextButton-root")
    expect(icon).not.toBeNull()
  })

  it("should have a ripple by default", () => {
    render(<TextButton>Hello World</TextButton>)
    const button = screen.getByRole("button")

    expect(button.querySelector(".ButtonBase-rippleContainer")).not.toBeNull()
  })

  it("should disable the ripple", () => {
    render(<TextButton disableRipple>Hello World</TextButton>)
    const button = screen.getByRole("button")

    expect(button.querySelector(".ButtonBase-rippleContainer")).toBeNull()
  })

  it("should automatically change the button to an anchor element when href is provided", () => {
    const { container } = render(
      <TextButton href="https://google.com">Hello</TextButton>,
    )
    const button = container.firstChild

    expect(button).toHaveProperty("nodeName", "A")
    expect(button).not.toHaveAttribute("role")
    expect(button).not.toHaveAttribute("type")
    expect(button).toHaveAttribute("href", "https://google.com")
  })
})
