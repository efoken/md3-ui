import { describeConformance, render, screen } from "@md3-ui/test-utils"
import { ElevatedButton } from "."

describe("<ElevatedButton />", () => {
  describeConformance(<ElevatedButton>Conformance</ElevatedButton>, () => ({
    inheritComponent: "button",
    refInstanceof: window.HTMLButtonElement,
    skip: ["asProp"],
  }))

  it("should render", () => {
    render(<ElevatedButton>Hello World</ElevatedButton>)
    const button = screen.getByRole("button")

    expect(button).toMatchSnapshot()
  })

  it("should render a button with icon", () => {
    render(
      <ElevatedButton icon={<span>icon</span>}>Hello World</ElevatedButton>,
    )
    const button = screen.getByRole("button")
    const icon = button.querySelector(".ElevatedButton-icon")

    expect(button).toHaveClass("ElevatedButton-root")
    expect(icon).not.toBeNull()
  })

  it("should have a ripple by default", () => {
    render(<ElevatedButton>Hello World</ElevatedButton>)
    const button = screen.getByRole("button")

    expect(button.querySelector(".ButtonBase-rippleContainer")).not.toBeNull()
  })

  it("should disable the ripple", () => {
    render(<ElevatedButton disableRipple>Hello World</ElevatedButton>)
    const button = screen.getByRole("button")

    expect(button.querySelector(".ButtonBase-rippleContainer")).toBeNull()
  })

  it("should automatically change the button to an anchor element when href is provided", () => {
    const { container } = render(
      <ElevatedButton href="https://google.com">Hello</ElevatedButton>,
    )
    const button = container.firstChild

    expect(button).toHaveProperty("nodeName", "A")
    expect(button).not.toHaveAttribute("role")
    expect(button).not.toHaveAttribute("type")
    expect(button).toHaveAttribute("href", "https://google.com")
  })
})
