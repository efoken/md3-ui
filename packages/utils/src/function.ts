import { isFunction } from "./assertion"

export { default as memoize } from "micro-memoize"

export function runIfFn<T, U>(
  valueOrFn: T | ((...fnArgs: U[]) => T),
  ...args: U[]
): T {
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn
}

export function createChainedFunction<T extends (...args: any[]) => void>(
  ...fns: (T | undefined | null)[]
): T {
  return fns.reduce<T>(
    (acc, fn) => {
      if (fn == null) {
        return acc
      }
      return function chainedFunction(this: any, ...args) {
        acc.apply(this, args)
        fn.apply(this, args)
      } as T
    },
    (() => {}) as T,
  )
}
