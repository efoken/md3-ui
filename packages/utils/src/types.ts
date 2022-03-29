export type DistributiveOmit<T, K extends keyof any> = T extends any
  ? Omit<T, K>
  : never

export type FunctionArguments<T extends Function> = T extends (
  ...args: infer R
) => any
  ? R
  : never
