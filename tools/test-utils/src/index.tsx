import { Md3Provider } from "@md3-ui/core"
import "@testing-library/jest-dom/extend-expect"
import {
  render as rtlRender,
  RenderOptions,
  RenderResult,
} from "@testing-library/react"
import { axe, JestAxeConfigureOptions, toHaveNoViolations } from "jest-axe"
import * as React from "react"

expect.extend(toHaveNoViolations)

export interface TestOptions extends RenderOptions {}

/**
 * Custom render for @testing-library/react
 *
 * @see https://testing-library.com/docs/react-testing-library/setup#custom-render
 * @param ui The component under test
 * @param options Customized test options
 */
export const render = (
  ui: React.ReactElement,
  { wrapper: Wrapper = React.Fragment, ...options }: TestOptions = {},
): RenderResult => {
  const result = rtlRender(
    <Md3Provider>
      <Wrapper>{ui}</Wrapper>
    </Md3Provider>,
    options,
  )
  return {
    ...result,
    rerender: (newUI) =>
      render(newUI, { container: result.container, ...options }),
  }
}

export async function testA11y(
  ui: React.ReactElement | HTMLElement,
  {
    axeOptions,
    ...options
  }: TestOptions & { axeOptions?: JestAxeConfigureOptions } = {},
) {
  const container = React.isValidElement(ui)
    ? render(ui, options).container
    : ui
  expect(await axe(container, axeOptions)).toHaveNoViolations()
}

function testAsProp(
  ui: React.ReactElement,
  getOptions: () => ConformanceOptions,
) {
  describe("prop: as", () => {
    it("should render another root component with the `as` prop", () => {
      const { render: testRender = render, testAsPropWith: as = "em" } =
        getOptions()

      const { container } = testRender(React.cloneElement(ui, { as }))

      expect(container.querySelectorAll(as).length).toBeTruthy()
    })
  })
}

function testClassName(
  ui: React.ReactElement,
  getOptions: () => ConformanceOptions,
) {
  it("should apply the className to the root component", () => {
    const { render: testRender = render } = getOptions()
    const className = `s${Math.random().toString(36).slice(2)}`

    const { container } = testRender(
      React.cloneElement(ui, { dataSet: { class: className } }),
    )

    expect(container.firstElementChild?.getAttribute("data-class")).toMatch(
      new RegExp(className),
    )
  })
}

function testPropsSpread(
  ui: React.ReactElement,
  getOptions: () => ConformanceOptions,
) {
  it("should spread props to the root component", () => {
    const { inheritComponent, render: testRender = render } = getOptions()
    if (inheritComponent == null) {
      throw new TypeError(
        "Unable to test props spread without `inheritComponent`. Either skip the test or pass a React element type.",
      )
    }

    const testProp = "test-props-spread"
    const value = `s${Math.random().toString(36).slice(2)}`

    const { container } = testRender(
      React.cloneElement(ui, { dataSet: { [testProp]: value } }),
    )

    expect(container.querySelector(inheritComponent)).toHaveAttribute(
      `data-${testProp}`,
      value,
    )
  })
}

const fullSuite = {
  asProp: testAsProp,
  // componentsProp: testComponentsProp,
  mergeClassName: testClassName,
  propsSpread: testPropsSpread,
  // refForwarding: describeRef,
  // rootClass: testRootClass,
  // reactTestRenderer: testReactTestRenderer,
  // themeDefaultProps: testThemeDefaultProps,
  // themeStyleOverrides: testThemeStyleOverrides,
  // themeVariants: testThemeVariants,
}

export interface ConformanceOptions {
  afterAll?: () => void
  inheritComponent?: string
  only?: (keyof typeof fullSuite)[]
  refInstanceof?: typeof HTMLElement
  render?: (ui: React.ReactElement, options?: TestOptions) => RenderResult
  skip?: (keyof typeof fullSuite)[]
  testAsPropWith?: string
}

export function describeConformance(
  ui: React.ReactElement,
  getOptions: () => ConformanceOptions,
) {
  describe("component API", () => {
    const {
      afterAll: afterAllHook = () => {},
      only = Object.keys(fullSuite),
      skip = [] as string[],
    } = getOptions()

    const filteredTests = Object.keys(fullSuite).filter(
      (testKey) => only.includes(testKey) && !skip.includes(testKey),
    )

    afterAll(afterAllHook)

    filteredTests.forEach((testKey) => {
      const test = fullSuite[testKey]
      test(ui, getOptions)
    })
  })
}

export { screen } from "@testing-library/react"
