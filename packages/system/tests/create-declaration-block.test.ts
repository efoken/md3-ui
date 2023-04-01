import { createDeclarationBlock } from "../src/utils/create-declaration-block"

describe("createDeclarationBlock", () => {
  it("should create valid CSS", () => {
    const css = createDeclarationBlock({
      borderLeftWidth: 1,
    })
    expect(css).toBe("{border-left-width:1px !important;}")
  })
})
