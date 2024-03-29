import { describeConformance, render, screen } from "@md3-ui/test-utils"
import { IconButton } from "."
import { Icon } from "../icon"

describe("<IconButton />", () => {
  describeConformance(
    <IconButton>
      <Icon testID="icon" />
    </IconButton>,
    () => ({
      inheritComponent: "button",
      refInstanceof: window.HTMLButtonElement,
      skip: ["asProp"],
    }),
  )

  it("should render", () => {
    render(
      <IconButton>
        <Icon testID="icon" />
      </IconButton>,
    )
    const button = screen.getByRole("button")
    const icon = screen.getByTestId("icon")

    expect(button).toMatchSnapshot()
    expect(icon).not.toBeNull()
  })

  it("should have a ripple by default", () => {
    render(
      <IconButton>
        <Icon />
      </IconButton>,
    )
    const button = screen.getByRole("button")

    expect(button.querySelector(".ButtonBase-rippleContainer")).not.toBeNull()
  })

  it("should disable the ripple", () => {
    render(
      <IconButton disableRipple>
        <Icon />
      </IconButton>,
    )
    const button = screen.getByRole("button")

    expect(button.querySelector(".ButtonBase-rippleContainer")).toBeNull()
  })

  describe("prop: edge", () => {
    it('should render the correct margin on edge="start"', () => {
      const { container } = render(
        <IconButton edge="start">
          <Icon />
        </IconButton>,
      )

      expect(container.firstChild).toHaveStyle({
        marginLeft: -12,
      })
    })

    it('should render the correct margin on edge="end"', () => {
      const { container } = render(
        <IconButton edge="end">
          <Icon />
        </IconButton>,
      )

      expect(container.firstChild).toHaveStyle({
        marginRight: -12,
      })
    })

    it("should render no margin without edge", () => {
      const { container } = render(
        <IconButton>
          <Icon />
        </IconButton>,
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
        <IconButton toggle selected>
          <Icon />
        </IconButton>,
      )
      const button = screen.getByRole("button")

      expect(button).toMatchSnapshot()
    })

    it("should unselect the component", () => {
      render(
        <IconButton toggle selected={false}>
          <Icon />
        </IconButton>,
      )
      const button = screen.getByRole("button")

      expect(button).toMatchSnapshot()
    })
  })

  describe("prop: disabled", () => {
    it("should disable the component", () => {
      render(
        <IconButton disabled>
          <Icon />
        </IconButton>,
      )
      const button = screen.getByRole("button")

      expect(button).toHaveAttribute("aria-disabled", "true")
    })
  })
})
