import { usePreviousProps } from "@md3-ui/hooks"

export interface UseBadgeProps {
  invisible?: boolean
  max?: number
  showZero?: boolean
  value?: string | number
}

export function useBadge({
  invisible: invisibleProp = false,
  max: maxProp = 99,
  showZero = false,
  value: valueProp,
}: UseBadgeProps) {
  const prevProps = usePreviousProps({
    value: valueProp,
    max: maxProp,
  })

  const invisible = invisibleProp || (valueProp === 0 && !showZero)

  const { max = maxProp, value } = invisible
    ? prevProps
    : { max: maxProp, value: valueProp }

  const displayValue = value != null && Number(value) > max ? `${max}+` : value

  return {
    displayValue,
    invisible,
    max,
    value,
  }
}

export type UseBadgeReturn = ReturnType<typeof useBadge>
