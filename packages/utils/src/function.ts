import { isFunction } from "./assertion"

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

export const noop = () => {}

// Inspired by https://github.com/zeit/async-retry
// Without the retry dependency (1 kB gzipped +)
export async function retry(
  tryFn: (args: {
    tries: number
    bail?: (error: Error) => void
  }) => Promise<any>,
  { retries = 3 }: { retries?: number } = {},
) {
  let output: any
  let exitErr: Error | undefined

  const bail = (error: Error) => {
    exitErr = error
  }

  for (let tries = 1; tries <= retries; tries += 1) {
    try {
      // eslint-disable-next-line no-await-in-loop
      output = await tryFn({ tries, bail })
      break
    } catch (error) {
      if (tries === retries) {
        throw error
      }
    }
  }

  if (exitErr != null) {
    throw exitErr
  }

  return output
}

export function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}

export async function waitUntil(
  fn: () => Promise<{ predicate: boolean; result?: any }>,
  { delay = 5e3, tries = -1 }: { delay?: number; tries?: number } = {},
): Promise<any> {
  const { predicate, result } = await fn()

  if (predicate) {
    return result
  }

  if (tries - 1 === 0) {
    throw new Error("tries limit reached")
  }

  await sleep(delay)
  return waitUntil(fn, { delay, tries: tries > 0 ? tries - 1 : tries })
}

export class Queue<T> {
  concurrency: number

  error: Error | undefined

  inFlight = 0

  pendingEntries: T[] = []

  worker: (entry: T) => Promise<void>

  constructor(
    worker: (entry: T) => Promise<void>,
    { concurrency = 1 }: { concurrency?: number } = {},
  ) {
    this.worker = worker
    this.concurrency = concurrency
  }

  push = (entries: T[]) => {
    this.pendingEntries = [...this.pendingEntries, ...entries]
    this.process()
  }

  process = () => {
    const scheduled = this.pendingEntries.splice(
      0,
      this.concurrency - this.inFlight,
    )
    this.inFlight += scheduled.length
    scheduled.forEach(async (task) => {
      try {
        await this.worker(task)
      } catch (error) {
        this.error = error as Error
      } finally {
        this.inFlight -= 1
      }

      if (this.pendingEntries.length > 0) {
        this.process()
      }
    })
  }

  wait = ({ empty = false }: { empty?: boolean } = {}) =>
    waitUntil(
      async () => {
        if (this.error) {
          this.pendingEntries = []
          throw this.error
        }
        return {
          predicate: empty
            ? this.inFlight === 0 && this.pendingEntries.length === 0
            : this.concurrency > this.pendingEntries.length,
        }
      },
      { delay: 50 },
    )
}
