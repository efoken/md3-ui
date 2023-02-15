import { isObject } from "./assertion"

export function get(obj: object, path: string | number, fallback?: any) {
  const keys = typeof path === "string" ? path.split(".") : [path]

  // eslint-disable-next-line no-restricted-syntax
  for (const key of keys) {
    if (!obj) {
      break
    }
    // eslint-disable-next-line no-param-reassign
    obj = obj[key]
  }

  return obj === undefined ? fallback : obj
}

export function mapValues<T extends object, TResult>(
  obj: T,
  cb?:
    | ((value: T[keyof T], key: string, collection: T) => TResult)
    | string
    | null,
) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key,
      cb == null
        ? value
        : typeof cb === "string"
        ? get(value, cb)
        : cb?.(value, key, obj),
    ]),
  )
}

export function cloneDeep<T>(obj: T): T {
  return structuredClone(obj)
}

export function mergeDeep<T>(
  target: T,
  source: unknown,
  // eslint-disable-next-line unicorn/no-object-as-default-parameter
  options: { clone?: boolean } = { clone: true },
): T {
  const output = options.clone ? { ...target } : target

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      // Avoid prototype pollution
      if (key === "__proto__" || key === "constructor") {
        return
      }

      if (isObject(source[key]) && key in target && isObject(target[key])) {
        // Since `output` is a clone of `target` and we have narrowed `target`
        // in this block we can cast to the same type.
        ;(output as Record<keyof any, unknown>)[key] = mergeDeep(
          target[key],
          source[key],
          options,
        )
      } else {
        ;(output as Record<keyof any, unknown>)[key] = source[key]
      }
    })
  }

  return output
}

export function objectFilter<T extends object>(
  object: T,
  fn: (value: T[keyof T], key: string, object: T) => boolean,
) {
  return Object.fromEntries(
    Object.entries(object).filter(([key, value]) => fn(value, key, object)),
  )
}

export const objectKeys = <T extends object>(obj: T) =>
  Object.keys(obj) as (keyof T)[]
