import { Icon } from "@md3-ui/icon"
import { describeConformance, render, screen } from "@md3-ui/test-utils"
import { OutlinedIconButton } from "../src/outlined-icon-button"

describe("<OutlinedIconButton />", () => {
  describeConformance(
    <OutlinedIconButton>
      <Icon testID="icon" />
    </OutlinedIconButton>,
    () => ({
      inheritComponent: "button",
      refInstanceof: window.HTMLButtonElement,
      skip: ["asProp"],
    }),
  )

  it("should render", () => {
    render(
      <OutlinedIconButton>
        <Icon testID="icon" />
      </OutlinedIconButton>,
    )
    const button = screen.getByRole("button")
    const icon = screen.getByTestId("icon")

    expect(button).toMatchSnapshot()
    expect(icon).not.toBeNull()
  })

  it("should have a ripple by default", () => {
    render(
      <OutlinedIconButton>
        <Icon />
      </OutlinedIconButton>,
    )
    const button = screen.getByRole("button")

    expect(
      button.querySelector('[data-class*="ButtonBase-rippleContainer"]'),
    ).not.toBeNull()
  })

  it("should disable the ripple", () => {
    render(
      <OutlinedIconButton disableRipple>
        <Icon />
      </OutlinedIconButton>,
    )
    const button = screen.getByRole("button")

    expect(
      button.querySelector('[data-class*="ButtonBase-rippleContainer"]'),
    ).toBeNull()
  })

  describe("prop: edge", () => {
    it('should render the correct margin on edge="start"', () => {
      const { container } = render(
        <OutlinedIconButton edge="start">
          <Icon />
        </OutlinedIconButton>,
      )

      expect(container.firstChild).toHaveStyle({
        marginLeft: -12,
      })
    })

    it('should render the correct margin on edge="end"', () => {
      const { container } = render(
        <OutlinedIconButton edge="end">
          <Icon />
        </OutlinedIconButton>,
      )

      expect(container.firstChild).toHaveStyle({
        marginRight: -12,
      })
    })

    it("should render no margin without edge", () => {
      const { container } = render(
        <OutlinedIconButton>
          <Icon />
        </OutlinedIconButton>,
      )

      expect(container.firstChild).toHaveStyle({
        marginLeft: 0,
        marginRight: 0,
      })
    })
  })

  describe("prop: selected", () => {
    it("should select the component", () => {
      render(
        <OutlinedIconButton selected>
          <Icon />
        </OutlinedIconButton>,
      )
      const button = screen.getByRole("button")

      expect(button).toMatchSnapshot()
    })

    it("should unselect the component", () => {
      render(
        <OutlinedIconButton selected={false}>
          <Icon />
        </OutlinedIconButton>,
      )
      const button = screen.getByRole("button")

      expect(button).toMatchSnapshot()
    })
  })

  describe("prop: disabled", () => {
    it("should disable the component", () => {
      render(
        <OutlinedIconButton disabled>
          <Icon />
        </OutlinedIconButton>,
      )
      const button = screen.getByRole("button")

      expect(button).toHaveAttribute("aria-disabled", "true")
    })
  })
})