import { objectKeys } from "./object"

export function resolveProps<T extends Record<string, unknown>>(
  defaultProps: T,
  props: T,
) {
  const result = { ...props }

  objectKeys(defaultProps).forEach((propName) => {
    if (result[propName] == null) {
      result[propName] = defaultProps[propName]
    }
  })

  return result
}

export function splitProps<T extends object, K1 extends keyof T>(
  props: T,
  ...args: [K1[]]
): [Pick<T, K1>, Omit<T, K1>]

export function splitProps<
  T extends object,
  K1 extends keyof T,
  K2 extends keyof T,
>(props: T, ...args: [K1[], K2[]]): [Pick<T, K1>, Pick<T, K2>, Omit<T, K1 | K2>]

export function splitProps<
  T extends object,
  K1 extends keyof T,
  K2 extends keyof T,
  K3 extends keyof T,
>(
  props: T,
  ...args: [K1[], K2[], K3[]]
): [Pick<T, K1>, Pick<T, K2>, Pick<T, K3>, Omit<T, K1 | K2 | K3>]

export function splitProps<
  T extends object,
  K1 extends keyof T,
  K2 extends keyof T,
  K3 extends keyof T,
  K4 extends keyof T,
>(
  props: T,
  ...args: [K1[], K2[], K3[], K4[]]
): [
  Pick<T, K1>,
  Pick<T, K2>,
  Pick<T, K3>,
  Pick<T, K4>,
  Omit<T, K1 | K2 | K3 | K4>,
]

export function splitProps<
  T extends object,
  K1 extends keyof T,
  K2 extends keyof T,
  K3 extends keyof T,
  K4 extends keyof T,
  K5 extends keyof T,
>(
  props: T,
  ...args: [K1[], K2[], K3[], K4[], K5[]]
): [
  Pick<T, K1>,
  Pick<T, K2>,
  Pick<T, K3>,
  Pick<T, K4>,
  Pick<T, K5>,
  Omit<T, K1 | K2 | K3 | K4 | K5>,
]

export function splitProps<
  T extends object,
  K1 extends keyof T,
  K2 extends keyof T,
  K3 extends keyof T,
  K4 extends keyof T,
  K5 extends keyof T,
  K6 extends keyof T,
>(
  props: T,
  ...args: [K1[], K2[], K3[], K4[], K5[], K6[]]
): [
  Pick<T, K1>,
  Pick<T, K2>,
  Pick<T, K3>,
  Pick<T, K4>,
  Pick<T, K5>,
  Pick<T, K6>,
  Omit<T, K1 | K2 | K3 | K4 | K5 | K6>,
]

export function splitProps<
  T extends object,
  K1 extends keyof T,
  K2 extends keyof T,
  K3 extends keyof T,
  K4 extends keyof T,
  K5 extends keyof T,
  K6 extends keyof T,
  K7 extends keyof T,
>(
  props: T,
  ...args: [K1[], K2[], K3[], K4[], K5[], K6[], K7[]]
): [
  Pick<T, K1>,
  Pick<T, K2>,
  Pick<T, K3>,
  Pick<T, K4>,
  Pick<T, K5>,
  Pick<T, K6>,
  Pick<T, K7>,
  Omit<T, K1 | K2 | K3 | K4 | K5 | K6 | K7>,
]

export function splitProps<
  T extends object,
  K1 extends keyof T,
  K2 extends keyof T,
  K3 extends keyof T,
  K4 extends keyof T,
  K5 extends keyof T,
  K6 extends keyof T,
  K7 extends keyof T,
  K8 extends keyof T,
>(
  props: T,
  ...args: [K1[], K2[], K3[], K4[], K5[], K6[], K7[], K8[]]
): [
  Pick<T, K1>,
  Pick<T, K2>,
  Pick<T, K3>,
  Pick<T, K4>,
  Pick<T, K5>,
  Pick<T, K6>,
  Pick<T, K7>,
  Pick<T, K8>,
  Omit<T, K1 | K2 | K3 | K4 | K5 | K6 | K7 | K8>,
]

export function splitProps<T extends Record<string, any>>(
  props: T,
  ...args: (keyof T)[][]
) {
  const result: any = []
  const mapping = args.reduce<any>((acc, defs, index) => {
    defs.forEach((def) => {
      acc[def] = { name: def, index }
    })
    return acc
  }, {})
  Object.entries(props).forEach(([key, value]) => {
    const def = mapping[key]
    const [index, name] = def ? [def.index, def.name] : [args.length, key]
    result[index] = { ...result[index], [name]: value }
  })
  return result
}
