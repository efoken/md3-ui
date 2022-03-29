export function hasValue(value: any) {
  return value != null && !(Array.isArray(value) && value.length === 0)
}

export function isFilled(
  props: { defaultValue?: any; value?: any } = {},
  ssr = false,
) {
  return (
    (hasValue(props.value) && props.value !== "") ||
    (ssr && hasValue(props.defaultValue) && props.defaultValue !== "")
  )
}
