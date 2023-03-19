import { mergeDeep } from "@md3-ui/utils"

export function merge<T>(acc: T, item: unknown) {
  if (!item) {
    return acc
  }
  return mergeDeep(acc, item, {
    clone: false, // No need to clone deep, it's way faster.
  })
}
