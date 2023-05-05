import { describeConformance, render, screen } from "@md3-ui/test-utils"
import { FilledButton } from "../src/filled-button"

describe("<FilledButton />", () => {
  describeConformance(<FilledButton>Conformance</FilledButton>, () => ({
    inheritComponent: "button",
    refInstanceof: window.HTMLButtonElement,
    skip: ["asProp"],
  }))

  it("should render", () => {
    render(<FilledButton>Hello World</FilledButton>)
    const button = screen.getByRole("button")

    expect(button).toMatchSnapshot()
  })

  it("should render a button with icon", () => {
    render(<FilledButton icon={<span>icon</span>}>Hello World</FilledButton>)
    const button = screen.getByRole("button")
    const icon = button.querySelector(".FilledButton-icon")

    expect(button).toHaveClass("FilledButton-root")
    expect(icon).not.toBeNull()
  })

  it("should have a ripple by default", () => {
    render(<FilledButton>Hello World</FilledButton>)
    const button = screen.getByRole("button")

    expect(button.querySelector(".ButtonBase-rippleContainer")).not.toBeNull()
  })

  it("should disable the ripple", () => {
    render(<FilledButton disableRipple>Hello World</FilledButton>)
    const button = screen.getByRole("button")

    expect(button.querySelector(".ButtonBase-rippleContainer")).toBeNull()
  })

  it("should automatically change the button to an anchor element when href is provided", () => {
    const { container } = render(
      <FilledButton href="https://google.com">Hello</FilledButton>,
    )
    const button = container.firstChild

    expect(button).toHaveProperty("nodeName", "A")
    expect(button).not.toHaveAttribute("role")
    expect(button).not.toHaveAttribute("type")
    expect(button).toHaveAttribute("href", "https://google.com")
  })
})
