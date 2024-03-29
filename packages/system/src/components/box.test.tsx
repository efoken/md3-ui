import { describeConformance } from "@md3-ui/test-utils"
import { Box } from "./box"

describe("<Box />", () => {
  describeConformance(<Box />, () => ({
    inheritComponent: "div",
    refInstanceof: window.HTMLDivElement,
  }))
})
