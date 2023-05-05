import { Icon } from "@md3-ui/icon"
import { describeConformance, render, screen } from "@md3-ui/test-utils"
import { FilledIconButton } from "../src/filled-icon-button"

describe("<FilledIconButton />", () => {
  describeConformance(
    <FilledIconButton>
      <Icon testID="icon" />
    </FilledIconButton>,
    () => ({
      inheritComponent: "button",
      refInstanceof: window.HTMLButtonElement,
      skip: ["asProp"],
    }),
  )

  it("should render", () => {
    render(
      <FilledIconButton>
        <Icon testID="icon" />
      </FilledIconButton>,
    )
    const button = screen.getByRole("button")
    const icon = screen.getByTestId("icon")

    expect(button).toMatchSnapshot()
    expect(icon).not.toBeNull()
  })

  it("should have a ripple by default", () => {
    render(
      <FilledIconButton>
        <Icon />
      </FilledIconButton>,
    )
    const button = screen.getByRole("button")

    expect(button.querySelector(".ButtonBase-rippleContainer")).not.toBeNull()
  })

  it("should disable the ripple", () => {
    render(
      <FilledIconButton disableRipple>
        <Icon />
      </FilledIconButton>,
    )
    const button = screen.getByRole("button")

    expect(button.querySelector(".ButtonBase-rippleContainer")).toBeNull()
  })

  describe("prop: edge", () => {
    it('should render the correct margin on edge="start"', () => {
      const { container } = render(
        <FilledIconButton edge="start">
          <Icon />
        </FilledIconButton>,
      )

      expect(container.firstChild).toHaveStyle({
        marginLeft: -12,
      })
    })

    it('should render the correct margin on edge="end"', () => {
      const { container } = render(
        <FilledIconButton edge="end">
          <Icon />
        </FilledIconButton>,
      )

      expect(container.firstChild).toHaveStyle({
        marginRight: -12,
      })
    })

    it("should render no margin without edge", () => {
      const { container } = render(
        <FilledIconButton>
          <Icon />
        </FilledIconButton>,
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
        <FilledIconButton toggle selected>
          <Icon />
        </FilledIconButton>,
      )
      const button = screen.getByRole("button")

      expect(button).toMatchSnapshot()
    })

    it("should unselect the component", () => {
      render(
        <FilledIconButton toggle selected={false}>
          <Icon />
        </FilledIconButton>,
      )
      const button = screen.getByRole("button")

      expect(button).toMatchSnapshot()
    })
  })

  describe("prop: disabled", () => {
    it("should disable the component", () => {
      render(
        <FilledIconButton disabled>
          <Icon />
        </FilledIconButton>,
      )
      const button = screen.getByRole("button")

      expect(button).toHaveAttribute("aria-disabled", "true")
    })
  })
})
