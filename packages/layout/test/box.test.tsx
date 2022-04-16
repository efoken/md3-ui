import { describeConformance } from "@md3-ui/test-utils"
import * as React from "react"
import { Box } from "../src/box"

describe("<Box />", () => {
  describeConformance(<Box />, () => ({
    inheritComponent: "div",
    refInstanceof: window.HTMLDivElement,
  }))
})
