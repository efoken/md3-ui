import { describeConformance, render, screen } from "@md3-ui/test-utils"
import * as React from "react"
import { Button } from "../src/button"

describe("<Button />", () => {
  describeConformance(<Button>Conformance</Button>, () => ({
    inheritComponent: "div",
    refInstanceof: window.HTMLDivElement,
    skip: ["asProp"],
  }))

  it("should render", () => {
    render(<Button>Hello World</Button>)
    const button = screen.getByRole("button")

    expect(button).toMatchSnapshot()
  })

  it("should render an elevated button", () => {
    render(<Button variant="elevated">Hello World</Button>)
    const button = screen.getByRole("button")

    expect(button).toMatchSnapshot()
  })

  it("should render a filled button", () => {
    render(<Button variant="filled">Hello World</Button>)
    const button = screen.getByRole("button")

    expect(button).toMatchSnapshot()
  })

  it("should render a tonal button", () => {
    render(<Button variant="tonal">Hello World</Button>)
    const button = screen.getByRole("button")

    expect(button).toMatchSnapshot()
  })

  it("should render an outlined button", () => {
    render(<Button variant="outlined">Hello World</Button>)
    const button = screen.getByRole("button")

    expect(button).toMatchSnapshot()
  })

  it("should render a text button", () => {
    render(<Button variant="text">Hello World</Button>)
    const button = screen.getByRole("button")

    expect(button).toMatchSnapshot()
  })

  it("should render a button with icon", () => {
    render(<Button icon={<span>icon</span>}>Hello World</Button>)
    const button = screen.getByRole("button")
    const icon = button.querySelector('[data-class*="Button-icon"]')

    expect(button).toMatchSnapshot()
    expect(icon).not.toBeNull()
  })

  it("should have a ripple by default", () => {
    render(<Button>Hello World</Button>)
    const button = screen.getByRole("button")

    expect(
      button.querySelector('[data-class*="ButtonBase-rippleContainer"]'),
    ).not.toBeNull()
  })

  it("should disable the ripple", () => {
    render(<Button disableRipple>Hello World</Button>)
    const button = screen.getByRole("button")

    expect(
      button.querySelector('[data-class*="ButtonBase-rippleContainer"]'),
    ).toBeNull()
  })

  it("should automatically change the button to an anchor element when href is provided", () => {
    const { container } = render(
      <Button href="https://google.com">Hello</Button>,
    )
    const button = container.firstChild

    expect(button).toHaveProperty("nodeName", "A")
    expect(button).not.toHaveAttribute("role")
    expect(button).not.toHaveAttribute("type")
    expect(button).toHaveAttribute("href", "https://google.com")
  })
})
