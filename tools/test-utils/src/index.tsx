import { Md3Provider } from "@md3-ui/core"
import "@testing-library/jest-dom/extend-expect"
import {
  render as rtlRender,
  RenderOptions,
  RenderResult,
} from "@testing-library/react"
import * as React from "react"

const ChildrenPassthrough: React.VFC<{ children: React.ReactElement }> = ({
  children,
}) => children

export interface TestOptions extends Omit<RenderOptions, "wrapper"> {
  /**
   * Optional additional wrapper, e.g. context
   *
   * @example
   * ```ts
   * // single wrapper
   * render(<MyConponent />, {
   *   wrapper: MyContext
   * });
   *
   * // multiple wrapper
   * render(<MyConponent />, {
   *   wrapper: ({ children }) => (
   *     <ContextA>
   *       <ContextB>{children}<ContextB />
   *     <ContextA />
   *   )
   * });
   * ```
   */
  wrapper?: typeof ChildrenPassthrough
}

/**
 * Custom render for @testing-library/react
 *
 * @see https://testing-library.com/docs/react-testing-library/setup#custom-render
 * @param ui The component under test
 * @param options Customized test options
 */
export const render = (
  ui: React.ReactElement,
  { wrapper: Wrapper = ChildrenPassthrough, ...options }: TestOptions = {},
): RenderResult =>
  rtlRender(
    <Md3Provider>
      <Wrapper>{ui}</Wrapper>
    </Md3Provider>,
    options,
  )

export { screen } from "@testing-library/react"
