import { describeConformance, render, screen } from "@md3-ui/test-utils"
import { OutlinedButton } from "../src/outlined-button"

describe("<OutlinedButton />", () => {
  describeConformance(<OutlinedButton>Conformance</OutlinedButton>, () => ({
    inheritComponent: "button",
    refInstanceof: window.HTMLDivElement,
    skip: ["asProp"],
  }))

  it("should render", () => {
    render(<OutlinedButton>Hello World</OutlinedButton>)
    const button = screen.getByRole("button")

    expect(button).toMatchSnapshot()
  })

  it("should render a button with icon", () => {
    render(
      <OutlinedButton icon={<span>icon</span>}>Hello World</OutlinedButton>,
    )
    const button = screen.getByRole("button")
    const icon = button.querySelector('[data-class*="OutlinedButton-icon"]')

    expect(button).toMatchSnapshot()
    expect(icon).not.toBeNull()
  })

  it("should have a ripple by default", () => {
    render(<OutlinedButton>Hello World</OutlinedButton>)
    const button = screen.getByRole("button")

    expect(
      button.querySelector('[data-class*="ButtonBase-rippleContainer"]'),
    ).not.toBeNull()
  })

  it("should disable the ripple", () => {
    render(<OutlinedButton disableRipple>Hello World</OutlinedButton>)
    const button = screen.getByRole("button")

    expect(
      button.querySelector('[data-class*="ButtonBase-rippleContainer"]'),
    ).toBeNull()
  })

  it("should automatically change the button to an anchor element when href is provided", () => {
    const { container } = render(
      <OutlinedButton href="https://google.com">Hello</OutlinedButton>,
    )
    const button = container.firstChild

    expect(button).toHaveProperty("nodeName", "A")
    expect(button).not.toHaveAttribute("role")
    expect(button).not.toHaveAttribute("type")
    expect(button).toHaveAttribute("href", "https://google.com")
  })
})
