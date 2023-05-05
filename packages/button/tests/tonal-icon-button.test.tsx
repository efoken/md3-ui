import { Icon } from "@md3-ui/icon"
import { describeConformance, render, screen } from "@md3-ui/test-utils"
import { TonalIconButton } from "../src/tonal-icon-button"

describe("<TonalIconButton />", () => {
  describeConformance(
    <TonalIconButton>
      <Icon testID="icon" />
    </TonalIconButton>,
    () => ({
      inheritComponent: "button",
      refInstanceof: window.HTMLButtonElement,
      skip: ["asProp"],
    }),
  )

  it("should render", () => {
    render(
      <TonalIconButton>
        <Icon testID="icon" />
      </TonalIconButton>,
    )
    const button = screen.getByRole("button")
    const icon = screen.getByTestId("icon")

    expect(button).toMatchSnapshot()
    expect(icon).not.toBeNull()
  })

  it("should have a ripple by default", () => {
    render(
      <TonalIconButton>
        <Icon />
      </TonalIconButton>,
    )
    const button = screen.getByRole("button")

    expect(button.querySelector(".ButtonBase-rippleContainer")).not.toBeNull()
  })

  it("should disable the ripple", () => {
    render(
      <TonalIconButton disableRipple>
        <Icon />
      </TonalIconButton>,
    )
    const button = screen.getByRole("button")

    expect(button.querySelector(".ButtonBase-rippleContainer")).toBeNull()
  })

  describe("prop: edge", () => {
    it('should render the correct margin on edge="start"', () => {
      const { container } = render(
        <TonalIconButton edge="start">
          <Icon />
        </TonalIconButton>,
      )

      expect(container.firstChild).toHaveStyle({
        marginLeft: -12,
      })
    })

    it('should render the correct margin on edge="end"', () => {
      const { container } = render(
        <TonalIconButton edge="end">
          <Icon />
        </TonalIconButton>,
      )

      expect(container.firstChild).toHaveStyle({
        marginRight: -12,
      })
    })

    it("should render no margin without edge", () => {
      const { container } = render(
        <TonalIconButton>
          <Icon />
        </TonalIconButton>,
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
        <TonalIconButton toggle selected>
          <Icon />
        </TonalIconButton>,
      )
      const button = screen.getByRole("button")

      expect(button).toMatchSnapshot()
    })

    it("should unselect the component", () => {
      render(
        <TonalIconButton toggle selected={false}>
          <Icon />
        </TonalIconButton>,
      )
      const button = screen.getByRole("button")

      expect(button).toMatchSnapshot()
    })
  })

  describe("prop: disabled", () => {
    it("should disable the component", () => {
      render(
        <TonalIconButton disabled>
          <Icon />
        </TonalIconButton>,
      )
      const button = screen.getByRole("button")

      expect(button).toHaveAttribute("aria-disabled", "true")
    })
  })
})
