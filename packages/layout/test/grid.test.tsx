import { describeConformance, render, screen } from "@md3-ui/test-utils"
import * as React from "react"
import { Grid } from "../src/grid"

describe("<Grid />", () => {
  describeConformance(<Grid />, () => ({
    inheritComponent: "div",
    refInstanceof: window.HTMLDivElement,
  }))

  describe("prop: container", () => {
    it("should apply the container style", () => {
      render(
        <Grid
          container
          testID="container"
          styles={{ container: { backgroundColor: "#f00" } }}
        />,
      )
      expect(screen.getByTestId("container")).toHaveStyle({
        backgroundColor: "#f00",
      })
    })

    it("should apply the correct number of columns for nested containers", () => {
      render(
        <Grid container columns={16}>
          <Grid item span={{ compact: 8 }}>
            <Grid container columns={8} testID="nested-container-in-item">
              <Grid item span={{ compact: 8 }} />
            </Grid>
          </Grid>
        </Grid>,
      )
      const container = screen.getByTestId("nested-container-in-item")

      // `columns` of nested container should have a higher priority than that
      // of root container. Otherwise, `max-width` would be 50% in this test.
      expect(container.firstChild).toHaveStyle({ maxWidth: "100%" })
    })

    it("should apply the correct number of columns for nested containers with undefined prop columns", () => {
      render(
        <Grid container columns={16}>
          <Grid item span={{ compact: 8 }}>
            <Grid container testID="nested-container-in-item">
              <Grid item span={{ compact: 12 }} />
            </Grid>
          </Grid>
        </Grid>,
      )

      const container = screen.getByTestId("nested-container-in-item")
      expect(container.firstChild).toHaveStyle({ maxWidth: "100%" })
    })

    it("should apply the correct number of columns for nested containers with columns=12 (default)", () => {
      render(
        <Grid container columns={16}>
          <Grid item span={{ compact: 8 }}>
            <Grid container columns={12} testID="nested-container-in-item">
              <Grid item span={{ compact: 12 }} />
            </Grid>
          </Grid>
        </Grid>,
      )

      const container = screen.getByTestId("nested-container-in-item")
      expect(container.firstChild).toHaveStyle({ maxWidth: "100%" })
    })
  })

  describe("prop: item", () => {
    it("should apply the item style", () => {
      render(
        <Grid
          item
          testID="item"
          styles={{ item: { backgroundColor: "#f00" } }}
        />,
      )
      expect(screen.getByTestId("item")).toHaveStyle({
        backgroundColor: "#f00",
      })
    })
  })
})
