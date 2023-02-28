import { describeConformance, render, screen } from "@md3-ui/test-utils"
import { TonalButton } from "../src/tonal-button"

describe("<TonalButton />", () => {
  describeConformance(<TonalButton>Conformance</TonalButton>, () => ({
    inheritComponent: "button",
    refInstanceof: window.HTMLDivElement,
    skip: ["asProp"],
  }))

  it("should render", () => {
    render(<TonalButton>Hello World</TonalButton>)
    const button = screen.getByRole("button")

    expect(button).toMatchSnapshot()
  })

  it("should render a button with icon", () => {
    render(<TonalButton icon={<span>icon</span>}>Hello World</TonalButton>)
    const button = screen.getByRole("button")
    const icon = button.querySelector('[data-class*="TonalButton-icon"]')

    expect(button).toMatchSnapshot()
    expect(icon).not.toBeNull()
  })

  it("should have a ripple by default", () => {
    render(<TonalButton>Hello World</TonalButton>)
    const button = screen.getByRole("button")

    expect(
      button.querySelector('[data-class*="ButtonBase-rippleContainer"]'),
    ).not.toBeNull()
  })

  it("should disable the ripple", () => {
    render(<TonalButton disableRipple>Hello World</TonalButton>)
    const button = screen.getByRole("button")

    expect(
      button.querySelector('[data-class*="ButtonBase-rippleContainer"]'),
    ).toBeNull()
  })

  it("should automatically change the button to an anchor element when href is provided", () => {
    const { container } = render(
      <TonalButton href="https://google.com">Hello</TonalButton>,
    )
    const button = container.firstChild

    expect(button).toHaveProperty("nodeName", "A")
    expect(button).not.toHaveAttribute("role")
    expect(button).not.toHaveAttribute("type")
    expect(button).toHaveAttribute("href", "https://google.com")
  })
})
