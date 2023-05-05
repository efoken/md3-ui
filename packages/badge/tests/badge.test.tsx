import { describeConformance, render, screen } from "@md3-ui/test-utils"
import { Badge } from "../src/badge"

function findBadge(container: HTMLElement) {
  return container.firstElementChild?.querySelector(".Badge-badge")
}

describe("<Badge />", () => {
  const defaultProps = {
    children: <div data-testid="children">Hello World</div>,
    value: 10,
  }

  describeConformance(
    <Badge>
      <div />
    </Badge>,
    () => ({
      inheritComponent: "div",
      refInstanceof: window.HTMLDivElement,
      skip: ["asProp"],
    }),
  )

  it("renders children and value", () => {
    const { container } = render(
      <Badge value="badge">
        <div id="child" data-testid="child" />
      </Badge>,
    )
    expect(container.firstChild).toContainElement(screen.getByTestId("child"))
    expect(container.firstChild).toContainElement(screen.getByText("badge"))
  })

  it("renders children", () => {
    const { container } = render(<Badge {...defaultProps} />)
    expect(container.firstChild).toContainElement(
      screen.getByTestId("children"),
    )
  })

  describe("prop: invisible", () => {
    it("should default to false", () => {
      const { container } = render(<Badge {...defaultProps} />)
      expect(findBadge(container)).toHaveAttribute(
        "style",
        expect.stringMatching(/scale\(1\)/),
      )
    })

    it("should render without the invisible style when set to false", () => {
      const { container } = render(
        <Badge {...defaultProps} invisible={false} />,
      )
      expect(findBadge(container)).toHaveAttribute(
        "style",
        expect.stringMatching(/scale\(1\)/),
      )
    })

    it("should render with the invisible style when set to true", () => {
      const { container } = render(<Badge {...defaultProps} invisible />)
      expect(findBadge(container)).toHaveAttribute(
        "style",
        expect.stringMatching(/scale\(0\)/),
      )
    })

    it("should render without the invisible style when empty", () => {
      const { container } = render(
        <Badge {...defaultProps} value={undefined} />,
      )
      expect(findBadge(container)).toHaveAttribute(
        "style",
        expect.stringMatching(/scale\(1\)/),
      )
    })

    it("should render with invisible style when invisible and showZero are set to false and value is 0", () => {
      const { container } = render(
        <Badge value={0} showZero={false} invisible={false} />,
      )
      expect(findBadge(container)).toHaveAttribute(
        "style",
        expect.stringMatching(/scale\(0\)/),
      )
      expect(findBadge(container)?.firstChild).toBeEmptyDOMElement()
    })

    it("should not render with invisible style when invisible and showZero are set to false and value is not 0", () => {
      const { container } = render(
        <Badge value={1} showZero={false} invisible={false} />,
      )
      expect(findBadge(container)).toHaveAttribute(
        "style",
        expect.stringMatching(/scale\(1\)/),
      )
      expect(findBadge(container)?.firstChild).toHaveTextContent("1")
    })
  })

  describe("prop: showZero", () => {
    it("should default to false", () => {
      const { container } = render(<Badge {...defaultProps} value={0} />)
      expect(findBadge(container)).toHaveAttribute(
        "style",
        expect.stringMatching(/scale\(0\)/),
      )
    })

    it("should render without the invisible style when false and value is not 0", () => {
      const { container } = render(<Badge {...defaultProps} showZero />)
      expect(findBadge(container)).toHaveAttribute(
        "style",
        expect.stringMatching(/scale\(1\)/),
      )
    })

    it("should render without the invisible style when true and value is 0", () => {
      const { container } = render(
        <Badge {...defaultProps} value={0} showZero />,
      )
      expect(findBadge(container)).toHaveAttribute(
        "style",
        expect.stringMatching(/scale\(1\)/),
      )
    })

    it("should render with the invisible style when false and value is 0", () => {
      const { container } = render(
        <Badge {...defaultProps} value={0} showZero={false} />,
      )
      expect(findBadge(container)).toHaveAttribute(
        "style",
        expect.stringMatching(/scale\(0\)/),
      )
    })
  })

  describe("prop: max", () => {
    it("should default to 99", () => {
      const { container } = render(<Badge {...defaultProps} value={100} />)
      expect(findBadge(container)).toContainElement(screen.getByText("99+"))
    })

    it("should cap value", () => {
      const { container } = render(
        <Badge {...defaultProps} value={1000} max={999} />,
      )
      expect(findBadge(container)).toContainElement(screen.getByText("999+"))
    })

    it("should not cap if value and max are equal", () => {
      const { container } = render(
        <Badge {...defaultProps} value={1000} max={1000} />,
      )
      expect(findBadge(container)).toContainElement(screen.getByText("1000"))
    })

    it("should not cap if badgeContent is lower than max", () => {
      const { container } = render(
        <Badge {...defaultProps} value={50} max={1000} />,
      )
      expect(findBadge(container)).toContainElement(screen.getByText("50"))
    })
  })
})
